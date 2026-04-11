import axios, { AxiosResponse } from "axios";
import FormularioPeliculas from "./FormularioPeliculas";
import { endpoints } from "../../utils/endpoints";
import { useNavigate } from "react-router-dom";
import { cineDTO } from "../../models/cines.model.d";
import { generoDTO } from "../../models/generos.model.d";
import { peliculaCreacionDTO, peliculasPostGetDTO } from "../../models/peliculas.model.d";
import { useEffect, useState } from "react";
import Cargando from "../../utils/CargandoContenido";
import { convertirPeliculaAFormData } from "../../utils/FormDataUtil";
import MostrarErrores from "../../utils/MostrarErrores";

export default function CrearPeliculas(){

    const navigate = useNavigate(); 
    const [errores, setErrores] = useState<string[]>([]); 
    const [generosNoSeleccionados, setGenerosNoSeleccionados] = useState<generoDTO[]>([]);
    const [cinesNoSeleccionados, setCinesNoSeleccionados] = useState<cineDTO[]>([]);
    const [cargado, setCargado] = useState(false);

    useEffect(() => { 
        axios.get(endpoints.peliculas.postget)
        .then((respuesta : AxiosResponse<peliculasPostGetDTO>) => {
            setGenerosNoSeleccionados(respuesta.data.generos);
            setCinesNoSeleccionados(respuesta.data.cines);
            setCargado(true);
        })
    }, []);

    async function crear(pelicula: peliculaCreacionDTO){
        try {
            const formData = convertirPeliculaAFormData(pelicula);
            await axios({
                method: 'post',
                url: endpoints.peliculas.create,
                data: formData,
                headers: { 'Content-Type': 'multipart/form-data' }
            }).then(respuesta => {
                navigate(`/peliculas/${respuesta.data}`);
                console.log(respuesta.data);
            })
        } catch (error) {
            console.log(error);
        }

    }
    return(
        <>
            <br /><h3>Crear Película</h3>
            <MostrarErrores errores={errores} />
            {cargado ?
                <FormularioPeliculas
                    actoresSeleccionados={[]}
                    cinesNoSeleccionados={cinesNoSeleccionados}
                    cinesSeleccionados={[]}
                    generosNoSeleccionados={generosNoSeleccionados} 
                    generosSeleccionados={[]}
                    modelo={{ titulo: '', enCines: false, trailer: 'url'}}
                    onSubmit={async valores => crear(valores)}
                />: <Cargando />
            }     
        </>
    )
}