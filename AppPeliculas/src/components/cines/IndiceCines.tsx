import { cineDTO } from "../../models/cines.model.d";
import { endpoints } from "../../utils/endpoints";
import IndiceEntidad from "../../utils/IndiceEntidad";

export default function IndiceCines(){
    return(
        <>
            <IndiceEntidad<cineDTO>
                urlEnpointGet={endpoints.cines.get}
                urlCrear="/cines/crear"
                urlEditarBase="/cines/editar"
                endpointEliminar={endpoints.cines.delete} 
                titulo="Cines"
                nombreEntidad="Cine"
            >
                {(cines, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cines?.map(cine =>
                            <tr key={cine.id}>
                                <td>
                                    {botones(cine.id)}
                                </td>
                                <td>{cine.nombre}</td>
                            </tr>
                        )}
                    </tbody>
                </>}
            </IndiceEntidad>
        </>
    )
}