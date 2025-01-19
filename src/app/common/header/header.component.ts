import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { SharedService } from '../../services/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent  implements OnInit{
  productCategoryList:any[]=[];
  searchProducts:string=''

  constructor(private productService:ProductService, private sharedService:SharedService){}
 
  onSearch(query:string){
    this.sharedService.updateSearchQuery(query)
 }
 
  ngOnInit(){
    let url='/categories'
    this.productService.getCategories(url).subscribe((data:any)=>{
      this.productCategoryList=data
    })
  }

}
