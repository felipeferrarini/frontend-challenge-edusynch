'use client';

import { subscribeNewsletter } from '@/services/newsletter-service';
import * as Form from '@radix-ui/react-form';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';

export const NewsLetterForm = (): JSX.Element => {
  const { handleSubmit, reset, register } = useForm<{ email: string }>();

  const { isLoading, mutate } = useMutation(subscribeNewsletter, {
    onSuccess: () => reset()
  });

  return (
    <Form.Root
      className="w-full"
      onSubmit={handleSubmit(({ email }) => mutate(email))}
    >
      <Form.Field className="mb-5" name="email">
        <div className="mb-2 flex items-baseline justify-between">
          <Form.Label htmlFor="email" className="label text-white">
            Email
          </Form.Label>
          <Form.Message className="label text-white" match="valueMissing">
            Please enter your email
          </Form.Message>
          <Form.Message className="label text-white" match="typeMismatch">
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            id="email"
            className="input tablet:input-large input-medium w-full"
            type="email"
            placeholder="Email"
            required
            disabled={isLoading}
            {...register('email')}
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button
          className="btn tablet:btn-large btn-medium btn-primary bg-primary-500 w-full shadow-[0px_12px_24px_0px_rgba(0,0,0,0.10)]"
          disabled={isLoading}
        >
          Subscribe
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
