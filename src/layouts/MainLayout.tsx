import { ReactNode } from 'react'
import Header from 'components/header/Header'
import Sidebar from 'components/sidebar/Sidebar'
import './MainLayout.scss'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="main">
      <Sidebar />
      <div className="workspace">
        <Header />
        <section className="section">{ children }</section>
      </div>
    </main>
  )
}

export default MainLayout
