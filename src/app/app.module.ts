import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './commonComponents/login/login-component/login.component';
import {RegistrationComponent} from './commonComponents/registration/registration/registration.component';
import {LogRegistrationComponent} from './dj-store/login-registration/log-registration/log-registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatExpansionModule} from "@angular/material/expansion";
import {FormsModule} from "@angular/forms";
import {MatToolbarModule} from "@angular/material/toolbar";
import {LoginAndRegistrationComponent} from './commonComponents/login-and-registration/login-and-registration/login-and-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LogRegistrationComponent,
    LoginAndRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    FormsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
