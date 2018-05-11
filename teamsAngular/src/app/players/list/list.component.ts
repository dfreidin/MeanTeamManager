import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getPlayers();
  }
  getPlayers() {
    this._httpService.getPlayers().subscribe(data => {
      if(data["message"] == "Success") {
        this.players = data["data"];
      }
    });
  }
  deletePlayer(id: string) {
    if(confirm("Are you sure you want to delete this player?")) {
      this._httpService.deletePlayer(id).subscribe(data => {
        if(data["message"] == "Success") {
          this.getPlayers();
        }
      });
    }
  }

}
