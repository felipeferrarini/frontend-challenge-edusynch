'use client';

import cx from 'classnames';
import { PropsWithChildren } from 'react';
import { useSignInModal, useSignUpModal } from './store';

export const SignInButton = (): JSX.Element => {
  const { onOpen } = useSignInModal();

  return (
    <button className="link" onClick={onOpen}>
      Sign in
    </button>
  );
};

export const SignUpButton = ({
  children,
  className
}: PropsWithChildren<PropsWithClassName>): JSX.Element => {
  const { onOpen } = useSignUpModal();

  return (
    <button
      className={cx('btn btn-small btn-primary', className)}
      onClick={onOpen}
    >
      {children || 'Sign up'}
    </button>
  );
};
