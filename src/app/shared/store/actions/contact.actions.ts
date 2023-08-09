import { createAction, props } from "@ngrx/store";
import { IContact } from "../../../models/IContact";

export const CREATE_NEW_CONTACT = createAction("[CONTACT] Create New Contact", props<{ newContact: IContact }>())
export const GET_CONTACT = createAction("[CONTACT] Get Contact by ID", props<{ id: number }>())
export const TOGGLE_LOADER_FALSE = createAction("[CONTACT] Set Loader to false")
export const TOGGLE_LOADER_TRUE = createAction("[CONTACT] Set Loader to true")
