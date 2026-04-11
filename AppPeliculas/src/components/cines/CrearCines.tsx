import axios from "axios";
import FormularioCines from "./FormularioCines";
import { endpoints } from "../../utils/endpoints";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { cineCreacionDTO } from "../../models/cines.model.d";
import MostrarErrores from "../../utils/MostrarErrores";

export default function CrearCines(){
    const navigate = useNavigate(); 
    const [errores, setErrores] = useState<string[]>([]); 

    async function crear(cine: cineCreacionDTO){
        try {
            await axios.post(endpoints.cines.create, cine);
            navigate('/cines'); 
        } catch (error) {
             if (axios.isAxiosError(error)) {
                setErrores(error.response?.data || ["Error desconocido"]);
            } else {
                setErrores(["Ocurrió un error inesperado"]);
            }
        }
    }

    return(
        <>
            <h3>Crear Cine</h3>
            <MostrarErrores errores={errores} />
            <FormularioCines 
                modelo={{nombre: ''}} 
                onSubmit={async valores => await crear(valores)} 
            />
        </>
    )
}