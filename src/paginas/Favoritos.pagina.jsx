import { useDispatch, useSelector } from "react-redux";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
import { removerrTodo } from "../redux/action/personajesActions";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
        const dispatch = useDispatch()
        const favorito = useSelector(state => state.favorito)

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={()=> dispatch(removerrTodo)}>Eliminar Favorito</button>
        </div>
        {favorito && favorito.map((personaje)=> (
        <TarjetaPersonaje personajes= {personaje}/>
        ))}
    </div>
}

export default PaginaFavoritos