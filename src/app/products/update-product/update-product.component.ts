import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent {
  productId :any;
  productDetails: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.productId = data['id'];
      alert(this.productId)
      this.productService
        .viewProduct(this.productId)
        .subscribe((productData) => {
          this.productDetails = productData;
        });
    });
  }
   updateProduct(form: any){
   
    const updateProduct = {
      name: form.value.name,
      categoryId: form.value.categoryId,
      description:form.value.description,
      rating:form.value.rating,
      color:form.value.color,
      isAvailable:form.value.isAvailable,
    };

    this.productService.updateProduct(this.productId,updateProduct).subscribe(data=>{
      console.log(data)
    })
  }
}
