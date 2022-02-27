import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HeroInterface } from '../models/hero.interface';
import { Observable } from 'rxjs';

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
}
