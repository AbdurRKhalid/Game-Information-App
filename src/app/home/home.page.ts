import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gameName = "";
  respone: any;
  isLoading = false;
  constructor(private apiService: ApiService) {}

  public loadGameName(){
    this.isLoading = true;
    this.apiService.getGameInfo(this.gameName).subscribe(
      (data: any) => {
        this.respone = data.results[0];
      }
    )
    this.isLoading = false;
  };

}
