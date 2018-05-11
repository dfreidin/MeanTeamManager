import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  new_player: any;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.new_player = {name: "", position: ""};
  }
  createPlayer() {
    this._httpService.createPlayer(this.new_player).subscribe(data => {
      if(data["message"] == "Success") {
        this._router.navigate(["/players/list"]);
      }
    });
  }

}
