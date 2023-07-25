import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { forwardRef, useCallback, useState } from 'react';
import { InputFieldProps, TextInput } from './text-input';

export const PasswordInput = forwardRef<HTMLInputElement, InputFieldProps>(
  (props, ref): JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = useCallback(() => {
      setShowPassword(prev => !prev), [];
    }, []);

    return (
      <div className="relative">
        <TextInput
          {...props}
          ref={ref}
          inputClassName="pr-12"
          type={showPassword ? 'text' : 'password'}
        />
        <div className="absolute bottom-0 right-0 top-0 flex items-center pr-4">
          <button
            onClick={togglePassword}
            className="btn btn-ghost text-secondary-300 p-1"
          >
            {showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
          </button>
        </div>
      </div>
    );
  }
);
