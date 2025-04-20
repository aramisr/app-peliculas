import { useNavigate, useParams } from "react-router-dom";
import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model.d";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGeneros } from "../../utils/endpoints";
import Cargando from "../../utils/CargandoContenido";
import MostrarErrores from "../../utils/MostrarErrores";

export default function EditarGenero() {

    const { id } : any = useParams();
    const [genero, setGenero] = useState<generoDTO>();
    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get(`https://localhost:44310/api/generos/GetById/${id}`)
        .then((respuesta : AxiosResponse<generoDTO>) => {
            setGenero(respuesta.data);
                    
        })
    }, []);

    async function editar(generoEditar: generoCreacionDTO) {
        try{
            await axios.put(`${urlGeneros}/EditarGenero/?id=${id}`, generoEditar);
            navigate('/generos');  
        }
        catch(error){
            if (axios.isAxiosError(error)) {
                setErrores(error.response?.data || ["Error desconocido"]);
            } else {
                setErrores(["Ocurrió un error inesperado"]);
            }  
        }
    }

    return (
        <>
            <h3>Editar Género</h3>
            <MostrarErrores errores={errores} />
            { genero ? <FormularioGeneros modelo={genero}
                onSubmit={async valores => {
                    await editar(valores);
                }}
            /> : <Cargando />}
        </>
    )
}