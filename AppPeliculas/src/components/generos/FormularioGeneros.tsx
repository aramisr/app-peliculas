import { Link } from "react-router-dom"
import Button from "../../utils/Button";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "Yup";
import FormGroupText from "../../utils/FormGroupText";
import { generoCreacionDTO } from "../../models/generos.model.d";

export default function FormularioGeneros(props: formularioGenerosProps){
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}

            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido')
                .max(50, 'La longitud maxima es de 50 caracteres')
                .primeraLetraMayuscula()
            })}
        >
            {(formikProps) => (
                <Form>
                <FormGroupText campo="nombre" label="Nombre" /><br />    
                <Button disabled={formikProps.isSubmitting} 
                        type="submit">Guardar</Button>
                <Link className="btn btn-secondary" to="/generos">Cancelar</Link>
            </Form>    
            )} 
        </Formik>
    )
}

interface formularioGenerosProps{
    modelo: generoCreacionDTO;
    onSubmit(valores: generoCreacionDTO, accion: FormikHelpers<generoCreacionDTO>): void;
}