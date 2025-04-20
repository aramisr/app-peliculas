import axios, { AxiosError } from "axios";
import { generoCreacionDTO } from "../../models/generos.model.d";
import { urlGeneros } from "../../utils/endpoints";
import FormularioGeneros from "./FormularioGeneros";
import { useNavigate } from 'react-router-dom';
import MostrarErrores from "../../utils/MostrarErrores";
import { useState } from "react";

export default function CrearGenero(){
    const navigate = useNavigate(); 
    const [errores, setErrores] = useState<string[]>([]);   

    async function crear(genero: generoCreacionDTO){
        //console.log(urlGeneros);
        try {
            await axios.post(urlGeneros, genero);
            navigate('/generos'); 
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                setErrores(error.response?.data || ["Error desconocido"]);
            } else {
                setErrores(["Ocurrió un error inesperado"]);
            }
        }
    }

    return(
        <>
            <h3>Crear Género</h3>
            <MostrarErrores errores={errores} />
            <FormularioGeneros modelo={{nombre: ''}} 
                onSubmit={async valores => {
                    await crear(valores);
                }}
            />
        </>
    )
}