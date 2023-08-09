import { createAction, props } from "@ngrx/store";
import { IContact } from "../../../models/IContact";

export const CREATE_NEW_CONTACT = createAction("[CONTACT] Create New Contact", props<{newContact: IContact}>())
