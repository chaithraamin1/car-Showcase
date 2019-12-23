import { Component, OnInit } from '@angular/core';
import {ListService} from 'src/app/list.service';
import { Router, ActivatedRoute } from '@angular/router';
import{ pro} from 'src/app/model';




@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  product:pro;
  // image:string="/assets/images/*";
   fileupload:File=null;
  
 

  constructor(private Listservice:ListService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramap=>{
    const id=+ paramap.get('id');
    this.getemp(id);
   
    });
  }
  private getemp(id:number)
  {
  if(id==0){
  this.product={
    id:null,
    name:null,
    image:null,
    model:null,
    price:null,
    Desc:null,
    brandid:null
    };
}
  

else{
  this.product=this.Listservice.getProduct(id);
}
  }
  saveProduct():void{
    this.Listservice.save(this.product);
    this.router.navigate(['list']);
  }
 
  
  handlefileinput(file:FileList)
  {
   this.fileupload=file.item(0);
   var reader=new FileReader();
   reader.onload=(event:any)=>{
     this.fileupload=event.target.result;
   }
   reader.readAsDataURL(this.fileupload);
  }
}
