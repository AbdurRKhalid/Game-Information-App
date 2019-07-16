import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://api.rawg.io/api/games?&search="
  constructor(private http: HttpClient) {
   }

   getGameInfo(GameName: String){
     return this.http.get(this.baseUrl+GameName);
   }
}
