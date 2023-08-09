import { createReducer, on } from "@ngrx/store";
import { contactState } from "../contact.state";
import { CREATE_NEW_CONTACT, GET_CONTACT, TOGGLE_LOADER_FALSE, TOGGLE_LOADER_TRUE } from "../actions/contact.actions";

export const contactReducer = createReducer(
  contactState,
  on(CREATE_NEW_CONTACT, (state, {newContact}) => {
    return {
      ...state,
      contacts: [...state.contacts, {...newContact, id: state.contacts?.length + 1}],
      isLoading: false
    };
  }),
  on(GET_CONTACT, (state, { id }) => {
    const contactId = Number(id); // Convert to the appropriate type if needed
    return {
      ...state,
      contact: state.contacts.find(contact => contact.id === contactId),
      isLoading: false
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
