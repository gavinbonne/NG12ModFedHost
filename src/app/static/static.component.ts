import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LookupService } from '../shared/services/lookup.service';
import { RemoteComponentConfig } from '../shared/entities/remote-component-config';
import { RegistryItem } from '../shared/entities/web-component-registry';

@Component({
    selector: 'app-static',
    templateUrl: './static.component.html',
    styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    synchronizer: Subject<RemoteComponentConfig> = new Subject();
    widgets: RemoteComponentConfig[] = [];
    widgetsToLoad: RemoteComponentConfig[] = [];
    readonly RegistryItem = RegistryItem;

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs()
            .then(() => {
                this.widgetsToLoad = [
                    this.configs[1],
                    this.configs[1],
                    this.configs[1]
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
