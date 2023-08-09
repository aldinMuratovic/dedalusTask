import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact/:id', loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule) },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
