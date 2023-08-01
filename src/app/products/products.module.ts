import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    ProductsComponent,
    CreateProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ViewAllProductsComponent,
    ViewAllProductsByCategoryComponent,
    ViewAllProductsByDateComponent,
    ViewProductComponent,
    ServicesComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
