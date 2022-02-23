import { makeAutoObservable } from 'mobx'
import { Authentication } from 'types/AuthTypes'
import AuthService from 'services/AuthService'
import user from './user'

class AuthStore {
  isAuthenticated = false

  constructor() {
    makeAutoObservable(this)
  }

  registration({ email, password }: Authentication) {
    AuthService.registration({ email, password })
      .then((response) => console.log(response))
      .catch((error) => console.dir(error))
  }

  login({ email, password }: Authentication) {
    AuthService.login({ email, password })
      .then((data) => {
        this.isAuthenticated = true
        user.setUser(data)
      })
      .catch((error) => console.dir(error))
  }
}

export default new AuthStore()
