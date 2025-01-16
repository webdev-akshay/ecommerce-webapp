import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path:'', component:ProductDetailsComponent},
    {path:'product',component:HomeComponent},
    {path:'cart',component:CartComponent},
    {path:'user',component:UserComponent},
    {path:'login',component:LoginComponent}
];
