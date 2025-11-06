import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import MostrarErrores from "./MostrarErrores";
import Cargando from "./CargandoContenido";
import { endpoints } from "./endpoints";

export default function EditarEntidad<TCreacion, TLectura>(props: editarEntidadProps<TCreacion, TLectura>) {
    const { id }: any = useParams();
    const [entidad, setEntidad] = useState<TCreacion>();
    const [errores, setErrores] = useState<string[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(props.endpointGetById)
            .then((respuesta: AxiosResponse<TLectura>) => {
                setEntidad(props.transformar(respuesta.data));
            })
    }, []);

    async function editar(entidadEditar: TCreacion) {
        try {
            if(props.transformarFormData) {
                const formData = props.transformarFormData(entidadEditar);
                await axios({
                    method: 'put',
                    url: endpoints.actores.update(Number(id)),
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
            }else{
                await axios.put(props.endpointUpdate, entidadEditar);
            }
            navigate(props.urlIndice);
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
            <h3>Editar {props.nombreEntidad}</h3>
            <MostrarErrores errores={errores} />
            {entidad ? props.children(entidad, editar) : <Cargando />}
        </>
    )
}

interface editarEntidadProps<TCreacion, TLectura> {
    endpointGetById: string;
    endpointUpdate: string;
    urlIndice: string;
    nombreEntidad: string;
    children(entidad: TCreacion, editar: (entidad: TCreacion) => void): ReactElement;
    transformar(entidad: TLectura): TCreacion;
    transformarFormData?(modelo: TCreacion): FormData;
}
EditarEntidad.defaultProps = {
    transformar: (entidad: any) => entidad
}