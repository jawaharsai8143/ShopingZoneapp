import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent {
  allproducts:any;
  constructor(private allproduct:ProductService){}

  ngOnInit(){
    this.allproduct.getAllProducts().subscribe(data=>{
      this.allproducts=data
    })
  }

}
