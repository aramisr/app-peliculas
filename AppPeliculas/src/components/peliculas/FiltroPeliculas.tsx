import { Field, Form, Formik } from "formik";
import { generoDTO } from "../../models/generos.model.d";
import Button from "../../utils/Button";

export default function FiltroPeliculas(){

    const valorInicial: filtroPeliculasForm = {
        titulo: '',
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    }

    const generos: generoDTO[] = [{ id: 1, nombre: "Acción" }, { id: 2, nombre: "Drama" }, { id: 3, nombre: "Comedia" }];

    return(
        <>
            <h3>Filtrar Peliculas</h3>
            <Formik initialValues={valorInicial} onSubmit={valores => console.log(valores)}>
                {(formikProps) => (
                    <Form>
                        <div className="d-flex mb-3 ">
                            <div className="form-group me-3">
                                <input type="text" 
                                       className="form-control" id="titulo" 
                                       placeholder="Título de la película"
                                       {...formikProps.getFieldProps('titulo')}
                                />
                            </div>
                            <div className="form-group me-3">
                                <select className="form-control"
                                    {...formikProps.getFieldProps('generoId')}
                                >
                                    <option value="0">--Seleccione un género--</option>
                                    {generos.map(genero => 
                                        <option key={genero.id} value={genero.id}>{genero.nombre}</option>
                                    )}
                                </select>
                            </div>
                            <div className="form-group me-3">
                                <Field className="form-check-input" id="proximosEstrenos"
                                    name="proximosEstrenos" type="checkbox" />
                                <label htmlFor="proximosEstrenos" className="form-check-label">Próximos estrenos</label>
                            </div>
                            <div className="form-group me-3">
                                <Field className="form-check-input" id="enCines"
                                    name="enCines" type="checkbox" />
                                <label htmlFor="enCines" className="form-check-label">En cines</label>
                            </div>
                            <Button 
                                className="btn btn-primary me-3" 
                                onClick={() => formikProps.submitForm()}
                            >Filtrar</Button>
                            <Button 
                                className="btn btn-danger me-3" 
                                onClick={() => formikProps.setValues(valorInicial)}
                            >Limpiar</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    )
}
interface filtroPeliculasForm{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;
}

