import { Injectable } from "@angular/core";
import { PluginOptions } from "./plugin-options";

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<PluginOptions[]> {
        return Promise.resolve([
            {
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                remoteName: 'remote1',
                exposedModule: './SurveyTileComponent',
                displayName: 'SurveyTile',
                componentName: 'SurveyTileComponent'
            }
        ] as PluginOptions[]);
    }
}
