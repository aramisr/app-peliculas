import { cineDTO } from "../../models/cines.model.d";
import { generoDTO } from "../../models/generos.model.d";
import FormularioPeliculas from "./FormularioPeliculas";

export default function CrearPeliculas(){

    const generos: generoDTO[] = [
        {id: 1, nombre: 'Drama'}, 
        {id: 2, nombre: 'Comedia'},
        {id: 3, nombre: 'Aventura'}
    ];

    const cines: cineDTO[] = [
        {id: 1, nombre: 'Cinemark'}, 
        {id: 2, nombre: 'Galerias'},
        {id: 3, nombre: 'Reforma'}
    ];

    return(
        <>
            <h3>Crear Película</h3>
            <FormularioPeliculas
                actoresSeleccionados={[]}
                cinesNoSeleccionados={cines}
                cinesSeleccionados={[]}
                generosNoSeleccionados={generos} 
                generosSeleccionados={[]}
                modelo={{ titulo: '', enCines: false, trailer: 'url'}}
                onSubmit={valores => console.log(valores)}
            />     
        </>
    )
}