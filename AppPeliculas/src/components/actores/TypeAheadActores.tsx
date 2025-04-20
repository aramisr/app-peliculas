import { Typeahead } from "react-bootstrap-typeahead";
import { actorPeliculaDTO } from "../../models/actores.model.d";
import { ReactElement, useState } from "react";
import { isAutoAccessorPropertyDeclaration } from "typescript";

export default function TypeAheadActores(props: typeAheadActoresProps) {

    const actores: actorPeliculaDTO[] = [
        {
            id: 1,
            nombre: 'Tom Holland',
            personaje: 'Peter Parker',
            foto: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/2/2f/Tom_Holland.jpg/revision/latest/scale-to-width-down/1200?cb=20220213015022'
        },
        {
            id: 2,
            nombre: 'Robert Downey Jr',
            personaje: 'Tony Stark',
            foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVWwlyhSVa3j9rptYSMvQ2BIByJolqgG4ki5Ycjw0vFGP8c26jAKXLBF4pmpSE7ef42w&usqp=CAU'
        },
        {
            id: 3,
            nombre: 'SChris Evans',
            personaje: 'Steve Rogers',
            foto: 'https://static.wikia.nocookie.net/english-voice-over/images/f/fc/Chris_Evans.PNG/revision/latest/scale-to-width-down/328?cb=20160128122335&path-prefix=sv'
        },
        {
            id: 4,
            nombre: 'Scarlett Johansson',
            personaje: 'Natasha Romanoff',
            foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Scarlett_Johansson_by_Gage_Skidmore_2019.jpg/1200px-Scarlett_Johansson_by_Gage_Skidmore_2019.jpg'
        }                                           
    ];

    const seleccion: actorPeliculaDTO[] = [];

    const [elementoArrastrado, setElementoArrastrado] = useState<actorPeliculaDTO | undefined>(undefined);

    function manejarDragStar(actor: actorPeliculaDTO){
        setElementoArrastrado(actor);
    }

    function manejarDragOver(actor: actorPeliculaDTO){
        if(!elementoArrastrado){
            return;
        }

        if(actor.id !== elementoArrastrado.id){
            const elementoArrastradoIndice = props.actores.findIndex(x => x.id === elementoArrastrado.id)
            const actorIndice = props.actores.findIndex(x => x.id === actor.id)

            const actores = [...props.actores];
            actores[actorIndice] = elementoArrastrado;
            actores[elementoArrastradoIndice] = actor;
            props.onAdd(actores);
        }
    }

    return(
        <>
            <label>Actores</label>
            <Typeahead
                id="typeahead"
                onChange={(selected) => {
                    const actorSeleccionado = selected[0] as actorPeliculaDTO | undefined;
                    if(props.actores.findIndex(x => x.id === actorSeleccionado?.id) === -1){
                        if (actorSeleccionado && "id" in actorSeleccionado && "nombre" in actorSeleccionado) {
                            props.onAdd([...props.actores, actorSeleccionado]);
                        }
                    }
                }}
                options={actores as actorPeliculaDTO[]}
                labelKey="nombre"
                filterBy={['nombre']}
                placeholder="Escriba el nombre del actor..."
                minLength={2}
                flip={true}
                selected={seleccion}
                renderMenuItemChildren={(option) => {
                    const actor = option as actorPeliculaDTO;
                    return (
                        <>
                            <img alt="imagen actor" src={actor.foto}
                                style={{
                                    height: '64px',
                                    marginRight: '10px',
                                    width: '64px'
                                }}
                            />
                            <span>{actor.nombre}</span>
                        </>
                    )
                }}
            />
            <ul className="list-group">
                {props.actores.map(actor => 
                    <li key={actor.id} 
                        draggable={true}
                        onDragStart={() => manejarDragStar(actor)}
                        onDragOver={() => manejarDragOver(actor)}
                        className="list-group-item list-group-item-action"

                    >
                        {props.listadoUI(actor)}
                        <span className="badge badge-primary badge-pill pointer"
                            style={{marginLeft: '0.5rem'}}
                            onClick={() => props.onRemove(actor)}
                        >
                            X
                        </span>
                    </li>)
                }
            </ul>
        </>
    )
}

interface typeAheadActoresProps {
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]): void;
    listadoUI(actor: actorPeliculaDTO): ReactElement;
    onRemove(actor: actorPeliculaDTO): void;
}


