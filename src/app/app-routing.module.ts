import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TilesComponent } from './tiles/tiles.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'billing',
        loadChildren: () => import('remote1/BillingModule').then(m => m.BillingModule)
    },
    { path: 'tiles', component: TilesComponent, pathMatch: 'full' },
    { path: 'widgets', component: WidgetsComponent, pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
