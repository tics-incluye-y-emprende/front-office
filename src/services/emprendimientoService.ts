
'use server';
import { emprendimientosData } from '@/lib/data/emprendimientos';
import type { Emprendimiento } from '@/lib/types';

export async function getEmprendimientos(): Promise<Emprendimiento[]> {
  // En una aplicación real, esto recuperaría datos de una base de datos.
  // Por ahora, devolvemos los datos importados directamente.
  return Promise.resolve(emprendimientosData);
}
