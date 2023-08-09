import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../models/AppState";
import { Observable } from "rxjs";
import { IContact } from "../../models/IContact";
import { selectAllContacts } from "../../shared/store/selectors/contact.selectors";
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

  contacts$: Observable<IContact[]> = this.store.select(selectAllContacts)

  onContactSelected(id: number) {
    this.router.navigateByUrl(`contact/${id}`)
  }

  constructor(
    private store: Store<AppState>,
    private router: Router) {
  }

}
