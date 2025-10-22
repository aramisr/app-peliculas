const apiURL = import.meta.env.VITE_API_URL;

console.log("API URL:", import.meta.env.VITE_API_URL);

export const endpoints = {
    generos: {
        base: `${apiURL}/generos`,
        get: `${apiURL}/GetGeneros`,
        getById: (id: number) => `${apiURL}/GetById/${id}`,
        create: `${apiURL}/AddGenero`,
        update: (id: number) => `${apiURL}/UpdateGeneros/${id}`,
        delete: (id: number) => `${apiURL}/DeleteGeneros/${id}`
    },
    actores: {
        base: `${apiURL}/actores`,
        get: `${apiURL}/GetActores`,
        getById: (id: number) => `${apiURL}/GetById/${id}`,
        create: `${apiURL}/AddActor`,
        update: (id: number) => `${apiURL}/UpdateActores/${id}`,
        delete: (id: number) => `${apiURL}/DeleteActores/${id}`
    }
};
