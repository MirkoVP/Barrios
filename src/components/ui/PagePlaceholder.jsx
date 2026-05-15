export default function PagePlaceholder({ titulo, descripcion, children }) {
  return (
    <div className="px-6 md:px-12 py-20 md:py-28 max-w-5xl">
      <span className="text-xs tracking-[0.3em] font-semibold text-[var(--color-penco-blue)]">
        SECCIÓN
      </span>
      <h1 className="font-display text-5xl md:text-7xl mt-3 mb-6">{titulo}</h1>
      {descripcion && (
        <p className="text-lg leading-relaxed max-w-2xl text-[var(--color-penco-ink)]/80">
          {descripcion}
        </p>
      )}
      <div className="mt-12">{children}</div>
      <div className="mt-12 p-6 border-2 border-dashed border-[var(--color-penco-blue)]/40 text-sm text-[var(--color-penco-ink)]/60">
        🚧 Sección en construcción — el contenido se desarrolla en el siguiente paso.
      </div>
    </div>
  )
}