import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RemoteComponentConfig } from './remote-component-config';
import { LookupService } from './lookup.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    configs2: RemoteComponentConfig[] = [];
    showConfig = false;

    constructor(public router: Router,
                private lookupService: LookupService,
                private cd: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.loadConfigs();
        // this.configs2.push(...this.configs);
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    add(config: RemoteComponentConfig) {
        this.configs2.push(config);
    }

}
