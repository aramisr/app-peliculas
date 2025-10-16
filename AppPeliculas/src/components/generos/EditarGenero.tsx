import FormularioGeneros from "./FormularioGeneros";
import { generoCreacionDTO, generoDTO } from "../../models/generos.model.d";
import { urlGeneros } from "../../utils/endpoints";
import EditarEntidad from "../../utils/EditarEntidad";

export default function EditarGenero() {

    return (
        <>  
            <EditarEntidad<generoCreacionDTO, generoDTO>
                url={`${urlGeneros}/UpdateGenero`}
                urlIndice="/generos"
                nombreEntidad="Género">
                {(entidad, editar) => 
                    <FormularioGeneros modelo={entidad}
                        onSubmit={async valores => {
                            await editar(valores)
                        }} 
                    />    
                }
            </EditarEntidad>
        </>
    )
}