import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-create-item-modal',
  templateUrl: './create-item-modal.component.html',
  styleUrls: ['./create-item-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateItemModalComponent {

  @Input() modalTitle: string = ''
  @Input() closeBtnText: string = 'Close'
  @Input() submitBtnText: string = 'Submit'

  @Output() onCloseModal = new EventEmitter<void>()
  @Output() onSubmit = new EventEmitter<void>()

}
