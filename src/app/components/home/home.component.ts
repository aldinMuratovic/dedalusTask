import { Component, ViewChild } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../models/AppState";
import { Observable } from "rxjs";
import { selectShowModal } from "../../shared/store/selectors/shared.selectors";
import { CLOSE_MODAL } from "../../shared/store/actions/shared.actions";
import { CREATE_NEW_CONTACT } from "../../shared/store/actions/contact.actions";
import { CreateContactFormComponent } from "../create-item-form/create-contact-form.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  @ViewChild(CreateContactFormComponent, {static: false}) createContactFormComponent: CreateContactFormComponent | undefined;

  showModal$: Observable<boolean> = this.store.select(selectShowModal)

  onCloseModal() {
    this.store.dispatch(CLOSE_MODAL());
  }

  onCreateNewContact() {
    if (this.createContactFormComponent && this.createContactFormComponent.contactForm)
      if (this.createContactFormComponent.contactForm.valid) {
        this.store.dispatch(CREATE_NEW_CONTACT({newContact: this.createContactFormComponent.contactForm.value}));
      }

    this.createContactFormComponent?.markFormAsTouched()
  }

  constructor(private store: Store<AppState>) {
  }

}
