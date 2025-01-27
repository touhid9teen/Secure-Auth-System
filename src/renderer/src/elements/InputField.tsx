import { ChangeEvent, useState } from 'react';

import { HidePasswordIcon, ShowPasswordIcon } from './Icon';

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  customInputClass?: string;
  id: string;
  name: string;
  value: string;
  onChangeInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  customInputClass = '',
  id,
  name,
  value,
  onChangeInput,
}: InputFieldProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const togglePasswordVisibility = () => setIsPasswordVisible((prevState) => !prevState);

  if (type === 'password') {
    return (
      <div className="relative">
        <input
          id={id}
          className={`w-full rounded-lg border-2 border-silver-cloud px-4 py-2.5 pr-12 text-base text-deep-blue placeholder:text-base placeholder:text-tranquil-blue ${customInputClass}`}
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChangeInput}
          name={name}
          value={value}
        />

        {isPasswordVisible ? (
          <ShowPasswordIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
            onClick={togglePasswordVisibility}
          />
        ) : (
          <HidePasswordIcon
            className="absolute right-4 top-1/2 -translate-y-1/2 transform"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    );
  }

  return (
    <input
      id={id}
      className={`w-full rounded-lg border-2 border-silver-cloud px-4 py-2.5 text-base text-deep-blue placeholder:text-base placeholder:text-tranquil-blue ${customInputClass}`}
      type={type}
      placeholder={placeholder}
      onChange={onChangeInput}
      name={name}
      value={value}
    />
  );
};

export default InputField;
