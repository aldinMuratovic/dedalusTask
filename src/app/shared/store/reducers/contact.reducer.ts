import { createReducer, on } from "@ngrx/store";
import { contactState } from "../contact.state";
import { CREATE_NEW_CONTACT, GET_CONTACT } from "../actions/contact.actions";

export const contactReducer = createReducer(
  contactState,
  on(CREATE_NEW_CONTACT, (state, {newContact}) => {
    return {
      ...state,
      contacts: [...state.contacts, {...newContact, id: state.contacts?.length + 1}]
    };
  }),
  on(GET_CONTACT, (state, { id }) => {
    const contactId = Number(id);
    return {
      ...state,
      contact: state.contacts.find(contact => contact.id === contactId),
    };
  })
);
