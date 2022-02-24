import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from 'index'
import Formatter from 'libs/Formatter'
import './Header.scss'

const Header = () => {
  const { locale } = AppContext()
  const [currentDate, setCurrentDate] = useState('')

  useEffect(() => {
    setCurrentDate(
      Formatter.localeDate(
        locale.current,
        new Date().toDateString()
      )
    )
  }, [])

  return (
    <header className="header">
      { currentDate }
    </header>
  )
}

export default observer(Header)
