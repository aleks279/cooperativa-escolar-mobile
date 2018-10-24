import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsService } from './products/products.service';
import { NewsService } from './news/news.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsPageModule'
  },
  {
    path: 'products',
    loadChildren: './products/products.module#ProductsPageModule'
  },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    ProductsService,
    NewsService
  ]
})
export class AppRoutingModule { }
