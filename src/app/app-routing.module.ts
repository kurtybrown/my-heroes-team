import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path: '', 
    component: PagesComponent,
    children:
    [
      {path:'dashboard', component: DashboardComponent},
      {path:'hero-details', component: HeroDetailsComponent},
      {path:'my-team', component: MyTeamComponent},
      {path:'', redirectTo: '/dashboard', pathMatch:'full'},
    ]
  },
  
  {path:'**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
