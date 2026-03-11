import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)]">
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 194, 255, 0.12), transparent),
            radial-gradient(ellipse 60% 40% at 80% 100%, rgba(15, 15, 61, 0.5), transparent)
          `,
        }}
        aria-hidden
      />
      <NavBar />
      <main className="relative z-[1] pb-[var(--nav-height)] pt-[var(--nav-height)]">
        <Outlet />
      </main>
    </div>
  )
}
