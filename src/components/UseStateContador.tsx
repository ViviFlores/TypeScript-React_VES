import { useState } from "react";

export const UseStateContador = () => {

    //hook useState: cambiar el estado de un valor o un componente
    const [valorContador, setValorContador] = useState<number>(0); //valor inicial del estado

    //función manipular el valor del contador
    const cambiarContador = (numero: number) => {
        //Llamar función del hook useState
        setValorContador(valorContador + numero);
        //setValorContador(9 + -1)  
                        //(9 - 1) 8
    }


    return (
        <div>
            <h3>Contador: <small>{valorContador}</small> </h3>
            <button
                className="btn btn-primary"
                onClick={() => cambiarContador(1)}>
                +1
            </button>
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => cambiarContador(-1)}>
                -1
            </button>
        </div>
    )
}
