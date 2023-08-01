import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {

  productId:any;
  productDetails:any;

  constructor(private activatedRoute:ActivatedRoute,
    private productService:ProductService){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(data=>{
      this.productId=data['id']
    }),
    this.productService.viewProduct(this.productId).subscribe(productDate=>{
      this.productDetails=productDate
    })
  }

}
