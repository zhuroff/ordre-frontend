import { Route, Routes } from 'react-router-dom'
import MainPage from 'pages/MainPage'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> }/>
    </Routes>
  )
}

export default MainRoutes
