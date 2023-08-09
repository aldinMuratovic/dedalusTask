import { Action } from "@ngrx/store";
import { SharedState } from "../../../models/SharedState";
import { CLOSE_MODAL, SHOW_MODAL } from "../actions/shared.actions";

const defaultState: SharedState = {
  showModal: false
}

const newState = (state: SharedState, newData: SharedState) => {
  return Object.assign({}, state, newData)
}

export function sharedReducer(state: SharedState = defaultState, action: Action) {
  switch (action.type) {
    case SHOW_MODAL.type:
      return newState(state, {showModal: true})
    case CLOSE_MODAL.type:
      return newState(state, {showModal: false})
    default:
      return state
  }
}
