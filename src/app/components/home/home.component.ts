import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from "../../models/AppState";
import { Observable } from "rxjs";
import { selectShowModal } from "../../shared/store/selectors/shared.selectors";
import { CLOSE_MODAL } from "../../shared/store/actions/shared.actions";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  showModal$: Observable<boolean> = this.store.select(selectShowModal)

  onCloseModal() {
    this.store.dispatch(CLOSE_MODAL());
  }

  constructor(private store: Store<AppState>) {}

}
