import { Routes } from '@angular/router';
import { Dashboard} from './components/dashboard/dashboard';
import { SendAgreement } from './components/send-agreement/send-agreement';
import { ViewAgreement} from './components/view-agreement/view-agreement';
import { Embed } from './pages/embed/embed';
import { Login } from './components/login/login';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: Login },
   { path: 'dashboard', component: Dashboard, canActivate: [AuthGuard] },
  { path: 'send', component: SendAgreement,canActivate: [AuthGuard]},
  { path: 'view/:id', component: ViewAgreement,canActivate: [AuthGuard]},
   { path: 'embed', component: Embed,canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }, // fallback route
];
