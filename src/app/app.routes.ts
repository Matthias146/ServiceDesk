import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { LoginPage } from './features/auth/login/login-page';
import { Tickets } from './features/tickets/tickets';
import { Customers } from './features/customers/customers';
import { Users } from './features/users/users';
import { AuditLog } from './features/audit-log/audit-log';
import { Settings } from './features/settings/settings';
import { AppShell } from './core/layout/app-shell/app-shell';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  {
    path: '',
    component: AppShell,
    children: [
      { path: 'dashboard', component: Dashboard },

      { path: 'tickets', component: Tickets },
      { path: 'customers', component: Customers },
      { path: 'users', component: Users },
      { path: 'audit-log', component: AuditLog },
      { path: 'settings', component: Settings },
    ],
  },
  { path: '**', redirectTo: 'dashboard' },
];
