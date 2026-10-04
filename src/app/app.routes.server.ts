import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Client
  },
  {
    path: 'products/home',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/create',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'products/edit/:id',
    renderMode: RenderMode.Server
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];
