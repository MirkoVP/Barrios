import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  const { pathname } = useLocation()

  // Scroll al top en cada cambio de ruta
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bone)]">
      <Header />
      {/* En Home el hero empieza desde el top (header transparente).
          En otras páginas dejamos espacio para que no quede tapado. */}
      <main className={`flex-1 ${isHome ? '' : 'pt-[84px]'}`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
