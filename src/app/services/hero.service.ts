import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HeroCardInterface } from '../models/hero.interface';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  
  public apiKey = "85fb6e804db608d18bf74e7115fadbf2";
  public hash = "c68f9631a42150736308e902fda00e01";
  public url = "https://gateway.marvel.com:443";

  public heroId: number = 0;
  public serviceHeroesTeam: HeroCardInterface[] = [];

  constructor(private http: HttpClient) {

  }

  public getHeroes(): Observable<any>
  {
    let address = `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${this.apiKey}&hash=${this.hash}`;
    return this.http.get<any>(address);
  }

  public getHeroById(): Observable<any>
  {
    let address = `https://gateway.marvel.com:443/v1/public/characters/${this.heroId}?ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(address).pipe(map(response =>{
      const heroDetail = {
        id: response.data.results[0].id,
        name: response.data.results[0].name,
        thumbnail: response.data.results[0].thumbnail.path + ".jpg",
        description: response.data.results[0].description
      }
      return heroDetail;  
    }));
  }

  public getComicById(): Observable<any>
  {
    let address = `https://gateway.marvel.com:443/v1/public/characters/${this.heroId}/comics?ts=1&apikey=${this.apiKey}&hash=${this.hash}`
    return this.http.get<any>(address).pipe(map(response =>
      {
        console.log(response);

        let comicList: string[] = [];
        for(let i=0; i<response.data.results.length; i++)
        {
          comicList.push(response.data.results[i].thumbnail.path + ".jpg")
        }
        return comicList;
      }));
  }

  public addHero(hero:HeroCardInterface)
  {
    let heroList: HeroCardInterface[] = JSON.parse(String(localStorage.getItem('heroes')));

    heroList.push(hero);
    const heroListString = JSON.stringify(heroList);
    localStorage.setItem('heroes', heroListString);
  }

  getMyTeam()
  {
    let checkLocalStorage = localStorage.getItem('heroes');

    if(checkLocalStorage == null)
    {
      return console.log("No heroes yet");
    }
    else
    {
      this.serviceHeroesTeam = JSON.parse(checkLocalStorage);
    }
  }

  deleteHero()
  {
    localStorage.setItem('heroes', JSON.stringify(this.serviceHeroesTeam));
  }
}
