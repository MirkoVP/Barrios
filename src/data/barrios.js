// Datos centralizados de los barrios industriales de Penco

export const barrios = [
  {
    slug: 'crav',
    nombre: 'CRAV',
    nombreCompleto: 'Compañía Refinería de Azúcar',
    descripcion: 'Conjunto industrial y habitacional ligado a la refinería de azúcar, con tres recintos asociados.',
    recintos: [
      { id: 'recinto-crav', nombre: 'Recinto CRAV' },
      { id: 'desiderio-guzman', nombre: 'P. Desiderio Guzmán' },
      { id: 'los-radales', nombre: 'Villa Los Radales' },
    ],
  },
  {
    slug: 'vipla',
    nombre: 'VIPLA',
    nombreCompleto: 'Industria del Vidrio Plano',
    descripcion: 'Antigua fábrica de vidrio y su barrio obrero asociado.',
    recintos: [],
  },
  {
    slug: 'fanaloza',
    nombre: 'FANALOZA',
    nombreCompleto: 'Fábrica Nacional de Loza',
    descripcion: 'Complejo de cerámica con dos poblaciones obreras asociadas.',
    recintos: [
      { id: 'juan-diaz', nombre: 'P. Juan Díaz' },
      { id: 'facundo-diaz', nombre: 'P. Facundo Díaz' },
    ],
  },
]

export const navegacion = {
  proyecto: [
    { label: 'Sobre el proyecto', to: '/proyecto' },
    { label: 'Equipo', to: '/proyecto#equipo' },
  ],
  barrios: [
    { label: 'CRAV', to: '/barrios/crav' },
    { label: 'VIPLA', to: '/barrios/vipla' },
    { label: 'FANALOZA', to: '/barrios/fanaloza' },
  ],
  multimedia: [
    { label: 'Libro · Publicaciones', to: '/publicaciones' },
    { label: 'Videos', to: '/videos' },
    { label: 'Maquetas 3D', to: '/maquetas-3d' },
    { label: 'Mapa interactivo', to: '/mapa' },
  ],
}
