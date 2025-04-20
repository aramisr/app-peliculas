import { Link } from "react-router-dom"
import { Form, Formik, FormikHelpers } from 'formik';
import * as Yup from 'Yup';
import { cineCreacionDTO } from "../../models/cines.model.d";
import FormGroupText from '../../utils/FormGroupText';
import Button from '../../utils/Button';
import MapaFormulario from "../../utils/MapaFormulario";
import { coordenadaDTO } from "../../models/coordenadas.model.d";

export default function FormularioCines(props: formularioCinesProps){

    function transformarCoordenada(): coordenadaDTO[] | undefined{
        if(props.modelo.latitud && props.modelo.longitud){
            const respuesta: coordenadaDTO = { latitud: props.modelo.latitud, longitud: props.modelo.longitud }
            return [respuesta];
        }
        return undefined;
    }

    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula()
            })}
        >
            {(formikProps) => ( 
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" /><br />
                    <div style={{marginBottom: '1rem'}}>
                        <MapaFormulario campoLat="latitud" campoLng="longitud" 
                            coordenadas={transformarCoordenada()}
                        />
                    </div>
                    <Button disabled={formikProps.isSubmitting} type="submit">Guardar</Button>
                    <Link className="btn btn-secondary" to="/cines" >Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}
interface formularioCinesProps{
    modelo: cineCreacionDTO;
    onSubmit(valores: cineCreacionDTO, acciones: FormikHelpers<cineCreacionDTO>): void;
}