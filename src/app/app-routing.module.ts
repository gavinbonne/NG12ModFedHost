import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './widget/widget.component';

const routes: Routes = [
    { path: '', redirectTo: 'tile', pathMatch: 'full' },
    { path: 'widget', component: WidgetComponent, pathMatch: 'full' },
    {
        path: 'tile',
        loadChildren: () => import('remote1/TileModule').then(m => m.TileModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
