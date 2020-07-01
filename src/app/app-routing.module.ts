import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogRegistrationComponent} from "./dj-store/login-registration/log-registration/log-registration.component";


const routes: Routes = [
  {path: 'login', component: LogRegistrationComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
