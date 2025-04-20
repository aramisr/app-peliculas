import { Link } from "react-router-dom"
import Button from "../../utils/Button";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "Yup";
import { actorCreacionDTO } from "../../models/actores.model.d"
import FormGroupText from "../../utils/FormGroupText"
import FormGroupFecha from "../../utils/FormGroupFecha";
import FormGroupImagen from "../../utils/FormGroupImagen";
import FormGroupMarkDown from "../../utils/FormGroupMarkDown";

export default function FormularioActores(props: formularioActoresProps){
    return (
        <Formik
            initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula(),
                fechaNacimiento: Yup.date().required('Este campo es requerido')
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText campo="nombre" label="Nombre" />
                    <FormGroupFecha label="Fecha Nacimiento" campo="fechaNacimiento" />
                    <FormGroupImagen campo="foto" label="Foto" imagenURL={props.modelo.fotoURL} />
                    <FormGroupMarkDown campo="biografia" label="Biografía" /><br />
                    <Button disabled={formikProps.isSubmitting}
                            type="submit"
                    >Guardar</Button>
                    <Link className="btn btn-secondary" to="/actores">Cancelar</Link>
                </Form>
            )}

        </Formik>
    )
}

interface formularioActoresProps{
    modelo: actorCreacionDTO;
    onSubmit(valores: actorCreacionDTO, acciones: FormikHelpers<actorCreacionDTO>): void;
}