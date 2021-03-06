import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { AppContext } from 'index'
import AuthLayout from 'layouts/AuthLayout'
import Preloader from 'components/preloader/Preloader'
import MainLayout from 'layouts/MainLayout'
import MainRoutes from 'routes/MainRoutes'
import 'scss/index.scss'

const App = () => {
  const { auth } = AppContext()

  useEffect(() => {
    auth.checkAuth()
  }, [])

  return (
    <>
      {
        !auth.isAuthChecked
          ? <Preloader />
          : !auth.isAuthenticated
            ? <AuthLayout />
            : <MainLayout>
                <MainRoutes />
              </MainLayout>
      }
    </>
  )
}

export default observer(App)
