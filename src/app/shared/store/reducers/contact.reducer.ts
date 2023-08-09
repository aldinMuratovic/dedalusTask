import { createReducer, on } from "@ngrx/store";
import { contactState } from "../contact.state";
import { CREATE_NEW_CONTACT } from "../actions/contact.actions";

export const contactReducer = createReducer(
  contactState,
  on(CREATE_NEW_CONTACT, (state, { newContact }) => {
    return {
      ...state,
      showModal: true,
      contacts: [...state.contacts, {...newContact, index: state.contacts?.length + 1}],
    };
  })
);
