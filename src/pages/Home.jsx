import { Link } from 'react-router-dom'
import { barrios } from '../data/barrios'

export default function Home() {
  return (
    <>
      {/* HERO — réplica del borrador */}
      <section className="relative bg-[var(--color-penco-blue)] text-white overflow-hidden">
        {/* Imagen de fondo con overlay azul (efecto duotono).
            Reemplazá la URL por una foto real cuando tengas las imágenes. */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-penco-blue)] mix-blend-multiply" />

        <div className="relative px-6 md:px-12 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[600px]">
          {/* Lado izquierdo: título principal */}
          <div className="flex flex-col justify-end animate-[slide-up_0.8s_ease-out]">
            <span className="text-xs tracking-[0.3em] font-semibold mb-4 opacity-90">
              PROYECTO
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl">
              BARRIOS
              <br />
              INDUSTRIALES
            </h1>
          </div>

          {/* Lado derecho: maqueta + texto */}
          <div className="flex flex-col justify-end items-end gap-8">
            {/* Maqueta dorada decorativa (SVG inline para no depender de assets) */}
            <div className="flex items-center gap-4 animate-[fade-in_1.2s_ease-out]">
              <svg viewBox="0 0 200 180" className="w-40 md:w-56" aria-hidden="true">
                {/* Casa isométrica simple en dorado */}
                <g fill="var(--color-penco-gold)" stroke="var(--color-penco-gold-dark)" strokeWidth="1.5">
                  {/* Fachada frontal */}
                  <polygon points="40,80 120,80 120,150 40,150" />
                  {/* Lado derecho */}
                  <polygon points="120,80 160,60 160,130 120,150" fill="var(--color-penco-gold-dark)" />
                  {/* Techo */}
                  <polygon points="40,80 80,40 160,40 120,80" />
                  <polygon points="80,40 160,40 160,60 120,80" fill="var(--color-penco-gold-dark)" />
                  {/* Ventanas */}
                  <rect x="50" y="95" width="14" height="18" fill="var(--color-penco-blue-dark)" />
                  <rect x="72" y="95" width="14" height="18" fill="var(--color-penco-blue-dark)" />
                  <rect x="94" y="95" width="14" height="18" fill="var(--color-penco-blue-dark)" />
                  <rect x="60" y="120" width="14" height="25" fill="var(--color-penco-blue-dark)" />
                  <rect x="85" y="120" width="14" height="25" fill="var(--color-penco-blue-dark)" />
                </g>
              </svg>
              <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
                <polygon points="5,5 25,15 5,25" fill="var(--color-penco-gold)" />
              </svg>
            </div>
            <p className="text-xs tracking-[0.3em] font-semibold text-[var(--color-penco-gold)] self-center mr-16">
              RECINTO CRAV
            </p>

            <p className="text-sm md:text-base leading-relaxed text-right max-w-md">
              Sitio dedicado al rescate y documentación del patrimonio
              arquitectónico industrial de Penco. Recorré las poblaciones
              obreras de CRAV, VIPLA y FANALOZA a través de fotografías,
              maquetas 3D, planos y archivos históricos.
            </p>
          </div>
        </div>
      </section>

      {/* GRILLA DE BARRIOS */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="mb-12 flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs tracking-[0.3em] font-semibold text-[var(--color-penco-blue)]">
              EXPLORAR
            </span>
            <h2 className="font-display text-4xl md:text-6xl mt-2">
              Barrios industriales
            </h2>
          </div>
          <Link
            to="/mapa"
            className="text-sm font-semibold tracking-wider uppercase border-b-2 border-[var(--color-penco-ink)] pb-1 hover:border-[var(--color-penco-gold-dark)] hover:text-[var(--color-penco-gold-dark)] transition-colors"
          >
            Ver mapa completo →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {barrios.map((barrio) => (
            <Link
              key={barrio.slug}
              to={`/barrios/${barrio.slug}`}
              className="group relative aspect-[4/5] overflow-hidden bg-[var(--color-penco-blue)] block"
            >
              {/* Placeholder de imagen — reemplazar por foto real */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800')",
                }}
              />
              <div className="absolute inset-0 bg-[var(--color-penco-blue)] mix-blend-multiply" />

              <div className="relative h-full flex flex-col justify-between p-6 text-white">
                <span className="text-xs tracking-[0.3em] font-semibold opacity-90">
                  BARRIO
                </span>
                <div>
                  <h3 className="font-display text-4xl md:text-5xl mb-2">
                    {barrio.nombre}
                  </h3>
                  <p className="text-sm opacity-90 leading-snug">
                    {barrio.descripcion}
                  </p>
                  <span className="inline-block mt-4 text-[var(--color-penco-gold)] text-xs tracking-wider font-semibold group-hover:translate-x-2 transition-transform">
                    EXPLORAR →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ACCESOS RÁPIDOS — Videos / Libro / Maquetas */}
      <section className="bg-[var(--color-penco-ink)] text-white px-6 md:px-12 py-20">
        <h2 className="font-display text-3xl md:text-5xl mb-12 max-w-2xl">
          Recursos del archivo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            { to: '/videos', label: 'Videos', desc: 'Registros audiovisuales de CRAV, VIPLA y FANALOZA.' },
            { to: '/publicaciones', label: 'Libro', desc: '"Barrios Industriales" — publicación del proyecto.' },
            { to: '/maquetas-3d', label: 'Maquetas 3D', desc: 'Reconstrucciones tridimensionales de los recintos.' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="bg-[var(--color-penco-ink)] p-8 hover:bg-[var(--color-penco-blue-dark)] transition-colors group"
            >
              <div className="font-display text-3xl mb-3 group-hover:text-[var(--color-penco-gold)] transition-colors">
                {item.label}
              </div>
              <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              <span className="inline-block mt-6 text-xs tracking-wider font-semibold opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                ACCEDER →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
