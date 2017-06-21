import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  Foo1Component,
  Foo2Component,
  Foo3Component,
  Bar1Component,
} from './functions';

const orgRoutes = [
  {
    path: 'foo1',
    component: Foo1Component,
  },
  {
    path: 'foo2',
    component: Foo2Component,
  },
  {
    path: 'foo3',
    component: Foo3Component,
  },
  {
    path: 'bar1',
    component: Bar1Component,
  },
];

export const routes: Routes = [];

for (let i = 0; i < orgRoutes.length; i++) {
  const r = orgRoutes[i];
  routes.push({
    path: r.path,
    component: r.component,
  });
}
