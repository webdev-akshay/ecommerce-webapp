import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  products:any[]=[];
  constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>{
      this.products=data;
      console.log(this.products, "Products data")
    })
  }
}
