import { createReducer, on } from "@ngrx/store";
import { CLOSE_MODAL, SHOW_MODAL, TOGGLE_LOADER_FALSE, TOGGLE_LOADER_TRUE } from "../actions/shared.actions";
import { sharedState } from "../shared.state";

export const sharedReducer = createReducer(
  sharedState,
  on(SHOW_MODAL, (state) => {
    return {
      ...state,
      showModal: true
    };
  }),
  on(CLOSE_MODAL, (state) => {
    return {
      ...state,
      showModal: false
    };
  }),
  on(TOGGLE_LOADER_FALSE, (state) => {
    return {
      ...state,
      isLoading: false
    };
  }),
  on(TOGGLE_LOADER_TRUE, (state) => {
    return {
      ...state,
      isLoading: true
    };
  })
);
