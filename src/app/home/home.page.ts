import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gameName = "";
  constructor(private apiService: ApiService) {}

  public loadGameName(){
    this.apiService.getGameInfo(this.gameName).subscribe(
      (data: any) => {
        console.log(data);
      }
    )
  };

}
