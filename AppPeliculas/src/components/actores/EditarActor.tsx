import FormularioActores from "./FormularioActores";
import { actorCreacionDTO, actorDTO } from "../../models/actores.model.d";
import { endpoints } from "../../utils/endpoints";
import EditarEntidad from "../../utils/EditarEntidad";
import { useParams } from "react-router-dom";
import { convertirActorAFormData } from "../../utils/FormDataUtil";

export default function EditarActor() {

    const { id } = useParams<{ id: string }>();

    const transformar = (actor: actorDTO) => { 
        return {
            nombre: actor.nombre,
            fotoURL: actor.foto,    
            biografia: actor.biografia,   
            fechaNacimiento: actor.fechaNacimiento ? new Date(actor.fechaNacimiento) : undefined
        }
    };

    return (
        <>
            <EditarEntidad<actorCreacionDTO, actorDTO>
                endpointGetById={endpoints.actores.getById(Number(id))}
                endpointUpdate={endpoints.actores.update(Number(id))}
                urlIndice="/actores"
                nombreEntidad="Actor"
                transformarFormData={convertirActorAFormData}
                transformar={transformar}
            >
                {(entidad, editar) =>
                    <FormularioActores
                        modelo={entidad}
                        onSubmit={async valores => await editar(valores)}
                    />
                }
            </EditarEntidad>
        </>
    )
}