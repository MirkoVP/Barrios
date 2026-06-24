import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const COLORES = {
  CRAV: '#6773b6',
  VIPLA: '#2d6a4f',
  FANALOZA: '#c89a3f',
}

function crearIcono(color) {
  return L.divIcon({
    className: '',
    html: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 30">
      <path d="M11 0C4.924 0 0 4.924 0 11c0 7.667 11 19 11 19S22 18.667 22 11C22 4.924 17.076 0 11 0z"
        fill="${color}" stroke="white" stroke-width="1.5"/>
      <circle cx="11" cy="11" r="4" fill="white" opacity="0.9"/>
    </svg>`,
    iconSize: [22, 30],
    iconAnchor: [11, 30],
    popupAnchor: [0, -32],
  })
}

// Pre-computados al nivel de módulo (no se recrean en cada render)
const ICONOS = Object.fromEntries(
  Object.entries(COLORES).map(([barrio, color]) => [barrio, crearIcono(color)])
)

// Coordenadas calculadas como centroides de los polígonos del KML
const PINES = [
  { nombre: 'Recinto CRAV',          barrio: 'CRAV',     slug: 'crav',     coords: [-36.7446, -72.9983] },
  { nombre: 'P. Desiderio Guzmán',   barrio: 'CRAV',     slug: 'crav',     coords: [-36.7502, -72.9994] },
  { nombre: 'Villa Los Radales',     barrio: 'CRAV',     slug: 'crav',     coords: [-36.7498, -72.9983] },
  { nombre: 'VIPLA',                 barrio: 'VIPLA',    slug: 'vipla',    coords: [-36.7219, -72.9760] },
  { nombre: 'Población Juan Díaz',   barrio: 'FANALOZA', slug: 'fanaloza', coords: [-36.7359, -72.9924] },
  { nombre: 'Población Facundo Díaz',barrio: 'FANALOZA', slug: 'fanaloza', coords: [-36.7360, -72.9932] },
]

export default function Mapa() {
  return (
    <div className="min-h-screen bg-[var(--color-bone)]">

      {/* ── Encabezado ── */}
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14 pt-32 md:pt-40 pb-10">
        <span className="eyebrow text-[var(--color-mute)] mb-6 block">05</span>
        <h1 className="font-display text-5xl md:text-7xl text-[var(--color-ink)] mb-4">
          Mapa<br /><em>Interactivo</em>
        </h1>
        <p className="text-[var(--color-mute)] text-lg max-w-xl mb-10">
          Barrios industriales de Penco · Región del Biobío
        </p>

        {/* Leyenda */}
        <div className="flex flex-wrap gap-6 mb-2">
          {Object.entries(COLORES).map(([barrio, color]) => (
            <Link
              key={barrio}
              to={`/barrios/${barrio.toLowerCase()}`}
              className="flex items-center gap-2 group"
            >
              <span
                className="w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-125"
                style={{ background: color }}
              />
              <span className="text-sm font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-penco-blue)] transition-colors">
                {barrio}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Mapa ── */}
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14 pb-24">
        <div
          className="rounded-[var(--radius-xl)] overflow-hidden"
          style={{ height: '65vh', minHeight: '500px', boxShadow: 'var(--shadow-elevated)' }}
        >
          <MapContainer
            center={[-36.736, -72.988]}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            />

            {PINES.map((pin) => (
              <Marker key={pin.nombre} position={pin.coords} icon={ICONOS[pin.barrio]}>
                <Popup>
                  <div style={{ fontFamily: 'Open Sans, system-ui, sans-serif', minWidth: '150px', padding: '4px 0' }}>
                    <p style={{ fontWeight: 700, fontSize: '13px', color: '#15182a', marginBottom: '3px' }}>
                      {pin.nombre}
                    </p>
                    <p style={{ fontSize: '11px', color: '#6b6e7e', marginBottom: '8px', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                      {pin.barrio}
                    </p>
                    <Link
                      to={`/barrios/${pin.slug}`}
                      style={{ fontSize: '12px', color: COLORES[pin.barrio], fontWeight: 700, textDecoration: 'none' }}
                    >
                      Ver barrio →
                    </Link>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

    </div>
  )
}
