import FormularioActores from "./FormularioActores";

export default function EditarGenero(){
    return(
        <>
            <h3>Editar Actores</h3>
            <FormularioActores 
                modelo={{
                    nombre: 'Tobey Maguire', 
                    fechaNacimiento: new Date('1985-10-10T00:00:00'),
                    biografia: `# tom ha nacido **tom**` ,
                    fotoURL: 'https://m.media-amazon.com/images/M/MV5BNjA3N2FhNDAtZDEyZS00NTY1LTg0M2YtZWQ3ZTNlYmYyMWViXkEyXkFqcGc@._V1_QL75_UX174_.jpg'
                }}
                onSubmit={valores => console.log(valores)}
            />
        </>
    )
}