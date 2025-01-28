import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { LoginFormDefaultValue, LoginFormSchema } from '@renderer/components/schema/LoginForm';

import Button from '@renderer/elements/Button';
import { FacebookIcon, GoogleIcon } from '@renderer/elements/Icon';
import InputField from '@renderer/elements/InputField';
import Label from '@renderer/elements/Label';


interface ILoginRequest {
  email: string;
  password: string;
}

type FieldKeys = 'email' | 'password';

const FormFields = [
  { name: 'Email', key: 'email', placeholder: 'Email' },
  { name: 'Password', key: 'password', placeholder: 'Password' },
];

const Login: FC = () => {


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    resolver: yupResolver<ILoginRequest>(LoginFormSchema),
    defaultValues: LoginFormDefaultValue,
  });


  const handleFormSubmit: SubmitHandler<ILoginRequest> = async (payload: ILoginRequest) => {
    try {
      const response = await axios.post('/auth/login', payload);
      localStorage.setItem('user', JSON.stringify(response.data.user));
    } catch (error: unknown) {
      console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error('An unexpected error occurred');
      }
    }
  };

  return (
    <>
      <div className="py-8 2xl:py-12">
        <div className="mr-16 2xl:mr-28">
          <p className="flex justify-end text-sm">
            Don't have an account?&nbsp;
            <span className="font-medium text-primary">
              Sign Up!&nbsp;
            </span>
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center 2xl:mt-20">
          <h2 className="text-4xl font-semibold">Welcome Back</h2>
          <h3 className="mt-2 text-lg">Login into your account</h3>

          <div className="mt-12 flex items-center justify-center gap-3 text-xs font-medium">
            <Button
              buttonVariant="secondary"
              customClass="py-2 px-6 flex justify-center item-center !rounded-md hover:border-vibrant-green transition-all"
              icon={{ iconFile: <GoogleIcon />, iconCustomClass: 'w-6.5 h-6.5' }}
            >
              Google
            </Button>
            <Button
              buttonVariant="secondary"
              customClass="py-2 px-6 flex justify-center item-center !rounded-md hover:border-vibrant-green transition-all"
              icon={{ iconFile: <FacebookIcon />, iconCustomClass: 'w-6.5 h-6.5' }}
            >
              Facebook
            </Button>
          </div>
        </div>

        <div className="mt-11 flex items-center justify-center gap-x-3">
          <span className="h-0.25 w-32 bg-silver-mist"></span>
          <span className="text-xs">Or continue with</span>
          <span className="h-0.25 w-32 bg-silver-mist"></span>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center">
          <form className="flex w-96 flex-col gap-5" onSubmit={handleSubmit(handleFormSubmit)}>
            {FormFields.map((field) => (
              <div key={field.key}>
                <Label customClass="mb-2 text-base text-dark-indigo" labelText={field.name} htmlFor={field.key} />
                <Controller
                  name={field.key as FieldKeys}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputField
                      id={field.key}
                      name={field.name}
                      value={value}
                      type={field.key === 'password' ? 'password' : 'text'}
                      placeholder={field.placeholder}
                      onChangeInput={onChange}
                    />
                  )}
                />
                {errors[field.key] && (
                  <span className="mt-2 text-sm text-coral-sunset">{errors[field.key].message}</span>
                )}
              </div>
            ))}

            <Button
              customClass="flex justify-center item-center font-semibold"
              buttonType="submit"
              // disabled={isLoading}
            >
              <div className="relative flex min-h-12 min-w-48 items-center justify-center">
                Log In
              </div>
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
