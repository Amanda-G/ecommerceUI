import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogRegistrationComponent} from './dj-store/login-registration/log-registration/log-registration.component';
import {HomePageComponent} from './commonComponents/home-page/home-page/home-page.component';
import {MainMenuComponent} from './commonComponents/feature-main-menu/main-menu/main-menu.component';


const routes: Routes = [
    {path: 'login', component: LogRegistrationComponent},
    {path: 'menu', component: MainMenuComponent},
    {path: 'home', component: HomePageComponent},
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
