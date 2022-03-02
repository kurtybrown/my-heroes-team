import { Component, OnInit } from '@angular/core';
import { HeroCardInterface } from 'src/app/models/hero.interface';
import { HeroService } from 'src/app/services/hero.service';
import { TeamInterface} from 'src/app/models/team.interface'
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styles: [
  ]
})
export class MyTeamComponent implements OnInit {

  myHeroesTeam: HeroCardInterface[] = [];
  
  myTeam: TeamInterface = 
  {
    title: "Sin nombre",
    description: "Sin descripcción",
    heroMembers: this.myHeroesTeam
  };

  constructor(private service:HeroService, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
    this.getTeam();
    this.getHeroes();
  }

  getHeroes()
  {
    this.service.getMyTeam();
    this.myHeroesTeam = this.service.serviceHeroesTeam;
  }

  getTeam()
  {
    const parsedTeam = JSON.parse(String(localStorage.getItem('team')))
    if(parsedTeam == null)
    {
      return parsedTeam;
    }
    this.myTeam = parsedTeam;
    this.getHeroes();
  }

  createMyTeam()
  {
    const stringTeam = JSON.stringify(this.myTeam);
    localStorage.setItem('team', stringTeam);
  }

  deleteMyHero(id:number)
  {
    this.myHeroesTeam.splice(id, 1);
    this.service.serviceHeroesTeam = this.myHeroesTeam;
    this.service.deleteHero();
    this.success();
  }

  success() 
  {
    this.snackBar.open("Hero removed from your team!", "", {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

}
