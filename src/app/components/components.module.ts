import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsComponent } from './cards/cards.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



@NgModule({
  declarations: [
    CardsComponent,
    SearchbarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsComponent,
    SearchbarComponent
  ]
})
export class ComponentsModule { }
