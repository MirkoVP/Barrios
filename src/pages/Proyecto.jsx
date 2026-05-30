export default function Proyecto() {
  const equipo = [
    {
      nombre: 'Erick Vásquez',
      rol: ' Coordinador de Proyecto',
      link: 'https://www.instagram.com/evasquezi/',
    },
    {
      nombre: 'Luis Darmendrail',
      rol: 'Investigación Arquitectónica',
      link: 'https://www.instagram.com/historiaarquitectonicaccp/',
    },
    {
      nombre: 'Tomás Chamorro',
      rol: 'Modelado e Impresión 3D',
      link: 'https://www.instagram.com/tomaceta/',
    },
    {
      nombre: 'Andrea Vásquez',
      rol: 'Diseño y Dirección de Arte',
      link: '',
    },
    {
      nombre: 'Marcelo Gotelli',
      rol: ' Creador Audiovisual',
      link: '',
    },
  ]

  return (
    <main className="max-w-[1180px] mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
            <span>Sobre el proyecto</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-6xl leading-[0.95] text-[var(--color-ink)] mb-8">
            Arquitectura de Penco: Barrios Industriales
          </h1>
        </div>
      </div>

      <section className="mt-0 grid grid-cols-1 gap-12">
        <div className="bg-[var(--color-paper)] p-9 rounded-3xl border border-[var(--color-penco-blue-200)]/40">
          <div className="grid gap-7">
            <article>
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
                El desarrollo urbano de Penco y sus distintos sectores ha estado fuertemente vinculado a la presencia industrial,
                iniciada a fines del siglo XIX y consolidada durante el siglo XX. Este proceso dio origen a una serie de inmuebles
                y estructuras urbanas que, con el paso del tiempo, debieron enfrentar tanto desastres naturales como transformaciones
                derivadas de la acción humana. 
              </p>
            </article>

            <article>
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
                Muchos de estos inmuebles persisten como hitos territoriales y testimonios materiales de la historia local.
                Ejemplo de ello fueron las actividades asociadas a la fabricación de vidrio (VIPLA) en la localidad de Lirquén,
                así como el desarrollo industrial impulsado por la Fábrica Nacional de Loza de Penco (Fanaloza) y la Compañía 
                Refinería de Azúcar de Viña del Mar (CRAV) en Penco Centro.
              </p>
            </article>

            <article>
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
                Como Centro Cultural y Cinematográfico de Penco, en esta primera investigación de la plataforma "ArquitecturaPenco",
                hemos seleccionado tres conjuntos habitacionales asociados a las industrias de la loza y cerámica, del azúcar y del 
                vidrio plano, considerando especialmente sus valores históricos y estéticos. Estos conjuntos constituyen bienes inmuebles
                que permiten comprender procesos productivos, formas de habitar y configuraciones urbanas propias del desarrollo industrial local.
              </p>
            </article>

            <article>
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
                En un contexto donde este tipo de patrimonio se encuentra expuesto a procesos de deterioro, transformación e incluso desaparición, 
                este proyecto busca contribuir a su registro, documentación y difusión mediante diversos soportes que conformen un archivo para el futuro.
              </p>
            </article>

            <article>
              <p className="text-base leading-relaxed text-[var(--color-ink-soft)]">
                A partir de ello, se busca promover instancias de reflexión y diálogo en la comunidad, fomentando la construcción de una identidad en torno
                a estos barrios industriales, donde las memorias individuales y colectivas operen como vínculo entre pasado, presente y futuro.
              </p>
            </article>
          </div>
        </div>

        {/* SECCIÓN 2 — EQUIPO */}
        <div className="grid grid-cols-12 gap-8 mt-10">
          <div className="col-span-12 md:col-span-10">
            <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
              <span>Equipo</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] text-[var(--color-ink)] mb-1">
              Equipo detrás del proyecto
            </h2>
          </div>
        </div>

         {/*TARJETAS DE EQUIPO — 5 PERSONAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 mb-10">
          {equipo.map((persona, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-xl p-5 border border-[var(--color-penco-blue-200)]/40 hover:border-[var(--color-penco-gold)]/60 transition-all duration-500 shadow-sm hover:shadow-[0_10px_20px_-8px_rgba(21,24,42,0.15)] lg:col-span-2 ${
                idx === 3 ? 'lg:col-start-2' : ''
              }`}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-display text-xl text-[var(--color-ink)]">
                  {persona.nombre}
                </h3>
                {persona.link && (
                  <a
                    href={persona.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-penco-blue-600)] text-white hover:bg-[var(--color-penco-gold-deep)] transition-all duration-300 shrink-0"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="4"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                    </svg>
                  </a>
                )}
              </div>
              <p className="text-xs tracking-widest uppercase text-[var(--color-penco-gold-deep)] font-bold mt-1">
                {persona.rol}
              </p>
            </div>
          ))}
        </div>

          {/*
        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[var(--color-penco-blue-200)]/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M3 13l5-5 6 6 7-7" />
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 1]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M3 13l5-5 6 6 7-7" />
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 2]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M3 13l5-5 6 6 7-7" />
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 3]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M3 13l5-5 6 6 7-7" />
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 4]</p>
              </div>
            </div>
          </div>
        </div>
        */}
      </section>
    </main>
  )
}