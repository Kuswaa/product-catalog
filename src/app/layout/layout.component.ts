import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterOutlet } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { AccountComponent } from '../account/account.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AboutComponent } from '../about/about.component';
import { ProductComponent } from '../product/product.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { MycartComponent } from '../mycart/mycart.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HomepageComponent, CategoriesComponent, AccountComponent, ProductComponent, ProductListComponent, MycartComponent , AboutComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
