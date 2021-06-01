import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PluginProxyComponent } from './plugin-proxy.component';
import { TilesComponent } from './tiles/tiles.component';
import { HomeComponent } from './home/home.component';
import { WidgetsComponent } from './widgets/widgets.component';

@NgModule({
    declarations: [
        AppComponent,
        PluginProxyComponent,
        TilesComponent,
        HomeComponent,
        WidgetsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
