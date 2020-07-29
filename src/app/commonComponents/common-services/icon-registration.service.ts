import {Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Injectable({
    providedIn: 'root'
})
export class IconRegistrationService {

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer) {
    }

    registerIcons() {
        this.registerDivyaLogoIcon();
    }

    registerDivyaLogoIcon() {
        this.matIconRegistry.addSvgIcon(
            `DJ_LOGO`,
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/DJ-Logo.svg')
        );
    }
}
