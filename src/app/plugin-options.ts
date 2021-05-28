import { LoadRemoteModuleOptions } from "@angular-architects/module-federation-runtime";

export type PluginOptions = LoadRemoteModuleOptions & {
    displayName: string;
    componentName: string;
};
