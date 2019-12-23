import { Component, OnInit } from '@angular/core';
import { pro } from 'src/app/model';
import { ListService } from 'src/app/list.service';
import { Router } from '@angular/router';
// import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  product: pro[];

  constructor(private Listservice: ListService, private router: Router) { }

  ngOnInit() {
    this.product = this.Listservice.getProducts();

  }
  onClick(proid: number) {
    console.log("id",proid);
    
    this.router.navigate(['view', proid]);
  }


}
