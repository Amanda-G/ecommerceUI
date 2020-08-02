import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './commonComponents/feature-login-and-registration/login/login-component/login.component';
import {RegistrationComponent} from './commonComponents/feature-login-and-registration/registration/registration/registration.component';
import {LogRegistrationComponent} from './dj-store/login-registration/log-registration/log-registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {LoginAndRegistrationComponent} from './commonComponents/feature-login-and-registration/login-and-registration/login-and-registration/login-and-registration.component';
import {HttpClientModule} from '@angular/common/http';
import {HomePageComponent} from './commonComponents/home-page/home-page/home-page.component';
import {MainMenuComponent} from './commonComponents/feature-main-menu/main-menu/main-menu.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatRippleModule} from '@angular/material/core';
import { RippleOnHoverDirective } from './commonComponents/directives/ripple-on-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LogRegistrationComponent,
    LoginAndRegistrationComponent,
    HomePageComponent,
    MainMenuComponent,
    RippleOnHoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatExpansionModule,
    FormsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
