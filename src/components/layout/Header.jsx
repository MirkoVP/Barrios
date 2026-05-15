import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navegacion } from '../../data/barrios'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)

  // Estructura de los menús del borrador
  const menus = [
    { id: 'proyecto', label: 'Proyecto', items: navegacion.proyecto },
    { id: 'barrios', label: 'Barrios Industriales', items: navegacion.barrios },
    { id: 'multimedia', label: 'Multimedia', items: navegacion.multimedia },
  ]

  return (
    <header
      className="relative bg-[var(--color-penco-blue)] text-white"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 border-2 border-white grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px]">
            {/* Patrón geométrico simple como placeholder del logo */}
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={i % 2 === 0 ? 'bg-white' : 'bg-transparent'}
              />
            ))}
          </div>
          <div className="font-display text-sm leading-tight">
            <div>ARQUITECTURA</div>
            <div>DE PENCO</div>
          </div>
        </Link>

        {/* Navegación */}
        <nav className="hidden md:flex items-center gap-12 text-xs font-semibold tracking-widest">
          {menus.map((menu) => (
            <button
              key={menu.id}
              onMouseEnter={() => setOpenMenu(menu.id)}
              onClick={() => setOpenMenu(openMenu === menu.id ? null : menu.id)}
              className="uppercase hover:text-[var(--color-penco-gold)] transition-colors cursor-pointer"
            >
              {menu.label}
            </button>
          ))}
          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              `uppercase transition-colors ${
                isActive ? 'text-[var(--color-penco-gold)]' : 'hover:text-[var(--color-penco-gold)]'
              }`
            }
          >
            Contacto
          </NavLink>
        </nav>
      </div>

      {/* Menús desplegables (estilo del borrador: cards blancas suspendidas) */}
      {openMenu && (
        <div className="absolute left-0 right-0 top-full z-50 pointer-events-none">
          <div className="hidden md:flex justify-end px-6 md:px-12 gap-4">
            {menus.map((menu) => (
              <div
                key={menu.id}
                className={`pointer-events-auto bg-white text-[var(--color-penco-blue)] shadow-lg transition-all duration-200 ${
                  openMenu === menu.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  visibility: openMenu === menu.id ? 'visible' : 'hidden',
                  minWidth: '220px',
                }}
                onMouseEnter={() => setOpenMenu(menu.id)}
              >
                <ul className="py-4">
                  {menu.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        onClick={() => setOpenMenu(null)}
                        className="block px-6 py-2 text-xs font-bold tracking-widest uppercase text-center hover:text-[var(--color-penco-gold-dark)] transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
