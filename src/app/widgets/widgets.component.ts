import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LookupService } from '../lookup.service';
import { RemoteComponentConfig } from '../remote-component-config';

@Component({
    selector: 'app-widgets',
    templateUrl: './widgets.component.html',
    styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    synchronizer: Subject<RemoteComponentConfig> = new Subject();
    widgets: RemoteComponentConfig[] = [];
    widgetsToLoad: RemoteComponentConfig[] = [];

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs()
            .then(() => {
                this.widgetsToLoad = [
                    this.configs[2],
                    this.configs[2],
                    this.configs[2]
                ];

                /**
                 * Synchronizes the loading of the remote components used on this page
                 * We are gating the template from initializing each remote component until the one
                 * before it completes initialization
                 * When multiple try to load at the same time they overlap and something breaks
                 * If this isn't done you can only load 1 component
                 * **/
                this.widgets.push(this.widgetsToLoad[0]);
                this.synchronizer.subscribe(c => {
                    this.widgets.push(c);
                });
            });
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    onComplete(index: number) {
        const nextIndex = index + 1;
        if (nextIndex < this.widgetsToLoad.length) {
            this.synchronizer.next(this.widgetsToLoad[nextIndex]);
        }
    }

}
