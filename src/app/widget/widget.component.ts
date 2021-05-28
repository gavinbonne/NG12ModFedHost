import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, from, of, Subject } from 'rxjs';
import { concatMap } from 'rxjs/operators';
import { LookupService } from '../lookup.service';
import { RemoteComponentConfig } from '../remote-component-config';

@Component({
    selector: 'es-widget',
    templateUrl: './widget.component.html',
    styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {

    configs: RemoteComponentConfig[] = [];
    configs2: RemoteComponentConfig[] = [];
    synchronizer: Subject<RemoteComponentConfig> = new Subject();

    constructor(private lookupService: LookupService) { }

    ngOnInit(): void {
        this.loadConfigs()
            .then(() => {
                if (this.configs.length > 0) {
                    this.configs2.push(this.configs[0]);
                    this.synchronizer.subscribe(c => {
                        this.configs2.push(c);
                    });
                }
            });
    }

    async loadConfigs(): Promise<void> {
        this.configs = await this.lookupService.lookup();
    }

    add(config: RemoteComponentConfig) {
        this.configs2.push(config);
    }

    onComplete(index: number) {
        const nextIndex = index + 1;
        if (nextIndex < this.configs.length) {
            this.synchronizer.next(this.configs[nextIndex]);
        }
    }

}
