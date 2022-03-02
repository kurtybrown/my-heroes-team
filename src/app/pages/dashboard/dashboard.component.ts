import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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

  constructor(private heroService:HeroService, private router:Router, private snackBar:MatSnackBar) {
    this.heroesList = [];
    this.auxHeroesList = [];
   }

  ngOnInit(): void {
    this.listHeroes();
  }


  public listHeroes()
  {
    this.heroService.getHeroes().subscribe(response =>
      {
        for(let i=0; i<response.data.results.length; i++)
        {
          this.hero =
          {
            id: response.data.results[i].id,
            name: response.data.results[i].name,
            thumbnail: response.data.results[i].thumbnail.path + ".jpg",
          }
          
          this.heroesList.push(this.hero);
        }
       this.auxHeroesList = this.heroesList;
      })
  }

  addHero(hero: HeroCardInterface)
  {
    let heroList: HeroCardInterface[] = JSON.parse(String(localStorage.getItem('heroes')));

    if(heroList == null)
    {
      heroList = [];
    }
    const idList: number[] = heroList.map((hero: HeroCardInterface) =>
    {
      return hero.id;
    })

    if(heroList.length >= 6)
    {
      this.errorFull();
    }
    else if(idList.includes(hero.id))
    {
      this.errorAlready();
    }
    else
    {
      this.heroService.addHero(hero);
      this.success();
    }
  }

  heroDetailed(id:number)
  {
    this.heroService.heroId = id;
    this.router.navigate(['hero-details']);
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

  success() 
  {
    this.snackBar.open("Hero added to your team!", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  errorFull() 
  {
    this.snackBar.open("Your team is already full!", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  errorAlready()
  {
    this.snackBar.open("You already have this hero!", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
