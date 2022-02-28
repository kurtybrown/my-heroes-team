import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { HeroCardInterface } from 'src/app/models/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'
  ]
})

export class DashboardComponent implements OnInit {

  heroesList: HeroCardInterface[] = [];
  auxHeroesList: HeroCardInterface[];
  hero!: HeroCardInterface;
  searchText:string = "";

  p:number = 1;

  constructor(private api:HeroService) {
    this.heroesList = [];
    this.auxHeroesList = [];
   }

  ngOnInit(): void {
    this.listHeroes();
  }


  public listHeroes()
  {
    this.api.getHeroes().subscribe(response =>
      {
        for(let i=0; i<response.data.results.length; i++)
        {
          this.hero =
          {
            id: response.data.results[i].id,
            name: response.data.results[i].name,
            thumbnail: response.data.results[i].thumbnail.path + ".jpg"

          }
          this.heroesList.push(this.hero);
        }
       this.auxHeroesList = this.heroesList;
      })
  }

  addHero(id:number)
  {
    const selectedHero = this.heroesList.find(hero => hero.id === id);
    this.api.addHero(selectedHero!);
  }

  filter()
  {
    if (this.searchText=="")
    {
      this.heroesList = this.auxHeroesList;
    }
    else
    {
      this.heroesList = this.auxHeroesList.filter(newArray =>
        newArray.name.toLocaleLowerCase().includes(this.searchText.toLocaleLowerCase())
      )
    }
  }

}
