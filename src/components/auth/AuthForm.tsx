import { FormEvent, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from 'index'
import { AuthenticationMap, RegisterErrorResponse } from "types/AuthTypes"
import AuthService from 'services/AuthService'
import messages from 'locales'

const AuthForm = () => {
  const { auth } = AppContext()

  const [authData, setAuthData] = useState<AuthenticationMap>(new Map())
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

  const login = (event: FormEvent) => {
    event.preventDefault()
    // auth.login(authData)
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

        <button
          type="submit"
        >Зарегистрироваться</button>
      </form>

      <form onSubmit={ login }>
        <input
          type="text"
          placeholder="Email"
          onInput={(event: FormEvent<HTMLInputElement>) => {
            setAuthData(new Map(authData.set('email', event.currentTarget.value)))
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onInput={(event: FormEvent<HTMLInputElement>) => {
            setAuthData(new Map(authData.set('password', event.currentTarget.value)))
          }}
        />

        <button
          type="submit"
        >Войти</button>
      </form>
    </>
  )
}

export default observer(AuthForm)
