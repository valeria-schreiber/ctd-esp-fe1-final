import { useDispatch } from 'react-redux';
import { getBuscadorThunk } from '../../redux/action/personajesActions';
import './filtros.css';

const Filtros = () => {

    const dispatch = useDispatch()

    return <div className="filtros">
        <label >Filtrar por nombre:</label>
        <input type="text" onChange={(e)=> dispatch(getBuscadorThunk(e.target.value))} placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" />
    </div>
}

export default Filtros;