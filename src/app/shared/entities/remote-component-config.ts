import { LoadRemoteModuleOptions } from "@angular-architects/module-federation-runtime";

export type RemoteComponentConfig = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
};
