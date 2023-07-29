'use client';

import { TextLogo } from '@/components/ui/common';
import { Checkbox, PasswordInput, TextInput } from '@/components/ui/form';
import { Modal } from '@/components/ui/overlay';
import { SignUpParams, signUp } from '@/services/authentication-service';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Form from '@radix-ui/react-form';
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon
} from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSignInModal, useSignUpModal } from './store';
import { signUpSchema } from './validation-schema';

const ModalTitle = (): JSX.Element => (
  <span className="body tablet:heading-5 desktop:heading-4">
    Sign up to <TextLogo />
  </span>
);

export const SignUpModal = (): JSX.Element => {
  const { isOpen, onChange } = useSignUpModal();
  const { onOpen: onOpenSignIn } = useSignInModal();
  const router = useRouter();

  const { handleSubmit, register, formState, setValue } = useForm<SignUpParams>(
    { resolver: yupResolver(signUpSchema) }
  );
  const { errors } = formState;

  const { isLoading, mutate } = useMutation(signUp, {
    onSuccess: () => {
      router.push('/dashboard');
      onChange(false);
    }
  });

  const handleOpenSignIn = () => {
    onChange(false);
    onOpenSignIn();
  };

  return (
    <Modal isOpen={isOpen} onChange={onChange} title={<ModalTitle />}>
      <Form.Root
        className="flex w-full flex-col gap-6"
        onSubmit={handleSubmit(params => mutate(params))}
      >
        <Form.Field name="name">
          <Form.Control asChild>
            <TextInput
              placeholder="Name"
              disabled={isLoading}
              {...register('name')}
              icon={<PersonIcon />}
            />
          </Form.Control>
          {errors.name && (
            <Form.Message className="tablet:label label-small">
              {errors.name.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="email">
          <Form.Control asChild>
            <TextInput
              placeholder="Email"
              disabled={isLoading}
              {...register('email')}
              icon={<EnvelopeClosedIcon />}
            />
          </Form.Control>
          {errors.email && (
            <Form.Message className="tablet:label label-small">
              {errors.email.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="password">
          <Form.Control asChild>
            <PasswordInput
              placeholder="Password"
              disabled={isLoading}
              {...register('password')}
              icon={<LockClosedIcon />}
            />
          </Form.Control>
          {errors.password && (
            <Form.Message className="tablet:label label-small">
              {errors.password.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="confirmPassword">
          <Form.Control asChild>
            <PasswordInput
              placeholder="Confirm password"
              disabled={isLoading}
              {...register('confirmPassword')}
              icon={<LockClosedIcon />}
            />
          </Form.Control>
          {errors.confirmPassword && (
            <Form.Message className="tablet:label label-small">
              {errors.confirmPassword.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Field name="terms">
          <Form.Control asChild>
            <Checkbox
              id="terms"
              className={errors.terms && ''}
              label={
                <span className="tablet:label label-small">
                  I have read and accept the <strong>Privacy Policy</strong> and{' '}
                  <strong>Terms of User Sign up</strong>.
                </span>
              }
              onCheckedChange={value => {
                if (typeof value === 'boolean') {
                  setValue('terms', value);
                }
              }}
            />
          </Form.Control>
          {errors.terms && (
            <Form.Message className="tablet:label label-small">
              {errors.terms.message}
            </Form.Message>
          )}
        </Form.Field>

        <Form.Submit asChild>
          <button
            className="btn btn-large btn-primary w-full"
            disabled={isLoading}
          >
            Sign up
          </button>
        </Form.Submit>

        <button
          type="button"
          className="desktop:label label-small text-center"
          onClick={handleOpenSignIn}
        >
          <span className="tablet:inline hidden">
            Already have and account?{' '}
          </span>
          <span className="font-bold">
            Sign in to <TextLogo />
          </span>
        </button>
      </Form.Root>
    </Modal>
  );
};
