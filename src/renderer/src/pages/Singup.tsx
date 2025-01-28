import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FC } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { routes } from '@renderer/components/constants/Route'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// import API from '@renderer/components/constants/Api'

import { SignupFormDefaultValue, SignupFormSchema } from '@renderer/components/schema/SingupForm'
import Button from '@renderer/elements/Button'
import { GoogleIcon, FacebookIcon } from '@renderer/elements/Icon'
import InputField from '@renderer/elements/InputField'
import Label from '@renderer/elements/Label'

const FormFields = [
  {
    key: 'name',
    name: 'Name',
    placeholder: 'Enter your name'
  },
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
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ISignupRequest>({
    resolver: yupResolver(SignupFormSchema),
    defaultValues: SignupFormDefaultValue
  })

  const API_BASE_URL = 'http://localhost:5000/api' 

  const handleFormSubmit: SubmitHandler<ISignupRequest> = async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, data)
      console.log(response.data)
      localStorage.setItem('user', JSON.stringify(response.data.user))

      toast.success('Signup successful!')
      navigate(routes.home.path)
    } catch (error) {
      console.log('Signup error:', error)

      if (axios.isAxiosError(error)) {
        // Axios error handling
        if (error.response) {
          // Server responded with a status code outside of the 2xx range
          console.error('Response error data:', error.response.data)
          console.error('Response error status:', error.response.status)
          console.error('Response error headers:', error.response.headers)

          const errorMessage = error.response.data?.message || 'Something went wrong!'
          toast.error(errorMessage)
        } else if (error.request) {
          // No response received from server
          console.error('Request error:', error.request)
          toast.error('No response received from the server. Please try again.')
        } else {
          // Error occurred during setting up the request
          console.error('Request setup error:', error.message)
          toast.error('Error setting up the request. Please try again.')
        }
      } else {
        // Non-axios error (e.g., network error, JavaScript runtime error)
        console.error('Non-axios error:', error)
        toast.error('Network error! Please try again.')
      }
    }
  }

  return (
    <>
      <div className="py-8 2xl:py-12">
        <div className="mr-16 2xl:mr-28">
          <p className="flex justify-end text-sm">
            Already have an account?&nbsp;
            <Link to={routes.login.path} className="text-blue-500 hover:underline">
              Sign In!
            </Link>{' '}
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
                <input type="checkbox" className="mr-2" />I agree to the&nbsp;
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
