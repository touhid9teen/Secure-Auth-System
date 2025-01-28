import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import axios from 'axios'

import { SignupFormDefaultValue, SignupFormSchema } from '@renderer/components/schema/SingupForm'
import Button from '@renderer/elements/Button'
import { GoogleIcon, FacebookIcon } from '@renderer/elements/Icon'
import InputField from '@renderer/elements/InputField'
import Label from '@renderer/elements/Label'

const FormFields = [
  {
    key: 'email',
    name: 'Email',
    placeholder: 'Enter your email'
  },
  {
    key: 'password',
    name: 'Password',
    placeholder: 'Enter your password'
  },
  {
    key: 'confirmPassword',
    name: 'Confirm Password',
    placeholder: 'Confirm your password'
  }
]

type FieldKeys = 'email' | 'password' | 'confirmPassword'

interface ISignupRequest {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Signup: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignupRequest>({
    resolver: yupResolver(SignupFormSchema),
    defaultValues: SignupFormDefaultValue
  })

  const handleFormSubmit: SubmitHandler<ISignupRequest> = async (data) => {
    try {
      const response = await axios.post('/auth/signup', data)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      toast.success('Signup successful!')
    } catch (error: unknown) {
      console.error(error)
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data.message || 'Something went wrong!')
      } else {
        toast.error('Something went wrong!')
      }
    }
  }

  return (
    <>
      <div className="py-8 2xl:py-12">
        <div className="mr-16 2xl:mr-28">
          <p className="flex justify-end text-sm">
            Already have an account?&nbsp;
            <span className="font-medium text-primary">Sign In!&nbsp;</span>
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center 2xl:mt-15">
          <h2 className="text-2xl font-semibold">Get Started With Contacts</h2>
          <h3 className="mt-2 text-sm">Getting Started is easy</h3>

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
                <Label
                  customClass="mb-2 text-base text-dark-indigo"
                  labelText={field.name}
                  htmlFor={field.key}
                />
                <Controller
                  name={field.key as FieldKeys}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputField
                      id={field.key}
                      name={field.name}
                      value={value}
                      type={
                        field.key.toLowerCase().includes('password')
                          ? 'password'
                          : field.key === 'email'
                            ? 'email'
                            : 'text'
                      }
                      placeholder={field.placeholder}
                      onChangeInput={onChange}
                    />
                  )}
                />
                {errors[field.key as keyof ISignupRequest] && (
                  <p className="mt-2 text-sm text-coral-sunset">
                    {errors[field.key as keyof ISignupRequest]?.message}
                  </p>
                )}
              </div>
            ))}

            <div className="mb-10 flex items-center gap-x-2">
              <span className="text-sm">
                I agree to the&nbsp;
                <span className="cursor-pointer font-bold text-primary">Terms of Use</span>
              </span>
            </div>

            <Button customClass="flex justify-center item-center font-semibold" buttonType="submit">
              <div className="relative flex min-h-12 min-w-48 items-center justify-center">
                Create Account
              </div>
            </Button>
          </form>
        </div>

        <p className="mt-8 text-center">
          Already have an account?&nbsp;
          <span className="font-bold text-primary">Log in!</span>
        </p>
      </div>
    </>
  )
}

export default Signup
