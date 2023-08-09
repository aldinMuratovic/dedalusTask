import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { AppState } from "../../../models/AppState";
import { GET_CONTACT } from "../../../shared/store/actions/contact.actions";
import { Observable, tap } from "rxjs";
import { IContact } from "../../../models/IContact";
import { selectContact } from "../../../shared/store/selectors/contact.selectors";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contactId = this.route.snapshot.params['id']

  contacts$: Observable<IContact | undefined> = this.store.select(selectContact).pipe(
    tap(contact => contact === undefined && this.router.navigateByUrl('/'))
  )

  ngOnInit() {
    this.store.dispatch(GET_CONTACT({id: this.contactId}));
  }

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>,
    private router: Router) {
  }
}
