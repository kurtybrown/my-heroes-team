import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PagesComponent } from './pages.component';
import { NgxPaginationModule} from 'ngx-pagination'



@NgModule({
  declarations: [
    DashboardComponent,
    MyTeamComponent,
    HeroDetailsComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    DashboardComponent,
    MyTeamComponent,
    HeroDetailsComponent,
  ]
})
export class PagesModule { }
