import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gameName = "";
  name = "";
  releaseDate = "";
  rating = "";
  metacritic = "";
  isLoading = false;
  constructor(private apiService: ApiService) {}

  public loadGameName(){
    this.isLoading = true;
    this.apiService.getGameInfo(this.gameName).subscribe(
      (data: any) => {
        this.name = data.results[0].name;
        this.releaseDate = data.results[0].released;
        this.rating = data.results[0].rating;
        this.metacritic = data.results[0].metacritic;
        console.log(data.results[0]);
      }
    )
    this.isLoading = false;
  };

}
