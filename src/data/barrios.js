// Datos centralizados de los barrios industriales de Penco
// Esto facilita agregar/editar contenido sin tocar componentes

export const barrios = [
  {
    slug: 'crav',
    nombre: 'CRAV',
    nombreCompleto: 'Compañía Refinería de Azúcar de Viña del Mar',
    descripcion: 'Conjunto industrial y habitacional ligado a la refinería de azúcar, con tres recintos asociados.',
    recintos: [
      { id: 'recinto-crav', nombre: 'Recinto CRAV' },
      { id: 'desiderio-guzman', nombre: 'Población Desiderio Guzmán' },
      { id: 'los-radales', nombre: 'Villa Los Radales' },
    ],
    color: 'azul',
  },
  {
    slug: 'vipla',
    nombre: 'VIPLA',
    nombreCompleto: 'Industria del Vidrio Plano',
    descripcion: 'Antigua fábrica de vidrio y su barrio obrero asociado.',
    recintos: [],
    color: 'azul',
  },
  {
    slug: 'fanaloza',
    nombre: 'FANALOZA',
    nombreCompleto: 'Fábrica Nacional de Loza',
    descripcion: 'Complejo de cerámica con dos poblaciones obreras asociadas.',
    recintos: [
      { id: 'juan-diaz', nombre: 'Población Juan Díaz' },
      { id: 'facundo-diaz', nombre: 'Población Facundo Díaz' },
    ],
    color: 'azul',
  },
]

export const navegacion = {
  proyecto: [
    { label: 'Sobre el Proyecto', to: '/proyecto' },
  ],
  barrios: [
    { label: 'CRAV', to: '/barrios/crav' },
    { label: 'FANALOZA', to: '/barrios/fanaloza' },
    { label: 'VIPLA', to: '/barrios/vipla' },
  ],
  multimedia: [
    { label: 'Libro "Barrios Industriales"', to: '/publicaciones' },
    { label: 'Videos', to: '/videos' },
    { label: 'Maquetas 3D', to: '/maquetas-3d' },
    { label: 'Mapa', to: '/mapa' },
  ],
}
