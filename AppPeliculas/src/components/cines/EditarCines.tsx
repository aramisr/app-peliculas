import FormularioCines from "./FormularioCines";

export default function EditarCines() {
    return (
        <>
            <h3>Editar Cine</h3>
            <FormularioCines
                modelo={{ nombre: "Metrocentro", latitud: 13.706190466520667, longitud: -89.2116126046756 }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}