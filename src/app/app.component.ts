import {Component} from '@angular/core';
import {IconRegistrationService} from './commonComponents/common-services/icon-registration.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    title = 'ecommerceUI';

    constructor(iconRegistrationService: IconRegistrationService) {
        iconRegistrationService.registerIcons();
    }
}
