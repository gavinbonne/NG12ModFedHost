import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeComponent } from './home/home.component';
import { PluginProxyComponent } from './shared/components/plugin-proxy.component';
import { StaticComponent } from './static/static.component';
import { WebComponentLoaderComponent } from './shared/components/web-component-loader.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicComponent,
        PluginProxyComponent,
        HomeComponent,
        StaticComponent,
        WebComponentLoaderComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
