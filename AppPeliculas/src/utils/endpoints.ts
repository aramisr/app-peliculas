const apiURL = import.meta.env.VITE_API_URL;

export const endpoints = {
  generos: {
    base: `${apiURL}/generos`,
    get: `${apiURL}/generos/GetGeneros`,
    getById: (id: number) => `${apiURL}/generos/GetById/${id}`,
    create: `${apiURL}/generos/AddGenero`,
    update: (id: number) => `${apiURL}/generos/UpdateGenero/${id}`,
    delete: (id: number) => `${apiURL}/generos/DeleteGenero/${id}`
  },
  actores: {
    base: `${apiURL}/actores`,
    get: `${apiURL}/actores/GetActores`,
    getById: (id: number) => `${apiURL}/actores/GetById/${id}`,
    create: `${apiURL}/actores/AddActor`,
    update: (id: number) => `${apiURL}/actores/UpdateActor/${id}`,
    delete: (id: number) => `${apiURL}/actores/DeleteActor/${id}`
  },
  cines: {
    base: `${apiURL}/cines`,
    get: `${apiURL}/cines/GetCines`,
    getById: (id: number) => `${apiURL}/cines/GetById/${id}`,
    create: `${apiURL}/cines/AddCine`,
    update: (id: number) => `${apiURL}/cines/UpdateCine/${id}`,
    delete: (id: number) => `${apiURL}/cines/DeleteCine/${id}`
  }
};

