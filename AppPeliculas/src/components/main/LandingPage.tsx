import { useEffect, useState } from "react";
import { landingPageDTO } from "../../models/peliculas.model.d";
import ListadoPeliculas from "../peliculas/ListadoPeliculas";

export default function LandingPage(){
    const [peliculas, setPeliculas] = useState<landingPageDTO>({});

    useEffect(() => {
      const timerId = setTimeout(() => {
        setPeliculas({
          enCartelera: [ 
            {
              id: 1, titulo: 'Spider-Man: No Way Home',
              poster: 'https://deadline.com/wp-content/uploads/2021/11/spidermannowayhomeposter.jpg?w=1024' 
            },
            {
              id: 2, titulo: 'Spider-Man 2',
              poster: 'https://m.media-amazon.com/images/M/MV5BNGQ0YTQyYTgtNWI2YS00NTE2LWJmNDItNTFlMTUwNmFlZTM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' 
            }
          ],
          proximosEstrenos: [ 
            {
              id: 1, titulo: 'Superman',
              poster: 'https://www.economiadigital.es/tendenciashoy/wp-content/uploads/2024/11/Superman_Legacy-708x1024.jpg' 
            },
            {
              id: 2, titulo: 'Avatar 3',
              poster: 'https://quaderno.earth/rafaelalzaga1+1@gmail.com/write/cover-images/5b7d449e-8943-4158-99d0-703d09ea616a/1_jpyb1vieamlibzdgapmw5a.jpg-increased-LAkqc6' 
            }
          ]
        })
      }, 1000);
  
      return () => clearTimeout(timerId);
    })
    
    return (
        <>
            <h3>En Cartelera</h3>
            <ListadoPeliculas peliculas={peliculas.enCartelera} />

            <h3>Próximos Estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </>
    )
}