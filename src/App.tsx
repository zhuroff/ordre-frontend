import { BaseSyntheticEvent, useContext, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from 'index'

const App = () => {
  const [authData, setAuthData] = useState({ email: '', password: '' })
  const { auth } = useContext(Context)

  const registration = (event: BaseSyntheticEvent) => {
    event.preventDefault()
    auth.registration(authData)
  }

  return (
    <form onSubmit={ registration }>
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
      >Зарегистрироваться</button>
    </form>
  )
}

export default observer(App)
