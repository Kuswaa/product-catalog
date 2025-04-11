import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AccountComponent } from './account/account.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MycartComponent } from './mycart/mycart.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [

    { path: '' , component: HomepageComponent } ,
    { path: 'home' , component: HomepageComponent } ,
    { path: 'account' , component: AccountComponent } ,
    { path: 'categories' , component: CategoriesComponent } ,
    { path: 'categories/productlist' , component: ProductListComponent } ,
    { path: 'home/productlist' , component: ProductListComponent } ,
    { path: 'productlist' , component: ProductListComponent } ,
    { path: 'categories/productlist/product' , component: ProductComponent } ,
    { path: 'cart' , component: MycartComponent } ,
    { path: 'about' , component: AboutComponent } 
];
