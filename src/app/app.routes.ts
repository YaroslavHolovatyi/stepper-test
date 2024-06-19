import { Routes } from '@angular/router';
import { RoleComponent } from './role/role.component';
import { EmailComponent } from './email/email.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
    { path: 'role', component: RoleComponent },
    { path: 'email', component: EmailComponent },
    { path: 'setting', component: SettingsComponent },
    { path: '', redirectTo: '/role', pathMatch: 'full' }
];
