import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  game_num: number;
  game_idx: number;
  players = [];

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.game_num = +params["game_num"];
      this.game_idx = this.game_num - 1;
    });
    this.getPlayers();
  }
  getPlayers() {
    this._http.getPlayers().subscribe(data => {
      if(data["message"] == "Success") {
        this.players = data["data"];
      }
    });
  }
  updatePlayer(id: string, status: string) {
    this._http.updatePlayer(id, {game_idx: this.game_idx, status: status}).subscribe(data => {
      if(data["message"] == "Success") {
        this.getPlayers();
      }
    });
  }

}
