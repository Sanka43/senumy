import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] safe-areas">
      <NavBar />
      <main className="pb-[var(--nav-height)] pt-[var(--nav-height)]">
        <Outlet />
      </main>
    </div>
  )
}
