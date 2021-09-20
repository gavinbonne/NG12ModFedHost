import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { StaticComponent } from './static/static.component';
import { WebComponentLoaderComponent } from './shared/components/web-component-loader.component';
import { startsWith } from './shared/utils/router.utils';
import { RegistryItem } from './shared/entities/web-component-registry';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'angular-route',
        loadChildren: () => import('remote1/ParentModule').then(m => m.ParentModule)
    },
    {
        matcher: startsWith('reactMfeSandbox'),
        component: WebComponentLoaderComponent,
        data: { importName: RegistryItem.REACT_MFE_SANDBOX, elementName: 'react-mfe-element' }},
    { path: 'static-components', component: StaticComponent, pathMatch: 'full' },
    { path: 'dynamic-components', component: DynamicComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
