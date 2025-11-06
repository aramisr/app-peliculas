export interface actorDTO {
  id: number;
  nombre: string;
  foto?: string;
  biografia?: string;
  fechaNacimiento?: string; 
}

export interface actorCreacionDTO {
  nombre: string;
  foto?: File;  
  fotoURL?: string;   
  biografia?: string;
  fechaNacimiento?: Date; 
}

export interface actorPeliculaDTO {
    id: number;
    nombre: string;
    personaje: string;
    foto: string
}