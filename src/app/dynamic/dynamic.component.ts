import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LookupService } from '../shared/services/lookup.service';
import { RemoteComponentConfig } from '../shared/entities/remote-component-config';
import { RegistryItem } from '../shared/entities/web-component-registry';

@Component({
    selector: 'app-dynamic',
    templateUrl: './dynamic.component.html',
    styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    configs2: RemoteComponentConfig[] = [];
    synchronizer: Subject<RemoteComponentConfig> = new Subject();
    reactMfeList: string[] = [];
    readonly RegistryItem = RegistryItem;

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs();
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    add(config: RemoteComponentConfig) {
        this.configs2.push(config);
    }

}
