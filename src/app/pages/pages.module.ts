import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router"
import { FormsModule } from '@angular/forms';

import { NgxPaginationModule} from 'ngx-pagination'

//Angular-Material
import {MatSnackBarModule} from '@angular/material/snack-bar';


//Modules
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { PagesComponent } from './pages.component';



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
    ComponentsModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule,
    MatSnackBarModule
  ],
  exports: [
    DashboardComponent,
    MyTeamComponent,
    HeroDetailsComponent,
  ]
})
export class PagesModule { }
