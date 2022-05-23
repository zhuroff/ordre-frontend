// import { ru } from './ru'
// import { en } from './en'

const messages = new Map()

messages.set('email:invalid', 'Тип поля должен быть email')
messages.set('password:invalid:small', 'Пароль слишком короткий')
messages.set('password:invalid:huge', 'Пароль слишком длинный')
messages.set('passwordConfirm:invalid', 'Пароли не совпадают')

export default messages
