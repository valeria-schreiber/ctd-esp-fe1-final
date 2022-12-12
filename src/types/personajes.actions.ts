import { Action } from "@reduxjs/toolkit";
import { Personaje } from "./personajes.types";

export interface MostrarPersonajesAction extends Action {
  type: 'MOSTRAR-PERSONAJE';
  
}

export interface MostrarPersonajesSuccessAction extends Action {
  type: 'MOSTRAR-PERSONAJE-SUCCESS';
  payload: Personaje[];
}

export interface MostrarPersonajesErrorAction extends Action {
  type: 'MOSTRAR-PERSONAJE-ERROR';
  payload: string;
}

export interface BuscarPersonajesAction extends Action {
  type: 'BUSCAR-PERSONAJE';
  payload: string;
}

export interface BuscarPersonajesSuccessAction extends Action {
  type: "BUSCAR-PERSONAJE-SUCCESS";
  payload: Personaje[];
}

export interface BuscarPersonajesErrorAction extends Action {
  type: "BUSCAR-PERSONAJE-ERROR";
  payload: string;
}

export interface AgregarFavoritoAction extends Action {
  type: 'AGREGAR-FAVORITO';
  payload: [];
}
export interface RemoverFavoritoAction extends Action {
  type: 'REMOVER-FAVORITO',
  payload: [];
}

export interface RemoverTodoAction extends Action {
  type: 'REMOVER-TODO',
}

export type PersonajesActions =
  | MostrarPersonajesAction
  | MostrarPersonajesSuccessAction
  | MostrarPersonajesErrorAction
  | BuscarPersonajesAction
  | BuscarPersonajesSuccessAction
  | BuscarPersonajesErrorAction
  | AgregarFavoritoAction
  | RemoverFavoritoAction
  | RemoverTodoAction
