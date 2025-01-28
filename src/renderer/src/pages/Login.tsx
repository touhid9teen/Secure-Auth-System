import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { LoginFormDefaultValue, LoginFormSchema } from '@renderer/components/schema/LoginForm'

import { LOCAL_STORAGE_KEYS } from '@renderer/components/constants/Global'
import { setToStorage, clearStorage } from '@renderer/components/constants/SetStorage'
import Button from '@renderer/elements/Button'
import { FacebookIcon, GoogleIcon } from '@renderer/elements/Icon'
import InputField from '@renderer/elements/InputField'
import Label from '@renderer/elements/Label'
import { routes } from '@renderer/components/constants/Route'

interface ILoginRequest {
  email: string
  password: string
}

type FieldKeys = 'email' | 'password'

const FormFields = [
  { name: 'Email', key: 'email', placeholder: 'Email' },
  { name: 'Password', key: 'password', placeholder: 'Password' }
]

const Login: FC = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginRequest>({
    resolver: yupResolver<ILoginRequest>(LoginFormSchema),
    defaultValues: LoginFormDefaultValue
  })

  const API_BASE_URL = 'http://localhost:5000/api'

  const handleFormSubmit: SubmitHandler<ILoginRequest> = async (payload: ILoginRequest) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, payload)

      setToStorage(LOCAL_STORAGE_KEYS.AUTH_TOKEN, response.data.token)
      setToStorage(LOCAL_STORAGE_KEYS.AUTH_ID, response.data._id)
      setToStorage(LOCAL_STORAGE_KEYS.AUTH_NAME, response.data.name)
      setToStorage(LOCAL_STORAGE_KEYS.AUTH_EMAIL, response.data.email)
      clearStorage(LOCAL_STORAGE_KEYS.TEMP_EMAIL) 

      toast.success('Login successful!')
      navigate(routes.home.path)
    } catch (error: unknown) {
      console.log(error)

      if (axios.isAxiosError(error) && error.response) {
        const errorMessage = error.response.data?.message || 'Invalid credentials!'
        toast.error(errorMessage)
      } else {
        toast.error('Network error! Please try again.')
      }
    }
  }

  return (
    <>
      <div className="py-8 2xl:py-12">
        <div className="mr-16 2xl:mr-28">
          <p className="flex justify-end text-sm ">
            Don't have an account?&nbsp;
            <Link to={routes.signup.path} className="text-blue-500 hover:underline">Sign Up!</Link>{' '}
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
                      type={field.key === 'password' ? 'password' : 'text'}
                      placeholder={field.placeholder}
                      onChangeInput={onChange}
                    />
                  )}
                />
                {errors[field.key] && (
                  <span className="mt-2 text-sm text-coral-sunset">
                    {errors[field.key].message}
                  </span>
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
  )
}

export default Login
