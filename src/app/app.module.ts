import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { HomeComponent } from './home/home.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { PluginProxyComponent } from './shared/components/plugin-proxy.component';
import { StaticComponent } from './static/static.component';
import { WebComponentLoaderComponent } from './shared/components/web-component-loader.component';

@NgModule({
    declarations: [
        AppComponent,
        DynamicComponent,
        PluginProxyComponent,
        HomeComponent,
        InputOutputComponent,
        StaticComponent,
        WebComponentLoaderComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
