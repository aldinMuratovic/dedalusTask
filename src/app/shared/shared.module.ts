import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemModalComponent } from "../components/create-item-modal/create-item-modal.component";

@NgModule({
  declarations: [
    CreateItemModalComponent
  ],
  exports: [
    CreateItemModalComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
