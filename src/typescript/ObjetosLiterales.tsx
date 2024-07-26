//rafc + TAB
//class - interface - type -> generar objetos
//interface - typescript
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion;
}

interface Direccion {
    pais: string;
    casaNumero: number;
}

export const ObjetosLiterales = () => {
    //Objeto
    const persona: Persona = {
        nombreCompleto: 'Viviana Flores',
        edad: 32,
        direccion: {
            pais: 'Ecuador',
            casaNumero: 365
        }
    }
    //Acceder a la propiedad del objeto
    //persona.nombreCompleto = 'Viviana Flores';
    //no se pueden instanciar las interfaces
    //const instanciarInterface = new Persona();

    return (
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify(persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}
