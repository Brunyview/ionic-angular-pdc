import { Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./tab2.page').then((m) => m.Tab2Page),
  },
];
