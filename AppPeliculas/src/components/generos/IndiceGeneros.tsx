import { generoDTO } from "../../models/generos.model.d";
import { endpoints } from "../../utils/endpoints";
import IndiceEntidad from "../../utils/IndiceEntidad";

export default function IndiceGeneros() {

    return (
        <>
            <IndiceEntidad<generoDTO>
                urlEnpointGet={endpoints.generos.get}
                urlCrear="/generos/crear"
                urlEditarBase="/generos/editar"
                endpointEliminar={endpoints.generos.delete} 
                titulo="Géneros"
                nombreEntidad="Género"
            >
                {(generos, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero =>
                            <tr key={genero.id}>
                                <td>
                                    {botones(genero.id)}
                                </td>
                                <td>{genero.nombre}</td>
                            </tr>
                        )}
                    </tbody>
                </>}
            </IndiceEntidad>
        </>
    )
}