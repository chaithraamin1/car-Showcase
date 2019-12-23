import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { ListeditComponent } from './listedit/listedit.component';
import { ListdeleteComponent } from './listdelete/listdelete.component';
import { ListviewComponent } from './listview/listview.component';
import { FormsModule } from '@angular/forms';
import { ListService } from 'src/app/list.service';



@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    ListeditComponent,
    ListdeleteComponent,
    ListviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ListService],
  bootstrap: [AppComponent]

})
export class AppModule { }
