import { useDispatch } from 'react-redux';
import { getPersonajeThunk } from '../../redux/action/personajesActions';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = ({next, prev}) => {
       console.log(next, prev);
        const dispatch = useDispatch()
       const handlePrev = ()=>{ dispatch(getPersonajeThunk(prev))
        
       }

       const handleNext = ()=> {
        dispatch(getPersonajeThunk(next))
       }
    return <div className="paginacion">
        <button disabled={prev === null ? true : false} className={"primary"} onClick={handlePrev}>Anterior</button>
        <button disabled={next === null ? true : false} className={"primary"} onClick={handleNext} >Siguiente</button>
    </div>
}

export default Paginacion;