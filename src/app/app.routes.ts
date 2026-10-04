import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'products/home', pathMatch: 'full' },
  { path: 'products/home', loadComponent: () => import('./products/home/home').then(c => c.Home) },
  { path: 'products/create', loadComponent: () => import('./products/create/create').then(c => c.Create) },
  { path: 'products/edit/:id', loadComponent: () => import('./products/edit/edit').then(c => c.Edit) },
];
