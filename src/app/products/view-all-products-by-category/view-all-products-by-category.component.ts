import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent {
  searchcatagory: any;
  productList:any;

  constructor(private activateRoute: ActivatedRoute, 
    private productService:ProductService) {}

      ngOnInit(){
        this.activateRoute.params.subscribe(data=>{
          this.searchcatagory=data['id']
          this.productService.searchcategoryProducts(this.searchcatagory).subscribe(catagorydata=>{
            this.productList=catagorydata })
         })
      }
    }
