import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-bone)]/80 mt-32">
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14 py-20 md:py-28">
        {/* Bloque superior — gran cita / identidad */}
        <div className="grid grid-cols-12 gap-8 mb-20">
          <div className="col-span-12 md:col-span-8">
            <div className="section-number text-[var(--color-penco-gold)] mb-4">
              ARQUITECTURA DE PENCO · 2024–
            </div>
            <p className="font-display text-3xl md:text-5xl text-white leading-[1.05] max-w-3xl">
              Un archivo vivo del patrimonio industrial pencón
              <span className="text-[var(--color-penco-gold)]">.</span>
            </p>
          </div>
          <div className="col-span-12 md:col-span-4 flex flex-col justify-end gap-3">
            <Link to="/contacto" className="btn-primary self-start" style={{ background: 'white', color: 'var(--color-ink)', borderColor: 'white' }}>
              Escríbenos
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Grilla de enlaces */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16 border-t border-white/10 pt-12">
          <div>
            <h4 className="section-number text-white/60 mb-4">Proyecto</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/proyecto" className="hover:text-[var(--color-penco-gold)] transition-colors">Sobre el proyecto</Link></li>
              <li><Link to="/contacto" className="hover:text-[var(--color-penco-gold)] transition-colors">Equipo</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-number text-white/60 mb-4">Barrios</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/barrios/crav" className="hover:text-[var(--color-penco-gold)] transition-colors">CRAV</Link></li>
              <li><Link to="/barrios/vipla" className="hover:text-[var(--color-penco-gold)] transition-colors">VIPLA</Link></li>
              <li><Link to="/barrios/fanaloza" className="hover:text-[var(--color-penco-gold)] transition-colors">FANALOZA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-number text-white/60 mb-4">Multimedia</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/mapa" className="hover:text-[var(--color-penco-gold)] transition-colors">Mapa</Link></li>
              <li><Link to="/videos" className="hover:text-[var(--color-penco-gold)] transition-colors">Videos</Link></li>
              <li><Link to="/publicaciones" className="hover:text-[var(--color-penco-gold)] transition-colors">Publicaciones</Link></li>
              <li><Link to="/maquetas-3d" className="hover:text-[var(--color-penco-gold)] transition-colors">Maquetas 3D</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="section-number text-white/60 mb-4">Financiamiento</h4>
            <p className="text-sm leading-relaxed">
              Proyecto financiado por Fondart.
            </p>
            <p className="text-sm mt-2">Cineclub Penco</p>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-8 border-t border-white/10 text-xs">
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} Arquitectura de Penco</span>
            <span className="text-white/30 hidden md:inline">·</span>
            <span className="text-white/50">arquitecturapenco.cl</span>
          </div>
          <div className="flex items-center gap-5 text-white/50">
            <a href="#" aria-label="Instagram" className="hover:text-[var(--color-penco-gold)] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[var(--color-penco-gold)] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="5" width="20" height="14" rx="3"/>
                <path d="M10 9l5 3-5 3z" fill="currentColor"/>
              </svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[var(--color-penco-gold)] transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 9V6.5a1.5 1.5 0 011.5-1.5H17V2h-2.5A4.5 4.5 0 0010 6.5V9H7v3h3v10h4V12h3l1-3h-4z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
