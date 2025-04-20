import { actorPeliculaDTO } from "../../models/actores.model.d";
import { cineDTO } from "../../models/cines.model.d";
import { generoDTO } from "../../models/generos.model.d";
import FormularioPeliculas from "./FormularioPeliculas";

export default function EditarPeliculas() {

    const generosNoSeleccionados: generoDTO[] = [
        { id: 2, nombre: 'Romance' },
        { id: 3, nombre: 'Aventura' }
    ];

    const generosSeleccionados: generoDTO[] = [
        { id: 1, nombre: 'Drama' },
        { id: 2, nombre: 'Comedia' },
        { id: 3, nombre: 'Aventura' }
    ];

    const cinesSeleccionados: cineDTO[] = [
        { id: 3, nombre: 'Reforma' }
    ];

    const cinesNoSeleccionados: cineDTO[] = [
        { id: 1, nombre: 'Cinemark' },
        { id: 2, nombre: 'Galerias' },
    ];

    const actoresSeleccionados: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: 'Tom Holland',
            personaje: 'Peter Parker',
            foto: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Tom_Holland.jpg/revision/latest/scale-to-width-down/1200?cb=20220213015022'
        }
    ];

    return (
        <>
            <h3>Editar Película</h3>
            <FormularioPeliculas
                actoresSeleccionados={actoresSeleccionados}
                cinesSeleccionados={cinesSeleccionados}
                cinesNoSeleccionados={cinesNoSeleccionados}
                generosNoSeleccionados={generosNoSeleccionados}
                generosSeleccionados={generosSeleccionados}
                modelo={{
                    titulo: 'Spiderman 4', enCines: true, trailer: 'url',
                    fechaLanzamiento: new Date('2025-02-04T00:00:00')
                }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}