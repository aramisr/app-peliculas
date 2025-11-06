import { useFormikContext } from "formik";
import MostrarErrorCampo from "./MostrarErrorCampo";

export default function FormGroupFecha(props: formGroupFechaProps) {
  const { values, setFieldValue, touched, errors } = useFormikContext<any>();

  const valor = values[props.campo];

  const valorFormateado =
    valor instanceof Date
      ? valor.toISOString().split("T")[0]
      : typeof valor === "string"
      ? new Date(valor).toISOString().split("T")[0]
      : "";

  return (
    <div className="form-group">
      {props.label && <label htmlFor={props.campo}>{props.label}</label>}

      <input
        type="date"
        className="form-control"
        id={props.campo}
        name={props.campo}
        value={valorFormateado}
        onChange={(e) => {
          const fechaSeleccionada = e.currentTarget.value;
          // Convertimos el string de input a Date (manteniendo hora 00:00)
          const fecha = fechaSeleccionada
            ? new Date(fechaSeleccionada + "T00:00:00")
            : undefined;
          setFieldValue(props.campo, fecha);
        }}
      />

      {touched[props.campo] && errors[props.campo] && (
        <MostrarErrorCampo mensaje={errors[props.campo]?.toString()!} />
      )}
    </div>
  );
}

interface formGroupFechaProps{
    campo: string;
    label?: string;
}