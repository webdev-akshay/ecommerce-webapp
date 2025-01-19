import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  allProducts:any[]=[];
  products:any[]=[];
  categories:any[]=[];
  constructor(private productService:ProductService, private sharedService:SharedService){}
  
 
  getAllProducts(){
   this.productService.getProducts('').subscribe((data:any)=>{
    this.allProducts=data;
    this.products=[...this.allProducts]
   })
  }
  ngOnInit(): void {
    this.getAllProducts();
    this.sharedService.searchQuery$.subscribe((searchQuery:string)=>{
      const lowercaseQuery=searchQuery.trim().toLowerCase()
      this.products=this.allProducts.filter(product=>
      product.category?.toLowerCase().includes(lowercaseQuery))
  })
}
}
