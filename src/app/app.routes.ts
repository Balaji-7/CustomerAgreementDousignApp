import { Routes } from '@angular/router';
import { Dashboard} from './components/dashboard/dashboard';
import { SendAgreement } from './components/send-agreement/send-agreement';
import { ViewAgreement} from './components/view-agreement/view-agreement';
import { Embed } from './pages/embed/embed';

export const routes: Routes = [
  { path: '', component: Dashboard},
  { path: 'send', component: SendAgreement},
  { path: 'view/:id', component: ViewAgreement},
   { path: 'embed', component: Embed },
  { path: '**', redirectTo: '' }, // fallback route
];
