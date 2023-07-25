'use client';

import { TextLogo } from '@/components/ui/common';
import { PasswordInput, TextInput } from '@/components/ui/form';
import { Modal } from '@/components/ui/overlay';
import { SignInParams, signIn } from '@/services/authentication-service';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Form from '@radix-ui/react-form';
import { EnvelopeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useSignInModal, useSignUpModal } from './store';
import { signInSchema } from './validation-schema';

const ModalTitle = (): JSX.Element => (
  <h4 className="body tablet:heading-5 desktop:heading-4">
    Sign in to <TextLogo />
  </h4>
);

export const SignInModal = (): JSX.Element => {
  const { isOpen, onChange } = useSignInModal();
  const { onOpen: onOpenSignUp } = useSignUpModal();
  const router = useRouter();

  const { handleSubmit, register, formState } = useForm<SignInParams>({
    resolver: yupResolver(signInSchema)
  });
  const { errors } = formState;

  const { isLoading, mutate } = useMutation(signIn, {
    onSuccess: () => router.push('/dashboard')
  });

  const handleOpenSignUp = () => {
    onChange(false);
    onOpenSignUp();
  };

  return (
    <Modal isOpen={isOpen} onChange={onChange} title={<ModalTitle />}>
      <Form.Root
        className="flex w-full flex-col"
        onSubmit={handleSubmit(params => mutate(params))}
      >
        <Form.Field className="mb-6" name="email">
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

        <Form.Field className="mb-2" name="password">
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

        <p className="label-small mb-6 ml-auto">Forgot password?</p>

        <Form.Submit asChild>
          <button
            className="btn btn-large btn-primary mb-6 w-full"
            disabled={isLoading}
          >
            Sign in
          </button>
        </Form.Submit>

        <button
          type="button"
          className="desktop:label label-small text-center"
          onClick={handleOpenSignUp}
        >
          <span className="tablet:inline hidden">Don’t have an account? </span>
          <strong>
            Sign up to <TextLogo />
          </strong>
        </button>
      </Form.Root>
    </Modal>
  );
};
