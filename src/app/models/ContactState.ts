import { IContact } from "./IContact";

export interface ContactState {
  contacts: IContact[]
  error?: string[]
  isLoading?: false
}
