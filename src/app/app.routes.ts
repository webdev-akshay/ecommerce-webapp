import { Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';
export const routes: Routes = [
    {
        path:'user',
        component:LayoutComponent,
        loadChildren:()=>import('./user/user.module').then(m=>m.UserModule),
    },
    {path:'', redirectTo:'user/product-dtl', pathMatch:'full'
    }
];
