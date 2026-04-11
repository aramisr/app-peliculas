import FormularioCines from "./FormularioCines";
import { cineCreacionDTO, cineDTO } from "../../models/cines.model.d";
import { endpoints } from "../../utils/endpoints";
import EditarEntidad from "../../utils/EditarEntidad";
import { useParams } from "react-router-dom";

export default function EditarCines() {
    
    const { id } = useParams<{ id: string }>();

    return (
            <>
                <EditarEntidad<cineCreacionDTO, cineDTO>
                    endpointGetById={endpoints.cines.getById(Number(id))}
                    endpointUpdate={endpoints.cines.update(Number(id))}
                    urlIndice="/cines"
                    nombreEntidad="Cine"
                >
                    {(entidad, editar) => (
                        <FormularioCines
                            modelo={entidad}
                            onSubmit={async valores => await editar(valores)}
                        />
                    )}
                </EditarEntidad>
            </>
        )
}