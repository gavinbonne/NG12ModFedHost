import { Component, ComponentFactoryResolver, Injector, Input, OnChanges, ViewChild, ViewContainerRef } from "@angular/core";
import { loadRemoteModule } from "@angular-architects/module-federation-runtime";
import { RemoteComponentConfig } from "./remote-component-config";

@Component({
    selector: 'plugin-proxy',
    template: `
        <ng-container #placeHolder></ng-container>
    `
})
export class PluginProxyComponent implements OnChanges {
    @ViewChild('placeHolder', { read: ViewContainerRef, static: true })
    viewContainer: ViewContainerRef;

    constructor(private injector: Injector,
                private cfr: ComponentFactoryResolver) { }

    @Input() config: RemoteComponentConfig;

    async ngOnChanges() {
        this.viewContainer.clear();

        const component = await loadRemoteModule(this.config)
            .then(m => m[this.config.componentName]);

        const factory = this.cfr.resolveComponentFactory(component);

        this.viewContainer.createComponent(factory, undefined, this.injector);
    }
}
