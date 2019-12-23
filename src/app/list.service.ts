import { Injectable } from '@angular/core';
import{ pro} from 'src/app/model';



@Injectable({
  providedIn: 'root'
})
export class ListService {
  private listProducts:pro[]=[
    {
      id:1,
      name:'Maruti Arena',
      image:'assets/images/a.jpeg',
      model:'Ertiga',
      price:300000,
      Desc:'Maruti Suzuki India Limited is the largest carmaker in India with a market share of over 53 per cent. The car maker sells its cars through two channels namely the Nexa and the Arena.',
      brandid:1
  
  
    },
    {
      id:2,
      name:'Honda City',
      image:'assets/images/b.jpeg',
      model:'city',
      price:900000,
      Desc:'Honda is one of the most popular Japanese car companies in India. Honda cars in India are renowned for their well engineered cars which are quite fuel-efficient and have low maintenance costs.',
      brandid:2
  
  
    },
    {
      id:3,
      name:'Ford Eco Sport',
      image:'assets/images/b.jpeg',
      model:'Eco Sport',
      price:800000,
      Desc:'Maruti Suzuki India Limited is the largest carmaker in India with a market share of over 53 per cent. The car maker sells its cars through two channels namely the Nexa and the Arena.',
      brandid:3
  
  
    },
    {
      id:4,
      name:'Hyundai Creta',
      image:'assets/images/h.jpg',
      model:'Eco Sport',
      price:500000,
      Desc:'Hyundai offers 12 car models in India, including 4 new car models in SUV/MUV category, 2 in Sedan category, 5 in Hatchback category',
      brandid:4
  
  
    },
    {
      id:5,
      name:'BMW M2',
      image:'assets/images/bmw.jpg',
      model:'M2',
      price:9800000,
      Desc:'Maruti Suzuki India Limited is the largest carmaker in India with a market share of over 53 per cent. The car maker sells its cars through two channels namely the Nexa and the Arena.',
      brandid:5
  
  
    },
    {
      id:6,
      name:'Tata Bye Bolt',
      image:'assets/images/t.jpg',
      model:'Bye Bolt',
      price:9800000,
      Desc:'Maruti Suzuki India Limited is the largest carmaker in India with a market share of over 53 per cent. The car maker sells its cars through two channels namely the Nexa and the Arena.',
      brandid:6
  
  
    },
  ];
  getProducts(): pro[]{
    return this.listProducts;
  }

 
  constructor( ) { }
  

 
 getProduct(id: number): pro{
  return this.listProducts.find(e=>e.id===id);
  }
  
  save(product: pro){
  if(product.id=== null){
  const maxId=this.listProducts.reduce(function(e1,e2){
  return (e1.id > e2.id)? e1:e2;
  }).id;
  product.id=maxId + 1;
  this.listProducts.push(product);
  }else{
  const foundIndex=this.listProducts.findIndex(e => e.id === product.id);
  this.listProducts[foundIndex] = product;
  }
  }
  
  deletelist(id:number){
  const i=this.listProducts.findIndex(e=>e.id===id);
  if(i !== -1){
  this.listProducts.splice(i,1);
  }
  }
}