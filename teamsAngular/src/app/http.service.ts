import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayers() {
    return this._http.get("/api/players");
  }
  createPlayer(new_player) {
    return this._http.post("/api/players", new_player);
  }
  updatePlayer(id: string, player) {
    return this._http.patch(`/api/players/${id}`, player);
  }
  deletePlayer(id: string) {
    return this._http.delete(`/api/players/${id}`);
  }
}
