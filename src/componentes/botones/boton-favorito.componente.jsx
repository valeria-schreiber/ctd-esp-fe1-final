import { useDispatch } from 'react-redux';
import { agregarFavorito, removerFavorito } from '../../redux/action/personajesActions';
import './boton-favorito.css';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */
const BotonFavorito = ({esFavorito, onClick, personaje}) => {
    const src = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"
    const dispatch = useDispatch();

    const handleFav = () => {
        if(esFavorito) {
            dispatch(removerFavorito(personaje))
        } else {
            onClick(!esFavorito);
            dispatch(agregarFavorito(personaje))
        }
    }

    return <div className="boton-favorito" onClick={handleFav}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;