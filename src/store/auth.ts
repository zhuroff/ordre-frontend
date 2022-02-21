import { makeAutoObservable } from 'mobx'
import AuthService from 'services/AuthService'
import { Authentication } from 'types/AuthTypes'

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
}

export default new AuthStore()
