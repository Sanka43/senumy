import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const BecomePremiumUser = lazy(() => import('./pages/BecomePremiumUser'))
const Donate = lazy(() => import('./pages/Donate'))
const SenumyJailbreakTools = lazy(() => import('./pages/SenumyJailbreakTools'))
const SenumyIpaLibrary = lazy(() => import('./pages/SenumyIpaLibrary'))
const IOSTweaks = lazy(() => import('./pages/iOSTweaks'))
const BestiosThemes = lazy(() => import('./pages/BestiosThemes'))
const ThirdPartyOses = lazy(() => import('./pages/ThirdPartyOses'))
const Zignee = lazy(() => import('./pages/Zignee'))
const Acutus = lazy(() => import('./pages/Acutus'))
const ThemesInstallGuide = lazy(() => import('./pages/ThemesInstallGuide'))

// basename required for GitHub Pages: app is served at /senumy/
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'BecomePremiumUser/', element: <BecomePremiumUser /> },
        { path: 'donate/', element: <Donate /> },
        { path: 'SenumyJailbreakTools/', element: <SenumyJailbreakTools /> },
        { path: 'SenumyIpaLibrary/', element: <SenumyIpaLibrary /> },
        { path: 'iOSTweaks/', element: <IOSTweaks /> },
        { path: 'Best_iOS_themes/', element: <BestiosThemes /> },
        { path: '3rd_party_OSes/', element: <ThirdPartyOses /> },
        { path: 'zignee/', element: <Zignee /> },
        { path: 'acutus/', element: <Acutus /> },
        { path: 'themesInstallGuide/', element: <ThemesInstallGuide /> },
        { path: 'prytexdmifgdv7um/', element: <Home /> },
      ],
    },
  ],
  { basename: '/senumy' }
)

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[var(--bg-base)] text-[var(--text-primary)]">Loading…</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
