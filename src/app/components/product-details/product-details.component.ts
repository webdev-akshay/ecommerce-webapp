import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
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
  searchProducts:string=''
  constructor(private productService:ProductService){}
  
  filterProducts(){
    const query=this.searchProducts.trim().toLowerCase();
    if(query){
      this.products=this.allProducts.filter(product=>
        product.category.toLowerCase().includes(query)
      );
    }else{
      this.products=[...this.allProducts]
    }
  }
  getAllProducts(){
   this.productService.getProducts('').subscribe((data:any)=>{
    this.allProducts=data;
    this.products=[...this.allProducts]
   })
  }
  ngOnInit(): void {
    this.getAllProducts()
  }
}
