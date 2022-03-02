import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroCardInterface } from 'src/app/models/hero.interface';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'
  ]
})
export class HeroDetailsComponent implements OnInit {

  myHero!:HeroCardInterface
  
  constructor(private api: HeroService, private router: Router) { 
    this.myHero =
    {
      id: 0,
      name: "",
      thumbnail : "",
      description: ""
    }
  }

  ngOnInit(): void {
    this.getDetailedHero();
    this.getComicsHero();
  }

  getDetailedHero()
  {
    this.api.getHeroById().subscribe(hero =>
      {
        this.myHero = hero;
      });
  }

  getComicsHero()
  {
    this.api.getComicById().subscribe(comics =>
      {
        this.myHero.comics = comics;
      })
    
  }
}
