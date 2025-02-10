import { Route } from '@angular/router';

export const routes: Route[] = [
  {path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
   loadChildren: () => import('./core/auth/auth.routes').then((m) => m.authRoutes),
  },
];
