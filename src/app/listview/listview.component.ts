import { Component, OnInit, Input } from '@angular/core';
import{ pro} from 'src/app/model';
import { ListService } from 'src/app/list.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  @Input() product:pro;
  
  
  constructor(private Listservice:ListService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id=+this.route.snapshot.paramMap.get('id');
    this.product=this.Listservice.getProduct(id);
    
    }
   editproduct()
   {
     this.router.navigate(['/edit',this.product.id]);
  
     
   }


  deletelist()
  {
    this. Listservice.deletelist(this.product.id);
    this.router.navigate(['/list']);
  }
  

}
