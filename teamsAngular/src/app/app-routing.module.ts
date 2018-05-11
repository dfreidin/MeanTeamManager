import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { StatusComponent } from './status/status.component';
import { ListComponent } from './players/list/list.component';
import { AddComponent } from './players/add/add.component';
import { GameComponent } from './status/game/game.component';

const routes: Routes = [
  {path: "players", component: PlayersComponent, children: [
    {path: "list", component: ListComponent},
    {path: "add", component: AddComponent}
  ]},
  {path: "status", component: StatusComponent, children: [
    {path: "game/:game_num", component: GameComponent}
  ]},
  {path: "", pathMatch: "full", redirectTo: "/players/list"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
