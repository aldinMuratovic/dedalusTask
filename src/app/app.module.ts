import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { StoreModule } from "@ngrx/store";
import { sharedReducer } from "./shared/store/reducers/shared.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { SharedModule } from "./shared/shared.module";
import { CreateContactFormComponent } from './components/create-item-form/create-contact-form.component';
import { ReactiveFormsModule } from "@angular/forms";
import { contactReducer } from "./shared/store/reducers/contact.reducer";
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactModule } from './components/contact/contact.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CreateContactFormComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({
      shared: sharedReducer,
      contact: contactReducer
    }),
    StoreDevtoolsModule.instrument(),
    ReactiveFormsModule,
    ContactModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
