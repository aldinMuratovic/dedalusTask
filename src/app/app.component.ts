import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from "@ngrx/store";
import { CLOSE_MODAL, SHOW_MODAL, TOGGLE_LOADER_FALSE } from "./shared/store/actions/shared.actions";
import { CREATE_NEW_CONTACT } from "./shared/store/actions/contact.actions";
import { CreateContactFormComponent } from "./components/create-item-form/create-contact-form.component";
import { Observable } from "rxjs";
import { selectIsLoading, selectShowModal } from "./shared/store/selectors/shared.selectors";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(CreateContactFormComponent, {static: false}) createContactFormComponent: CreateContactFormComponent | undefined;
  title = 'DedalusTask';

  showModal$: Observable<boolean> = this.store.select(selectShowModal)
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading)

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(TOGGLE_LOADER_FALSE())
    }, 1000)
  }

  openCreateModal() {
    this.store.dispatch(SHOW_MODAL());
  }

  onCloseModal() {
    this.store.dispatch(CLOSE_MODAL());
  }

  onCreateNewContact() {
    if (this.createContactFormComponent && this.createContactFormComponent.contactForm)
      if (this.createContactFormComponent.contactForm.valid) {
        this.store.dispatch(CREATE_NEW_CONTACT({newContact: this.createContactFormComponent.contactForm.value}));
        this.onCloseModal()
        this.router.navigateByUrl('/')
      }

    this.createContactFormComponent?.markFormAsTouched()
  }

  constructor(private store: Store, private router: Router) {
  }
}
