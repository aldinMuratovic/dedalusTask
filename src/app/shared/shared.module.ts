import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateItemModalComponent } from "../components/create-item-modal/create-item-modal.component";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [
    CreateItemModalComponent,
    LoaderComponent
  ],
  exports: [
    CreateItemModalComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
