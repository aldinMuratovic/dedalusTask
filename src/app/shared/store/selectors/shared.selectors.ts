import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SharedState } from "../../../models/SharedState";

const selectSharedFeature = createFeatureSelector<SharedState>('shared');

export const selectShowModal = createSelector(
  selectSharedFeature,
  (state: SharedState) => state.showModal
);

export const selectIsLoading = createSelector(
  selectSharedFeature,
  (state: SharedState) => state.isLoading
);

