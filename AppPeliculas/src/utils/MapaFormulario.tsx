import { coordenadaDTO } from "../models/coordenadas.model.d"
import { useFormikContext } from "formik";
import Mapa from "./Mapa"

export default function MapaFormulario(props: mapaFormularioProps){

    const {values} = useFormikContext<any>();

    function actualizarCampos(coordenadas: coordenadaDTO){
        values[props.campoLat] = coordenadas.latitud;
        values[props.campoLng] = coordenadas.longitud;
    }

    return(
        <>
            <Mapa 
                coordenadas={props.coordenadas}
                manejarClickMapa={actualizarCampos}
            />
        </>
    )
}

interface mapaFormularioProps{
    coordenadas: coordenadaDTO[];
    campoLat: string;
    campoLng: string;
}

MapaFormulario.defaultProps = {
    coordenadas: []
}