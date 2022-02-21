import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import auth from 'store/auth'
import App from './App'

export const Context = createContext({ auth })

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={ { auth } }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
