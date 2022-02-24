import Scoreboard from 'components/scoreboard/Scoreboard'

const MainPage = () => {
  return (
    <div className="dashboard">
      <div className="scorespace">
        <Scoreboard width={ 50 }>
          Приоритетные задачи <br />
          (Предстоящие и просроченные)
        </Scoreboard>

        <Scoreboard width={ 50 }>

        </Scoreboard>

        <Scoreboard width={ 50 }>

        </Scoreboard>
      </div>
    </div>
  )
}

export default MainPage
