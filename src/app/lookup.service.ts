import { Injectable } from "@angular/core";
import { RemoteComponentConfig } from "./remote-component-config";

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<RemoteComponentConfig[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'remote1',
                exposedModule: './SurveyTileComponent',
                displayName: 'SurveyTile',
                componentName: 'SurveyTileComponent'
            },
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'remote1',
                exposedModule: './HealthTrackerComponent',
                displayName: 'HealthTracker',
                componentName: 'HealthTrackerComponent'
            }
        ] as RemoteComponentConfig[]);
    }
}
