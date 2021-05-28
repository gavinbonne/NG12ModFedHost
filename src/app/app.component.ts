import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    // @ViewChild('myContainer', { read: ViewContainerRef }) container: ViewContainerRef;

    constructor(public router: Router,
                private viewCR: ViewContainerRef,
                private cfr: ComponentFactoryResolver) { }

    ngOnInit(): void {
        // const { SurveyTileComponent } = await import('remote1/SurveyTileComponent');
        // const componentFactory = this.cfr.resolveComponentFactory(SurveyTileComponent);
        // const { instance } = this.container.createComponent(componentFactory);
    }

    async loadSurveyTileComponent() {
        const component = await loadRemoteModule({
            remoteEntry: 'http://localhost:3001/remoteEntry.js',
            remoteName: 'remote1',
            exposedModule: './SurveyTileComponent'
        })

        // this.viewCR.clear();
        // const { SurveyTileComponent } = await import('remote1/TileModule');
        // this.viewCR.createComponent(
        //     this.cfr.resolveComponentFactory(SurveyTileComponent)
        // );
    }

}
