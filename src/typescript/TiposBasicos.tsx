//Componente funcional React
//rafc + TAB
export const TiposBasicos = () => {
  //variables - typescript
  //let nombre: string | number = 'Viviana';
  //nombre = 123;
  //let nombre: string = 'Viviana';
  //constantes - typescript
  const nombre: string ='Viviana';
  const edad: number = 32;
  const donanteOrganos: boolean = false;
  //arreglos - typescript
  const poderes: string[] = ['fuerza', 'invisibilidad', 'volar'];
  //agregar datos en el arreglo
  poderes.push('velocidad');

  return (
    <div>
      <h3>Tipos Básicos</h3>
      {nombre}, {edad}, {donanteOrganos ? 'Donante' : 'No Donante'}
      <br/>
      {poderes.join(', ')}
    </div>
  )
}
