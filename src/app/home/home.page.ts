import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gameName = "";
  constructor(apiService: ApiService) {}

  public loadGameName(){
  }

}
