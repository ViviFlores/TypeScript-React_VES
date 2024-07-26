import { useEffect, useState } from "react";

export const UseEffectComponente = () => {

    //hook useState: cambiar el estado de un valor o componente
    const [valor, setValor] = useState<boolean>(false);

    //hook useEffect: se ejecuta en segundo plano
    //- Se carga por primera vez la página
    //- Existe cambios en la página
    //- Se maneja una lista de dependencias
    useEffect(() => {
        //código a ejecutar
        console.log('Desde el useEffect');
    }, [valor]);  //lista de dependencias

    //función manipular el valor del useState
    const cambiarValor = () => {
        setValor(!valor);
        //setValor(valor ? false : true)
    }

    return (
        <div>
            <h3>Hook - UseEffect</h3>
            <button onClick={cambiarValor}>Cambiar</button>
        </div>
    )
}
