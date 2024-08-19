import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
export default function Notas() {
    let [notasArray, setNotasArray] = useState(<div key={"0"}></div>);

    let extract = async () => {
        try {
            let response = await fetch("src/components/datos.json", {

                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
            )

            if (!response.ok) {
                throw new Error("Network response was not ok")
            }

            let data = await response.json()
            setNotasArray(
                data.map((da) => (
                    <div key={v4()}>
                        <h6>{da.name}</h6>
                        <p>rallado: {da.rallado}</p>
                        <p>Scott: {da.materiaPrima.scott ? "si" : "no"}</p>
                        <p>Rendimiento de jugo: {da.materiaPrima.rendimientoJugo ? "si" : "no"}</p>
                    </div>
                )))
            console.log(data)
        }
        catch (error) {
            // console.error("error: ", error)
        }

    }

    useEffect(() => {
        extract();
    }, [])

    return (
        <div className='contenedorNotas col-11 d-flex flex-column justify-content-center  m-auto'>
            {notasArray}
        </div>
    )
}
