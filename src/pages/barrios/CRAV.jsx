import { useState, useRef, useEffect } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

/* ─────────────────────────────────────────────
   IMÁGENES  –  ajusta las rutas según tu repo
   ───────────────────────────────────────────── */

// Recinto CRAV
import recintoCrav1   from '../../assets/CRAV/RECINTO CRAV/fotos/CRAV_1WEB.png'
import recintoCrav2   from '../../assets/CRAV/RECINTO CRAV/fotos/CRAV_1WEB.png'
import recintoCrav3   from '../../assets/CRAV/RECINTO CRAV/fotos/CRAV_1WEB.png'
import recintoCrav4   from '../../assets/CRAV/RECINTO CRAV/fotos/CRAV_1WEB.png'
import recintoMaqueta from '../../assets/CRAV/RECINTO CRAV/Edificios Isométricos/CRAV1.png'

// Desiderio Guzmán
import desiderio1      from '../../assets/CRAV/DESIDERIO GUZMÁN/fotos/DESIDERIO_1WEB.png'
import desiderio2      from '../../assets/CRAV/DESIDERIO GUZMÁN/fotos/DESIDERIO_1WEB.png'
import desiderio3      from '../../assets/CRAV/DESIDERIO GUZMÁN/fotos/DESIDERIO_1WEB.png'
import desiderio4      from '../../assets/CRAV/DESIDERIO GUZMÁN/fotos/DESIDERIO_1WEB.png'
import desiderioMaqueta from '../../assets/CRAV/DESIDERIO GUZMÁN/Edificios Isométricos/Desiderio.png'
import desiderioPlano  from '../../assets/CRAV/DESIDERIO GUZMÁN/fotos/DESIDERIO_1WEB.png'

// Los Radales
import radales1       from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'
import radales2       from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'
import radales3       from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'
import radalesMaqueta from '../../assets/CRAV/LOS RADALES/Edificios Isométricos/Radales.png'
import radalesArchivo1 from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'
import radalesArchivo2 from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'
import radalesPlano   from '../../assets/CRAV/LOS RADALES/fotos/RADALES_1WEB.png'

/* ─────────────────────────────────────────────
   Componente: Carrusel
   ───────────────────────────────────────────── */
function Carrusel({ fotos, label }) {
  const [idx, setIdx] = useState(0)

  const prev = () => setIdx((i) => (i - 1 + fotos.length) % fotos.length)
  const next = () => setIdx((i) => (i + 1) % fotos.length)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-[var(--color-paper)] group"
         style={{ boxShadow: 'var(--shadow-card)' }}>
      {/* Imagen principal */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          key={idx}
          src={fotos[idx]}
          alt={`${label} ${idx + 1}`}
          className="w-full h-full object-cover"
          style={{ animation: 'fade-in 0.4s var(--ease-out-quart) both' }}
        />
        {/* Controles */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        {/* Contador */}
        <div className="absolute bottom-3 right-4 text-xs font-medium text-white/80 bg-black/40 px-2 py-0.5 rounded-full">
          {idx + 1} / {fotos.length}
        </div>
      </div>
      {/* Thumbnails */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {fotos.map((f, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className="flex-none w-14 h-10 rounded-md overflow-hidden border-2 transition-all duration-200"
            style={{ borderColor: i === idx ? 'var(--color-penco-gold)' : 'transparent' }}
          >
            <img src={f} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Componente: ImagenConLeyenda
   ───────────────────────────────────────────── */
function ImagenConLeyenda({ src, alt, leyenda, aspectClass = 'aspect-[4/3]' }) {
  return (
    <figure className="space-y-2">
      <div className={`rounded-2xl overflow-hidden ${aspectClass}`}
           style={{ boxShadow: 'var(--shadow-card)' }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
      {leyenda && (
        <figcaption className="text-xs text-[var(--color-mute)] px-1">{leyenda}</figcaption>
      )}
    </figure>
  )
}

/* ─────────────────────────────────────────────
   Componente: EtiquetaMeta  (año / dato / arquitecto)
   ───────────────────────────────────────────── */
function MetaTag({ label, value }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="section-number text-[var(--color-mute)]">{label}</span>
      <span className="font-medium text-[var(--color-ink)] text-sm leading-snug">{value}</span>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Componente: DividerLine
   ───────────────────────────────────────────── */
function Divider() {
  return <div className="border-t border-[var(--color-ink)]/10 my-20 md:my-28" />
}

/* ─────────────────────────────────────────────
   Componente: SectionHeader
   ───────────────────────────────────────────── */
function SectionHeader({ numero, titulo, subtitulo }) {
  return (
    <div className="reveal mb-12 md:mb-16">
      <div className="eyebrow text-[var(--color-penco-blue-600)] mb-4">
        <span className="section-number">{numero}</span>
        <span>{subtitulo}</span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl leading-[0.95] text-[var(--color-ink)]">
        {titulo}
      </h2>
    </div>
  )
}

/* ─────────────────────────────────────────────
   Página principal
   ───────────────────────────────────────────── */
export default function CRAV() {
  const containerRef = useScrollReveal()

  return (
    <div ref={containerRef}>

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="relative min-h-[70vh] flex flex-col justify-end text-white overflow-hidden grain">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url(${recintoCrav1})`,
            animation: 'scale-in 1.6s var(--ease-out-expo) both',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-[var(--color-ink)]/60 to-transparent" />

        <div className="relative z-10 max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14 w-full pb-16 md:pb-24">
          <div className="animate-[fade-up_1s_var(--ease-out-expo)_0.2s_both]">
            <div className="eyebrow text-[var(--color-penco-gold)] mb-4">
              <span className="section-number">/ 02</span>
              <span>Barrio industrial</span>
            </div>
            <h1 className="font-display text-[14vw] md:text-[10vw] lg:text-[8rem] leading-[0.9] mb-6">
              CRAV
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-xl leading-relaxed">
              Compañía Refinería de Azúcar de Viña del Mar. Tres conjuntos
              habitacionales construidos en distintas épocas como testimonio de
              una industria que organizó el territorio y la vida de Penco.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTENIDO PRINCIPAL
          ══════════════════════════════════════ */}
      <div className="max-w-[1480px] mx-auto px-6 md:px-10 lg:px-14">

        {/* ─────────────────────────────────────
            01 · RECINTO CRAV
            ───────────────────────────────────── */}
        <section className="pt-24 md:pt-36">

          <SectionHeader
            numero="/ 01"
            subtitulo="Recinto CRAV"
            titulo={<>Recinto<br /><span className="font-display-italic text-[var(--color-penco-blue-600)]">CRAV</span></>}
          />

          {/* Meta datos */}
          <div className="reveal flex flex-wrap gap-8 mb-12 pb-8 border-b border-[var(--color-ink)]/10">
            <MetaTag label="ETAPAS" value="1900 · 1927 · 1937 · 1940 · 1941–1942" />
            <MetaTag label="ARQUITECTOS" value="Jorge y Alfredo Velasco Urzúa" />
            <MetaTag label="EDIFICIOS" value="2 principales" />
          </div>

          {/* Texto + Carrusel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 reveal">
            {/* Texto */}
            <div className="space-y-5 text-[var(--color-mute)] text-base md:text-lg leading-relaxed">
              <p>
                El llamado «Recinto CRAV» es el resultado de múltiples etapas de
                construcción llevadas a cabo por la Compañía Refinería de Azúcar de
                Viña del Mar en Penco. Es una suerte de enciclopedia edificada en la
                cual podemos encontrar testimonios arquitectónicos de las primeras
                décadas del siglo&nbsp;XX, estructurados en madera, que nos muestran
                una inicial voluntad de desarrollar un proyecto de vivienda colectiva.
              </p>
              <p>
                Entre los años 1920 y 1930 aparecieron múltiples tipologías que
                incorporaron elementos eclécticos y diseños propios de una era donde
                la mirada historicista se nutrió de formas nacidas del Art Nouveau y
                del Art Déco.
              </p>
              <p>
                Con ocasión del terremoto de 1939, el barrio CRAV se expandió y se
                formó una idea homogénea de conjunto gracias al trabajo de los
                arquitectos Jorge y Alfredo Velasco Urzúa. Propusieron nuevas
                tipologías de vivienda, mucho más modernas, comprendiendo el
                significado de una ciudad industrial: la «familia refinera»,
                con viviendas en coexistencia con espacios públicos, zonas de juegos,
                un centro comercial y una capilla.
              </p>
              <p>
                Destacan una serie de casas de un piso y medio proyectadas siguiendo
                las cotas de los cerros, formando senderos peatonales y vehiculares,
                complementados por viviendas pareadas de dos niveles.
              </p>
            </div>

            {/* Carrusel */}
            <div className="reveal">
              <Carrusel
                fotos={[recintoCrav1, recintoCrav2, recintoCrav3, recintoCrav4]}
                label="Recinto CRAV"
              />
            </div>
          </div>

          {/* Maqueta 3D */}
          <div className="reveal">
            <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
              <span className="section-number">Maqueta 3D</span>
            </div>
            <ImagenConLeyenda
              src={recintoMaqueta}
              alt="Maqueta 3D Recinto CRAV"
              leyenda="Reconstrucción isométrica del Recinto CRAV"
              aspectClass="aspect-[16/7]"
            />
          </div>
        </section>

        <Divider />

        {/* ─────────────────────────────────────
            02 · POBLACIÓN DESIDERIO GUZMÁN
            ───────────────────────────────────── */}
        <section>

          <SectionHeader
            numero="/ 02"
            subtitulo="Población"
            titulo={<>Desiderio<br /><span className="font-display-italic text-[var(--color-penco-blue-600)]">Guzmán</span></>}
          />

          {/* Meta datos */}
          <div className="reveal flex flex-wrap gap-8 mb-12 pb-8 border-b border-[var(--color-ink)]/10">
            <MetaTag label="AÑO" value="1961" />
            <MetaTag label="VIVIENDAS" value="84 (80 pareadas + 4 aisladas)" />
            <MetaTag label="TIPOLOGÍAS" value="2" />
            <MetaTag label="ARQUITECTOS" value="Santiago Roi y Ricardo Hempel" />
          </div>

          {/* Texto + Carrusel */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 reveal">
            {/* Carrusel primero en mobile, segundo en desktop */}
            <div className="order-2 lg:order-1">
              <Carrusel
                fotos={[desiderio1, desiderio2, desiderio3, desiderio4]}
                label="Población Desiderio Guzmán"
              />
            </div>

            {/* Texto */}
            <div className="order-1 lg:order-2 space-y-5 text-[var(--color-mute)] text-base md:text-lg leading-relaxed">
              <p>
                La población Desiderio Guzmán corresponde a la expansión habitacional
                de la CRAV llevada a cabo entre finales de la década de 1950 y
                principios de los años 60. Los diseños fueron vanguardistas,
                apelando a geometrías claras, priorizando ventanales y
                antepechos de colores con accesos tipo porche.
              </p>
              <p>
                Con un diseño similar a los bungalows suburbanos estadounidenses,
                obra de los arquitectos Santiago Roi y Ricardo Hempel, este
                moderno conjunto residencial es una exploración donde el habitar
                doméstico de cada unidad coexiste con el habitar colectivo,
                donde los antejardines se tocan y comparten.
              </p>
              <p>
                Las casas incorporaron amplios antejardines, patios traseros
                generosos y dimensión para guardar un automóvil. Cada familia
                imprimió su sello con flores y plantas, forjando una paleta
                cromática que coexiste entre viviendas, calles y plazas.
              </p>
            </div>
          </div>

          {/* Maqueta 3D + Plano — side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 reveal">
            <div>
              <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
                <span className="section-number">Maqueta 3D</span>
              </div>
              <ImagenConLeyenda
                src={desiderioMaqueta}
                alt="Maqueta 3D Población Desiderio Guzmán"
                leyenda="Reconstrucción isométrica de la Población Desiderio Guzmán"
              />
            </div>
            <div>
              <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
                <span className="section-number">Plano</span>
              </div>
              <ImagenConLeyenda
                src={desiderioPlano}
                alt="Plano Población Desiderio Guzmán"
                leyenda="Planimetría de la Población Desiderio Guzmán"
              />
            </div>
          </div>
        </section>

        <Divider />

        {/* ─────────────────────────────────────
            03 · VILLA LOS RADALES
            ───────────────────────────────────── */}
        <section className="pb-24 md:pb-36">

          <SectionHeader
            numero="/ 03"
            subtitulo="Villa"
            titulo={<>Los<br /><span className="font-display-italic text-[var(--color-penco-blue-600)]">Radales</span></>}
          />

          {/* Meta datos */}
          <div className="reveal flex flex-wrap gap-8 mb-12 pb-8 border-b border-[var(--color-ink)]/10">
            <MetaTag label="AÑO" value="1974 (ocupadas en 1976)" />
            <MetaTag label="VIVIENDAS" value="72 casas pareadas de 2 niveles" />
            <MetaTag label="ARQUITECTOS" value="Roberto Goycoolea, Luis Soto y Ramón Jofré" />
          </div>

          {/* Texto + Fotos actuales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16 reveal">
            {/* Texto */}
            <div className="space-y-5 text-[var(--color-mute)] text-base md:text-lg leading-relaxed">
              <p>
                Villa Los Radales, ubicada en un terreno próximo al Recinto CRAV,
                corresponde a la última iniciativa habitacional de esta industria.
                Creada gracias a la gestión de la Cooperativa de Vivienda y Servicio
                Habitacional (iniciativa nacida en 1972), las casas comenzaron a ser
                ocupadas en 1976.
              </p>
              <p>
                El trío de arquitectos Roberto Goycoolea Infante, Ramón Jofré y
                Luis Soto diseñó viviendas de estructura de pino en densas bases
                aterrazadas, solución al irregular terreno del cerro. Resulta
                llamativo que el acceso a las casas sea lateral y no de frente.
              </p>
              <p>
                Las unidades incluyen antejardín, patio y estacionamiento,
                siguiendo una solución similar a la Población Desiderio Guzmán,
                pero con unidades de dos pisos y diseños propios de los años 70.
              </p>
            </div>

            {/* Fotos actuales */}
            <div className="grid grid-cols-2 gap-3">
              {[radales1, radales2, radales3].map((foto, i) => (
                <div
                  key={i}
                  className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-square'}`}
                  style={{ boxShadow: 'var(--shadow-card)' }}
                >
                  <img src={foto} alt={`Villa Los Radales ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Maqueta 3D */}
          <div className="reveal mb-16">
            <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
              <span className="section-number">Maqueta 3D</span>
            </div>
            <ImagenConLeyenda
              src={radalesMaqueta}
              alt="Maqueta 3D Villa Los Radales"
              leyenda="Reconstrucción isométrica de Villa Los Radales"
              aspectClass="aspect-[16/7]"
            />
          </div>

          {/* Fotos de archivo */}
          <div className="reveal mb-16">
            <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
              <span className="section-number">Fotos de archivo</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[radalesArchivo1, radalesArchivo2].map((foto, i) => (
                <ImagenConLeyenda
                  key={i}
                  src={foto}
                  alt={`Villa Los Radales — archivo ${i + 1}`}
                  leyenda={`Registro histórico de Villa Los Radales (${i === 0 ? 'c. 1976' : 'c. 1980'})`}
                />
              ))}
            </div>
          </div>

          {/* Plano */}
          <div className="reveal">
            <div className="eyebrow text-[var(--color-penco-gold-deep)] mb-4">
              <span className="section-number">Plano</span>
            </div>
            <ImagenConLeyenda
              src={radalesPlano}
              alt="Plano Villa Los Radales"
              leyenda="Planimetría de Villa Los Radales"
              aspectClass="aspect-[4/3]"
            />
          </div>

        </section>
      </div>
    </div>
  )
}