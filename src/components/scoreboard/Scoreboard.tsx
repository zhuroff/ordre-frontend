import { ReactNode } from 'react'
import './Scoreboard.scss'

type ScoreboardProps = {
  width: 25 | 33 | 50 | 75 | 100
  children: ReactNode
}

const Scoreboard = ({ children, width }: ScoreboardProps) => {
  return (
    <section className={ `scoreboard --w${width}` }>{ children }</section>
  )
}

export default Scoreboard
