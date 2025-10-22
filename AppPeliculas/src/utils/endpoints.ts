const apiURL = import.meta.env.VITE_API_URL;

export const endpoints = {
  generos: {
    base: `${apiURL}/generos`,
    get: `${apiURL}/generos/GetGeneros`,
    getById: (id: number) => `${apiURL}/generos/GetById/${id}`,
    create: `${apiURL}/generos/AddGenero`,
    update: (id: number) => `${apiURL}/generos/UpdateGeneros/${id}`,
    delete: (id: number) => `${apiURL}/generos/DeleteGeneros/${id}`
  },
  actores: {
    base: `${apiURL}/actores`,
    get: `${apiURL}/actores/GetActores`,
    getById: (id: number) => `${apiURL}/actores/GetById/${id}`,
    create: `${apiURL}/actores/AddActor`,
    update: (id: number) => `${apiURL}/actores/UpdateActores/${id}`,
    delete: (id: number) => `${apiURL}/actores/DeleteActores/${id}`
  }
};

