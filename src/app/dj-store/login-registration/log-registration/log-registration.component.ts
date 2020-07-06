import {Component, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-log-registration',
    templateUrl: './log-registration.component.html',
    styleUrls: ['./log-registration.component.scss']
})
export class LogRegistrationComponent implements OnInit {

    constructor(private matIconRegistry: MatIconRegistry,
                private domSanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this.matIconRegistry.addSvgIcon(
            `DJ_LOGO`,
            this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/DJ-Logo.svg')
        );
    }

}
