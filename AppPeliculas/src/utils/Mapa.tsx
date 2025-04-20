import { MapContainer, Marker, TileLayer, useMapEvent } from "react-leaflet";
import L from "leaflet"
import icon from "leaflet/dist/images/marker-icon.png";
import shadowIcon from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import { coordenadaDTO } from "../models/coordenadas.model.d";
import { useState } from "react";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: shadowIcon,
    iconAnchor: [16, 37]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa(props: mapaProps){
    const [coordenadas, setCoordenadas] = useState<coordenadaDTO[]>(props.coordenadas);
    return(
        <MapContainer
            center={[13.706190466520667, -89.2116126046756]}
            zoom={14}
            style={{height: props.height}}
        >
            <TileLayer attribution="App de peliculas" 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ClickMapa setPunto={coordenadas => {
                setCoordenadas([coordenadas]); 
                props.manejarClickMapa(coordenadas);
            }} />
            {coordenadas.map(coordenada => 
                <Marcador key={coordenada.latitud + coordenada.longitud} 
                    {...coordenada}
                />
            )}
        </MapContainer>
    )
}

function ClickMapa(props: clickMapProps){
    useMapEvent('click', (e) => {
        props.setPunto({ latitud: e.latlng.lat, longitud: e.latlng.lng });
    });
    return null;
}

function Marcador(props: coordenadaDTO){
    return (
        <Marker position={[props.latitud, props.longitud]} />
    )
}

interface clickMapProps{
    setPunto(coordenadas: coordenadaDTO): void;
}

interface mapaProps{
    height: string;
    coordenadas: coordenadaDTO[];
    manejarClickMapa(coordenadas: coordenadaDTO): void;
}

Mapa.defaultProps = {
    height: '500px'
}
