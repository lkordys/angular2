import {Routes, RouterModule} from '@angular/router';
import {ReviewComponent} from "./review/review.component";
import {ComponentsComponent} from "./components/components.component";

const routes: Routes = [
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'components',
    component: ComponentsComponent,
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
