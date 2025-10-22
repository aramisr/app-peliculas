import { Link } from "react-router-dom";
import { actorDTO } from "../../models/actores.model.d";
import { endpoints } from "../../utils/endpoints";
import IndiceEntidad from "../generos/IndiceEntidad";

export default function IndiceActores(){
    return(
        <>
            <IndiceEntidad<actorDTO>
                url={endpoints.actores.get}
                urlCrear={endpoints.actores.create}
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
                                    {botones(`${endpoints.actores.update}/${actor.id}`, actor.id)}
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