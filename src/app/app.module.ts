import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

//Modules
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

//Components
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyTeamComponent } from './pages/my-team/my-team.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HeaderComponent } from './shared/header/header.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MyTeamComponent,
    HeroDetailsComponent,
    HeaderComponent,
    NopagefoundComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
