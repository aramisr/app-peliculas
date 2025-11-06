import { actorDTO } from "../../models/actores.model.d";
import { endpoints } from "../../utils/endpoints";
import IndiceEntidad from "../generos/IndiceEntidad";

export default function IndiceActores(){
    return(
        <>
            <IndiceEntidad<actorDTO>
                urlEnpointGet={endpoints.actores.get}
                urlCrear='/actores/crear'
                urlEditarBase="/actores/editar"
                endpointEliminar={endpoints.actores.delete}
                titulo="Actores"
                nombreEntidad="Actor"
            >
                {(actores, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {actores?.map(actor =>
                            <tr key={actor.id}>
                                <td>
                                    {botones(actor.id)}
                                </td>
                                <td>{actor.nombre}</td>
                            </tr>
                        )}
                    </tbody>
                </>}
            </IndiceEntidad>
        </>
    )
}