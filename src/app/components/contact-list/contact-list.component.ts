import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from "../../models/IContact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {

  @Input() contacts: IContact[] = []

  @Output() onContactSelected = new EventEmitter<number>()

  trackByFn(index: number, item: IContact): number {
    return item.id;
  }

}
