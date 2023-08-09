import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-contact-form',
  templateUrl: './create-contact-form.component.html',
  styleUrls: ['./create-contact-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateContactFormComponent {

  contactForm = this.createItemForm()

  createItemForm(): FormGroup {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    })
  }

  markFormAsTouched() {
    this.contactForm.markAllAsTouched()
    this.cdr.detectChanges()
  }

  constructor(private formBuilder: FormBuilder, private cdr: ChangeDetectorRef) {
  }

}
