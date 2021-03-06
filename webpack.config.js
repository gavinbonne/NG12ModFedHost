const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, 'tsconfig.json'),
    [/* mapped paths to share */]);

module.exports = {
    output: {
        uniqueName: "host",
        publicPath: "auto"
    },
    optimization: {
        runtimeChunk: false
    },
    resolve: {
        alias: {
            ...sharedMappings.getAliases(),
        }
    },
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                "remote1": "remote1@http://localhost:3001/remoteEntry.js",
                "reactMfeSandbox": "reactMfeSandbox@http://localhost:3002/remoteEntry.js"
            },
            shared: {
                "@angular/core": { singleton: true, strictVersion: true },
                "@angular/common": { singleton: true, strictVersion: true },
                "@angular/common/http": { singleton: true, strictVersion: true },
                "@angular/router": { singleton: true, strictVersion: true },
                "bootstrap": { singleton: true, strictVersion: true },
                "jquery": { singleton: true, strictVersion: true },
                ...sharedMappings.getDescriptors()
            }
        }),
        sharedMappings.getPlugin()
    ],
};
