import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ContactState } from "../../../models/ContactState";

const selectSharedFeature = createFeatureSelector<ContactState>('contact');

export const selectAllContacts = createSelector(
  selectSharedFeature,
  (state: ContactState) => state.contacts
);


export const contactSelectors = {
  selectAllContacts
};
