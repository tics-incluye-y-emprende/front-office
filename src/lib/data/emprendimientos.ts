
import type { Emprendimiento } from '@/lib/types';
import { APP_NAME } from '@/lib/constants';

export const emprendimientosData: Emprendimiento[] = [
  { 
    id: '1', 
    name: 'Artesanías Creativas "Manos Mágicas"', 
    description: 'Bisutería y decoración hecha a mano con materiales reciclados. Buscan fondos para comprar más herramientas.', 
    image: 'https://placehold.co/400x300.png', 
    imageHint: 'handmade jewelry',
    goal: 5000,
    raised: 1200,
    whatsappMessage: `Hola ${APP_NAME}! Me interesa apoyar el emprendimiento "Manos Mágicas".`
  },
  { 
    id: '2', 
    name: 'Huerto Orgánico "Siembra Vida"', 
    description: 'Producción y venta de vegetales orgánicos. Necesitan capital para expandir su sistema de riego.', 
    image: 'https://placehold.co/400x300.png', 
    imageHint: 'organic garden',
    goal: 8000,
    raised: 3500,
    whatsappMessage: `Hola ${APP_NAME}! Me interesa apoyar el emprendimiento "Siembra Vida".`
  },
  { 
    id: '3', 
    name: 'Confecciones "Hilos de Esperanza"', 
    description: 'Taller de costura que ofrece prendas de vestir y arreglos. Requieren una nueva máquina de coser industrial.', 
    image: 'https://placehold.co/400x300.png', 
    imageHint: 'sewing workshop',
    goal: 6500,
    raised: 2000,
    whatsappMessage: `Hola ${APP_NAME}! Me interesa apoyar el emprendimiento "Hilos de Esperanza".`
  },
];
