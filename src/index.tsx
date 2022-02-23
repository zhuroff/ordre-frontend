import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import auth from 'store/auth'
import user from 'store/user'
import App from './App'

const Context = createContext({ auth, user })
export const AppContext = () => useContext(Context)

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={ { auth, user } }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
