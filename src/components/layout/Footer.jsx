import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-penco-ink)] text-white/80 mt-16">
      <div className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Identidad */}
        <div>
          <div className="font-display text-xl text-white mb-2">
            ARQUITECTURA DE PENCO
          </div>
          <p className="text-sm leading-relaxed">
            Documentación patrimonial de los barrios industriales de Penco.
          </p>
        </div>

        {/* Columna 2: Navegación rápida */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3 tracking-wider uppercase text-xs">
            Explorar
          </h4>
          <ul className="space-y-2">
            <li><Link to="/proyecto" className="hover:text-[var(--color-penco-gold)]">Sobre el proyecto</Link></li>
            <li><Link to="/mapa" className="hover:text-[var(--color-penco-gold)]">Mapa</Link></li>
            <li><Link to="/publicaciones" className="hover:text-[var(--color-penco-gold)]">Publicaciones</Link></li>
            <li><Link to="/contacto" className="hover:text-[var(--color-penco-gold)]">Contacto</Link></li>
          </ul>
        </div>

        {/* Columna 3: Financiamiento */}
        <div className="text-sm">
          <h4 className="text-white font-semibold mb-3 tracking-wider uppercase text-xs">
            Financiamiento
          </h4>
          <p className="leading-relaxed">
            Proyecto financiado por Fondart.
          </p>
          <p className="mt-2">Cineclub Penco</p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 md:px-12 py-4 text-xs flex flex-col md:flex-row justify-between items-center gap-2">
        <span>© {new Date().getFullYear()} Arquitectura de Penco</span>
        <span className="text-white/40">arquitecturapenco.cl</span>
      </div>
    </footer>
  )
}
