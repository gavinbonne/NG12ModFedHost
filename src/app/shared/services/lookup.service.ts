import { Injectable } from "@angular/core";
import { RemoteComponentConfig } from "../entities/remote-component-config";

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<RemoteComponentConfig[]> {
        return Promise.resolve([
            {
                remoteName: 'remote1',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './AngularTileComponent',
                componentName: 'AngularTileComponent',
                displayName: 'AngularTile'
            },
            {
                remoteName: 'remote1',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './StaticAngularComponent',
                componentName: 'StaticAngularComponent',
                displayName: 'StaticAngular'
            }
        ] as RemoteComponentConfig[]);
    }
}
