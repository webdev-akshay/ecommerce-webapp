import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { CartComponent } from '../components/cart/cart.component';
import { LoginComponent } from '../components/login/login.component';

const routes: Routes = [
  {path:'product-dtl',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
