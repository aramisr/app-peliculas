import axios from "axios";
import FormularioActores from "./FormularioActores";
import { urlActores } from "../../utils/endpoints";
import { useNavigate } from 'react-router-dom';
import MostrarErrores from "../../utils/MostrarErrores";
import { useState } from "react";
import { actorCreacionDTO } from "../../models/actores.model.d";
import { convertirActorAFormData } from "../../utils/FormDataUtil";

export default function CrearActores() {
    const navigate = useNavigate(); 
    const [errores, setErrores] = useState<string[]>([]); 
    
    async function crear(actor: actorCreacionDTO) {
        try {
            const formData = convertirActorAFormData(actor);
            await axios({
                method: 'post',
                url: urlActores,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            navigate('/actores');
        }
        catch (error) {
            if (axios.isAxiosError(error)) {
                setErrores(error.response?.data || ["Error desconocido"]);
            } else {
                setErrores(["Ocurrió un error inesperado"]);
            }
        }
    }
    return (
        <>
            <h3>Crear Actores</h3>
            <FormularioActores
                modelo={{ nombre: '', fechaNacimiento: undefined }}
                onSubmit={async valores => await crear(valores)}
            />
        </>
    )
}