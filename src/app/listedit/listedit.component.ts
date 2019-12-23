import { Component, OnInit } from '@angular/core';
import{ pro} from 'src/app/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listedit',
  templateUrl: './listedit.component.html',
  styleUrls: ['./listedit.component.scss']
})
export class ListeditComponent implements OnInit {
  // product:pro[];
    

  constructor(private router:Router) { }

  ngOnInit() {
  }
  // editproduct()
  // {
  //   this.router.navigate(['/edit',this.product.id]);
    
  // }

}
