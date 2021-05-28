import { Component, ComponentFactoryResolver, EventEmitter, Injector, Input, OnChanges, OnInit, Output, ViewChild, ViewContainerRef } from "@angular/core";
import { loadRemoteModule } from "@angular-architects/module-federation-runtime";
import { RemoteComponentConfig } from "./remote-component-config";

@Component({
    selector: 'plugin-proxy',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnInit {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(private injector: Injector,
                private cfr: ComponentFactoryResolver) { }

    @Input() config: RemoteComponentConfig;

    @Output() onComplete = new EventEmitter();

    ngOnInit() {
        this.loadComponent();
    }

    loadComponent() {
        this.viewContainer.clear();
        loadRemoteModule(this.config)
            .then(m => m[this.config.componentName])
            .then(c => {
                const factory = this.cfr.resolveComponentFactory(c);
                this.viewContainer.createComponent(factory, undefined, this.injector);
                this.onComplete.emit(true);
            });
    }
}
