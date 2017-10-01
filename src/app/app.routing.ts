import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { ProjectplaceComponent }   from './projectplace/projectplace.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
   path: 'about',
   component: AboutComponent
 },
 {
    path: 'projectplace',
    component: ProjectplaceComponent
  },
  {
     path: 'projects/:id',
     component: ProjectDetailComponent
   }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
