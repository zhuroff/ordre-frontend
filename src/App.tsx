import { BaseSyntheticEvent, useReducer } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from 'index'
import { Authentication } from 'types/AuthTypes'

const App = () => {
  const { auth } = AppContext()
  
  const [authData, setAuthData] = useReducer(
    (authData: Authentication, payload: Partial<Authentication>) => ({ ...authData, ...payload }),
    { email: '', password: '' }
  )

  const registration = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    auth.registration(authData)
  }

  const login = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    auth.login(authData)
  }

  return (
    <>
      <form onSubmit={ registration }>
        <input
          type="email"
          placeholder="Email"
          onInput={ (event: BaseSyntheticEvent) => setAuthData({ email: event.target.value }) }
        />

        <input
          type="password"
          placeholder="Password"
          onInput={ (event: BaseSyntheticEvent) => setAuthData({ password: event.target.value }) }
        />

        <button
          type="submit"
        >Зарегистрироваться</button>
      </form>

      <form onSubmit={ login }>
        <input
          type="email"
          placeholder="Email"
          onInput={ (event: BaseSyntheticEvent) => setAuthData({ ...authData, email: event.target.value }) }
        />

        <input
          type="password"
          placeholder="Password"
          onInput={ (event: BaseSyntheticEvent) => setAuthData({ ...authData, password: event.target.value }) }
        />

        <button
          type="submit"
        >Войти</button>
      </form>
    </>
  )
}

export default observer(App)
