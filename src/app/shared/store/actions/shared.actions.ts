import { createAction } from "@ngrx/store";

export const SHOW_MODAL = createAction("[SHARED] Open Modal")
export const CLOSE_MODAL = createAction("[SHARED] Close Modal")
export const TOGGLE_LOADER_FALSE = createAction("[SHARED] Set Loader to false")
export const TOGGLE_LOADER_TRUE = createAction("[SHARED] Set Loader to true")
