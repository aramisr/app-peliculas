import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { generoDTO } from "../../models/generos.model.d";
import { endpoints } from "../../utils/endpoints";
import IndiceEntidad from "./IndiceEntidad";

export default function IndiceGeneros() {

    return (
        <>
            <IndiceEntidad<generoDTO>
                url={endpoints.generos.get}
                urlCrear={endpoints.generos.create}
                titulo="Géneros"
                nombreEntidad="Género"
            >
                {(generos, botones) => <>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {generos?.map(genero =>
                            <tr key={genero.id}>
                                <td>
                                    {botones(`/generos/editar/${genero.id}`, genero.id)}
                                </td>
                                <td>{genero.nombre}</td>
                            </tr>
                        )}
                    </tbody>
                </>}
            </IndiceEntidad>
        </>
    )
}