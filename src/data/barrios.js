// Datos centralizados de los barrios industriales de Penco

export const barrios = [
  {
    slug: 'crav',
    nombre: 'CRAV',
    nombreCompleto: 'Compañía Refinería de Azúcar',
    descripcion: 'Conjunto industrial y habitacional ligado a la refinería de azúcar, con tres recintos asociados.',
    imagen: '/src/assets/CRAV02.png',
    recintos: [
      { id: 'recinto-crav', nombre: 'Recinto CRAV' },
      { id: 'desiderio-guzman', nombre: 'P. Desiderio Guzmán' },
      { id: 'los-radales', nombre: 'Villa Los Radales' },
    ],
  },
  {
    slug: 'vipla',
    nombre: 'VIPLA',
    nombreCompleto: 'Fábrica Nacional de Vidrios Planos',
    descripcion: 'Antigua fábrica Nacional de Vidrios Planos y su barrio obrero asociado.',
    imagen: '/src/assets/VIPLA2.png',
    recintos: [
    
    ],
  },
  {
    slug: 'fanaloza',
    nombre: 'FANALOZA',
    nombreCompleto: 'Fábrica Nacional de Loza',
    descripcion: 'Complejo de cerámica con dos poblaciones obreras asociadas.',
    imagen: '/src/assets/FONDO-FANALOZA.png',
    recintos: [
      { id: 'juan-diaz', nombre: 'Población Juan Díaz' },
      { id: 'facundo-diaz', nombre: 'Población Facundo Díaz' },
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
