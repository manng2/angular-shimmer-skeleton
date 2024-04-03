import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'line',
    loadComponent: () => import('./components/line-showcase/line-showcase.component').then(m => m.LineShowcaseComponent)
  },
  {
    path: 'circle',
    loadComponent: () => import('./components/circle-showcase/circle-showcase.component').then(m => m.CircleShowcaseComponent)
  },
  {
    path: 'table',
    loadComponent: () => import('./components/table-showcase/table-showcase.component').then(m => m.TableShowcaseComponent)
  },
  {
    path: 'conversation',
    loadComponent: () => import('./components/conversation-showcase/conversation-showcase.component').then(m => m.ConversationShowcaseComponent)
  },
  {
    path: 'product',
    loadComponent: () => import('./components/product-showcase/product-showcase.component').then(m => m.ProductShowcaseComponent)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
