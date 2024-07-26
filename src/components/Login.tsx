import { useEffect, useReducer } from "react";

// interface - estado useReducer
interface AuthState {
  validando: boolean;
  token: string | null;
  correo: string;
  contrasenia: string;
}

// class, interface, type -> manipular los 

//type - payload
type AuthPayload = {
  correo: string;
  contrasenia: string;
}

//type - action
type AuthAction =
  { type: 'logout' }
  | { type: 'login', payload: AuthPayload }

export const Login = () => {

  //estado incial useReducer
  const inicialState: AuthState = {
    validando: true,
    token: null,   // string / null
    correo: '',
    contrasenia: ''
  }

  //función: tomar la acción para retornar el nuevo valor del estado
  const reducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
      case 'logout':
        return {
          validando: false,
          token: null,
          correo: '',
          contrasenia: ''
        }
      case 'login':
        const { correo, contrasenia } = action.payload; //desestructuración
        return {
          validando: false,
          token: 'FSDGDFdfgdfg3_4534dsfDFGF_dfgfd5654fdgfdggfdfgdfgdfgdf',
          correo: correo,
          contrasenia: contrasenia
        }
      default:
        return state;
    }

  }

  //hook useReducer: cmabio de estados de manera compleja.
  const [{ validando, token }, dispatch] = useReducer(reducer, inicialState);

  //desestructuración de objetos
  /*const persona = {
      nombre: 'Viviana',
      edad: 32
  }
  const { nombre, edad } = persona;
  console.log(edad);
  //console.log(persona.edad);*/

  //hook useEffect
  useEffect(() => {
    //función tiempo
    setTimeout(() => {
      dispatch({ type: 'logout' })
    }, 1500); //milisegundos
  }, []);

  //función cambia el estado a login
  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        correo: 'vflores@gmail.com',
        contrasenia: '123456'
      }
    });
  }

  //función cambia el estado a logout
  const logout = () => {
    dispatch({ type: 'logout' });
  }

  //Verificar el valor del atributo validando
  if (validando) {  // validando -> true
    return (
      <div>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validando...
        </div>
      </div>
    )
  }

  return (
    <div>
      <h3>Login</h3>
      {
        (token === null)
          ? <div className="alert alert-danger">No autenticado...</div>
          : <div className="alert alert-success">Autenticado...</div>
      }
      {
        (token === null)
          ? <button
            className="btn btn-primary"
            onClick={login}>
            Iniciar Sesión
          </button>
          : <button
            className="btn btn-danger"
            onClick={logout}>
            Cerrar Sesión
          </button>
      }
    </div>
  )
}
