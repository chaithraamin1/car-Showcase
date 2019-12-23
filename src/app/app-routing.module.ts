import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import {ListviewComponent} from './listview/listview.component';
import {ListeditComponent} from './listedit/listedit.component';


const routes: Routes = [
  { path:'list',component:ListComponent},
  {path:'edit/:id',component:AddComponent},
  {path:'view/:id',component:ListviewComponent},
    {path:'edit',component:ListeditComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
