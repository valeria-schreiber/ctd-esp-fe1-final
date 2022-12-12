import { ActionCreator, ThunkAction } from "@reduxjs/toolkit"
import axios from "axios"
import { AgregarFavoritoAction, BuscarPersonajesAction, BuscarPersonajesErrorAction, BuscarPersonajesSuccessAction, MostrarPersonajesAction, MostrarPersonajesErrorAction, MostrarPersonajesSuccessAction, PersonajesActions, RemoverFavoritoAction, RemoverTodoAction } from "../../types/personajes.actions"
import { Personaje } from "../../types/personajes.types"
import { IRootState } from "../store"

const pedirPersonaje: ActionCreator<MostrarPersonajesAction> = () => {
    return {
        type: 'MOSTRAR-PERSONAJE'
    }
}

const pedirPersonajeSuccess: ActionCreator<MostrarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: 'MOSTRAR-PERSONAJE-SUCCESS',
        payload: personajes
    }
}

const pedirPersonajeError: ActionCreator<MostrarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'MOSTRAR-PERSONAJE-ERROR',
        payload: error
    }
}
const buscarPersonaje: ActionCreator<BuscarPersonajesAction> = (name: string) => {
    return{
        type: 'BUSCAR-PERSONAJE',
        payload: name
    }
    
}

const buscarPersonajeSuccess: ActionCreator<BuscarPersonajesSuccessAction> = (personaje: Personaje[]) => {
    return {
        type: 'BUSCAR-PERSONAJE-SUCCESS',
        payload: personaje
    }
}

const buscarPersonajeError: ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: 'BUSCAR-PERSONAJE-ERROR',
        payload: error
    }
}

export const agregarFavorito: ActionCreator<AgregarFavoritoAction> = (personaje: Personaje)=>{
    return{
        type: 'AGREGAR-FAVORITO',
        payload: personaje
    }
}

export const removerFavorito: ActionCreator<RemoverFavoritoAction> = (personaje: Personaje)=> {
    return{
        type: 'REMOVER-FAVORITO',
        payload: personaje
    }
}

export const removerrTodo: ActionCreator<RemoverTodoAction> = ()=> {
    return {
    type: 'REMOVER-TODO'
    }
}

interface GetPersonajeThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesActions>{};

export const getBuscadorThunk = (name: string): GetPersonajeThunkAction =>{
    return (dispatch) =>{
        let params = "?"
        if (name){
        params += `name=${name}`
    }
            dispatch(buscarPersonaje())
        axios.get(`https://rickandmortyapi.com/api/character${params}`)
        .then(res =>  { 
            const {info, results} = res.data
            const {next, prev} = info
             dispatch(buscarPersonajeSuccess({results, next, prev}))})
        .catch (error=> {
            const {mensage} = error
        dispatch(buscarPersonajeError(mensage))
        })
        
        
    }
}

export const getPersonajeThunk = (page?: string): GetPersonajeThunkAction =>{
    return (dispatch) =>{
        if(page === undefined)
        page= 'https://rickandmortyapi.com/api/character/';
        dispatch(pedirPersonaje())
        axios.get(page)
        .then(res =>  {
                const {info, results} = res.data
                const {next, prev} = info
                 dispatch(pedirPersonajeSuccess({results, next, prev}))})
        .catch (error=> {
            const {mensage} = error
        dispatch(pedirPersonajeError(mensage))
        })
    }
}