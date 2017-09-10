import {Routes, RouterModule} from '@angular/router';
import {ReviewComponent} from "./review/review.component";
import {ComponentsComponent} from "./components/components.component";
import {BenefitsComponent} from "./benefits/benefits.component";
import {WelcomeComponent} from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: 'welcome',
    component: WelcomeComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'components',
    component: ComponentsComponent,
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
