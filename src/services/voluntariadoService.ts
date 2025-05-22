
'use server';
import { voluntarioRolesData } from '@/lib/data/voluntariado';
import type { VoluntarioRole } from '@/lib/types';

export async function getVoluntariadoRoles(): Promise<VoluntarioRole[]> {
  // En una aplicación real, esto recuperaría datos de una base de datos.
  // Por ahora, devolvemos los datos importados directamente.
  return Promise.resolve(voluntarioRolesData);
}
