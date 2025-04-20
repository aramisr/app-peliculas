export default function MostrarErrores(props: mostrarErroresProps){
    
    const style = { color: 'red' }
    return(
        <>  
            {props.errores ? 
                <ul style={style}>
                    {props.errores.map((error, index) => <li key={index}>{error}</li> )}
                </ul>
                : null
            }
        </>
    )
}

interface mostrarErroresProps {
    errores: string[];     
}