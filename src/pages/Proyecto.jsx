export default function Proyecto() {
  return (
    <main className="max-w-[1180px] mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28">
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-10">
          <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
            <span className="section-number">/ 01</span>
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
        <div className="grid grid-cols-12 gap-8 mt-20">
          <div className="col-span-12 md:col-span-10">
            <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
              <span className="section-number">/ 02</span>
              <span>Equipo</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-[0.95] text-[var(--color-ink)] mb-12">
              Equipo detrás del proyecto
            </h2>
          </div>
        </div>

        {/* TARJETAS DE EQUIPO — GRID RESPONSIVO */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* TARJETA 1 */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-penco-blue-200)]/40 hover:border-[var(--color-penco-gold)]/60 transition-all duration-500 shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(21,24,42,0.18)]">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--color-penco-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-penco-blue-600)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 110 8 4 4 0 010-8z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-1">
                Erick Vásquez
              </h3>
              <p className="text-sm tracking-widest uppercase text-[var(--color-penco-gold-deep)] font-semibold">
                Coordinador de Proyecto
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--color-penco-blue-200)]/30 space-y-2">
              <p className="text-xs text-[var(--color-mute)]">[Email o contacto, opcional]</p>
            </div>
          </div>

          {/* TARJETA 2 */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-penco-blue-200)]/40 hover:border-[var(--color-penco-gold)]/60 transition-all duration-500 shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(21,24,42,0.18)]">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--color-penco-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-penco-blue-600)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 110 8 4 4 0 010-8z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-1">
                [Nombre completo]
              </h3>
              <p className="text-sm tracking-widest uppercase text-[var(--color-penco-gold-deep)] font-semibold">
                [Rol/Cargo]
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-mute)] mb-4">
              [Descripción breve de su rol, formación o contribución específica al proyecto]
            </p>
            <div className="pt-4 border-t border-[var(--color-penco-blue-200)]/30 space-y-2">
              <p className="text-xs text-[var(--color-mute)]">[Email o contacto, opcional]</p>
              <a href="#" className="inline-flex text-xs font-medium text-[var(--color-penco-blue-600)] hover:text-[var(--color-penco-gold-deep)] transition-colors">
                Más información →
              </a>
            </div>
          </div>

          {/* TARJETA 3 */}
          <div className="bg-white rounded-2xl p-8 border border-[var(--color-penco-blue-200)]/40 hover:border-[var(--color-penco-gold)]/60 transition-all duration-500 shadow-sm hover:shadow-[0_12px_24px_-8px_rgba(21,24,42,0.18)]">
            <div className="mb-6">
              <div className="w-16 h-16 rounded-full bg-[var(--color-penco-blue)]/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-penco-blue-600)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 3a4 4 0 110 8 4 4 0 010-8z"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-1">
                [Nombre completo]
              </h3>
              <p className="text-sm tracking-widest uppercase text-[var(--color-penco-gold-deep)] font-semibold">
                [Rol/Cargo]
              </p>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-mute)] mb-4">
              [Descripción breve de su rol, formación o contribución específica al proyecto]
            </p>
            <div className="pt-4 border-t border-[var(--color-penco-blue-200)]/30 space-y-2">
              <p className="text-xs text-[var(--color-mute)]">[Email o contacto, opcional]</p>
              <a href="#" className="inline-flex text-xs font-medium text-[var(--color-penco-blue-600)] hover:text-[var(--color-penco-gold-deep)] transition-colors">
                Más información →
              </a>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE COLABORACIONES Y APOYO */}
        <div className="bg-[var(--color-penco-blue)]/5 rounded-2xl p-8 md:p-12 border border-[var(--color-penco-blue-200)]/30 backdrop-blur-sm">
          <div className="max-w-3xl">
            <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
              <span className="section-number">/ 02.1</span>
              <span>Colaboraciones y apoyo</span>
            </div>
            <p className="text-base leading-relaxed text-[var(--color-ink-soft)] mb-8">
              [Texto sobre colaboradores institucionales, asesores, voluntarios, expertos consultados, etc. Incluye menciones a organizaciones que apoyaron el proyecto, donaciones de material, asesorías académicas, etc.]
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="section-number text-[var(--color-penco-blue-600)] mb-3">Instituciones aliadas</h4>
                <ul className="space-y-2 text-sm text-[var(--color-mute)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Institución/Organización 1]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Institución/Organización 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Institución/Organización 3]</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="section-number text-[var(--color-penco-blue-600)] mb-3">Agradecimientos especiales</h4>
                <ul className="space-y-2 text-sm text-[var(--color-mute)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Colaborador/Persona 1]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Colaborador/Persona 2]</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-penco-gold-deep)] mt-0.5">→</span>
                    <span>[Colaborador/Persona 3]</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN 3 — REGISTROS FOTOGRÁFICOS */}
        <div className="grid grid-cols-12 gap-8 mt-20">
          <div className="col-span-12 md:col-span-10">
            <div className="eyebrow text-[var(--color-penco-blue-600)] mb-6">
              <span className="section-number">/ 03</span>
              <span>Registros fotográficos</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl leading-[0.95] text-[var(--color-ink)] mb-4">
              Documentación del proceso
            </h3>
            <p className="text-base leading-relaxed text-[var(--color-mute)] max-w-2xl mb-10">
              Galería de fotografías del desarrollo y avance del proyecto. Incluye tomas de campo, reuniones del equipo, jornadas comunitarias, y momentos clave de la investigación.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-3xl border border-[var(--color-penco-blue-200)]/40">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M3 13l5-5 6 6 7-7"/>
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 1]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M3 13l5-5 6 6 7-7"/>
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 2]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M3 13l5-5 6 6 7-7"/>
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 3]</p>
              </div>
            </div>
            <div className="h-48 rounded-2xl bg-gradient-to-br from-[var(--color-penco-blue)]/10 to-[var(--color-penco-gold)]/5 flex items-center justify-center group cursor-pointer hover:shadow-md transition-all duration-300">
              <div className="text-center">
                <svg className="w-12 h-12 text-[var(--color-penco-blue-200)] mx-auto mb-2 group-hover:text-[var(--color-penco-gold)] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <circle cx="8.5" cy="8.5" r="1.5"/>
                  <path d="M3 13l5-5 6 6 7-7"/>
                </svg>
                <p className="text-xs text-[var(--color-mute)]">[Foto 4]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
