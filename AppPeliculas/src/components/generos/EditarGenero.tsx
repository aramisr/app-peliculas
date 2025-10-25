import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model.d";
import { endpoints } from "../../utils/endpoints";
import EditarEntidad from "../../utils/EditarEntidad";
import { useParams } from "react-router-dom";

export default function EditarGenero() {

    const { id } = useParams<{ id: string }>();

    return (
        <>
            <EditarEntidad<generoCreacionDTO, generoDTO>
                urlGet={endpoints.generos.getById(Number(id))}
                urlEditar={endpoints.generos.update(Number(id))}
                urlIndice="/generos"
                nombreEntidad="Genero"
            >
                {(entidad, editar) => 
                    <FormularioGeneros
                        modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores);
                        }}
                    />
                }
            </EditarEntidad>
        </>
    );
}
