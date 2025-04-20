import LandingPage from "./components/main/LandingPage";

import CrearActores from "./components/actores/CrearActores";
import EditarActores from "./components/actores/EditarActores";
import IndiceActores from "./components/actores/IndiceActores";

import CrearCine from "./components/cines/CrearCines";
import EditarCine from "./components/cines/EditarCines";
import IndiceCine from "./components/cines/IndiceCines";

import CrearGenero from "./components/generos/CrearGenero";
import EditarGenero from "./components/generos/EditarGenero";
import IndiceGeneros from "./components/generos/IndiceGeneros";

import CrearPeliculas from "./components/peliculas/CrearPeliculas";
import EditarPeliculas from "./components/peliculas/EditarPeliculas";
import FiltroPeliculas from "./components/peliculas/FiltroPeliculas";

const rutas = [
    {path: '/generos/crear', componente: <CrearGenero />},
    {path: '/generos/editar/:id', componente: <EditarGenero />},
    {path: '/generos', componente: <IndiceGeneros />, exact: true},

    {path: '/actores/crear', componente: <CrearActores/>},
    {path: '/actores/editar/:id', componente: <EditarActores/>},
    {path: '/actores', componente: <IndiceActores />, exact: true},

    {path: '/cines/crear', componente: <CrearCine />},
    {path: '/cines/editar/:id', componente: <EditarCine />},
    {path: '/cines', componente: <IndiceCine />, exact: true},

    {path: '/peliculas/crear', componente: <CrearPeliculas />},
    {path: '/peliculas/editar/:id', componente: <EditarPeliculas />},
    {path: '/peliculas/filtrar', componente: <FiltroPeliculas />},

    {path: '/', componente: <LandingPage />, exact: true},
    {path: '*', componente: <LandingPage />, exact: true}
];

export default rutas;