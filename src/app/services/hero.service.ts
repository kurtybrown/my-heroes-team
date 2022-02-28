import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HeroCardInterface } from '../models/hero.interface';
import { CardsComponent } from '../components/cards/cards.component';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  
  public apiKey = "85fb6e804db608d18bf74e7115fadbf2";
  public hash = "c68f9631a42150736308e902fda00e01";
  public url = "https://gateway.marvel.com:443";

  constructor(private http: HttpClient) {

  }

  public getHeroes(): Observable<any>
  {
    let address = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<any>(address);
  }

  public addHero(hero:HeroCardInterface)
  {
    let auxHeroArr: HeroCardInterface[] = [];

    auxHeroArr.push(hero);

    let recoveredData = localStorage.getItem('hero');

    if(recoveredData == null)
    {
      localStorage.setItem('hero', JSON.stringify(auxHeroArr));
    } 
    else 
    {
      let data = JSON.parse(recoveredData);
      console.log(data);
      
      data.push(hero);
      localStorage.setItem('hero', JSON.stringify(data));
    }
  }

  getMyTeam()
  {
    let checkLocalStorage = localStorage.getItem('hero');
    let myHeroesTeam: CardsComponent[];
    if(checkLocalStorage == null)
    {
      return console.log("No heroes yet");
    }
    else
    {
      myHeroesTeam = JSON.parse(checkLocalStorage);
      console.log(myHeroesTeam);
      
      return myHeroesTeam;
    }
  }
}
