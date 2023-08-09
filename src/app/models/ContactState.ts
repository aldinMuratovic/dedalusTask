import { IContact } from "./IContact";

export interface ContactState {
  contacts: IContact[]
  contact?: IContact
  error?: string[]
}
