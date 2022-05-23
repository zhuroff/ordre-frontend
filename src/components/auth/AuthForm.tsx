import { FormEvent, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from 'index'
import { RegistrationMap, RegisterErrorResponse } from "types/AuthTypes"
import AuthService from 'services/AuthService'
import messages from 'locales'

const AuthForm = () => {
  const { auth } = AppContext()

  const [authData, setAuthData] = useState<RegistrationMap>(new Map())
  const [registerErrors, setRegisterErrors] = useState<Map<string, string>>(new Map())

  const registration = (event: FormEvent) => {
    event.preventDefault()
    AuthService.registration(authData)
      .then((response) => console.log(response))
      .then(_ => {
        registerErrors.clear()
        setRegisterErrors(new Map())
      })
      .catch((error: { response: { data: RegisterErrorResponse[] } }) => {
        registerErrors.clear()
        error.response.data.forEach((error) => {
          setRegisterErrors(new Map(registerErrors.set(error.param, messages.get(`${error.param}:${error.msg}`))))
        })
      })
  }

  return (
    <>
      <form onSubmit={ registration }>
        <div>
          <label>
            <span>Email</span>
            <input
              type="text"
              placeholder="Email"
              onInput={(event: FormEvent<HTMLInputElement>) => {
                setAuthData(new Map(authData.set('email', event.currentTarget.value)))
              }}
            />
          </label>
          <div>{ registerErrors.get('email') }</div>
        </div>

        <div>
          <label>
            <span>Password</span>
            <input
              type="password"
              placeholder="Password"
              onInput={(event: FormEvent<HTMLInputElement>) => {
                setAuthData(new Map(authData.set('password', event.currentTarget.value)))
              }}
            />
          </label>
          <div>{ registerErrors.get('password') }</div>
        </div>

        <div>
          <label>
            <span>Confirm Password</span>
            <input
              type="password"
              placeholder="Confirm Password"
              onInput={(event: FormEvent<HTMLInputElement>) => {
                setAuthData(new Map(authData.set('passwordConfirm', event.currentTarget.value)))
              }}
            />
          </label>
          <div>{ registerErrors.get('passwordConfirm') }</div>
        </div>

        <button
          type="submit"
        >Зарегистрироваться</button>
      </form>
    </>
  )
}

export default observer(AuthForm)
