import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormBuilderComponent } from './pages/form-builder/form-builder.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { AuthGuard } from './guard/auth.guard';

export const routes: Routes = [
    {path:'signup', component:SignupComponent },
    {path:'login', component:LoginComponent},
    {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard] },
    { path: 'build/:formId', component: FormBuilderComponent, canActivate: [AuthGuard] },
    { path: 'preview/:formId',component: PreviewComponent},
    {path:'',redirectTo:'signup',pathMatch:'full'},
    {
      path: 'build/:formId',
      loadComponent: () => import('./pages/form-builder/form-builder.component').then(m => m.FormBuilderComponent)
    },
    

    {  path: 'preview/:formId',
        loadComponent: () => import('./pages/preview/preview.component').then(m => m.PreviewComponent)
      }
      
];
