import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { SHOW_MODAL } from "./shared/store/actions/shared.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DedalusTask';

  openCreateModal() {
    this.store.dispatch(SHOW_MODAL());
  }

  constructor(private store: Store) {
  }
}
