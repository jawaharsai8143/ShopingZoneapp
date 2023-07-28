import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  newProduct:any
  constructor(private productSerivce: ProductService) {}
  ngOnInit() {}

  addNewProduct(form:{value:any}){
    let newProduct = {
           name: form.value.productName,
           categoryId: form.value.catagoryId,
           description:form.value.description,
           rating:form.value.rating,
           color:form.value.color,
           isAvailable:form.value.isAvailable
       };
        console.log(newProduct);
        this.productSerivce.createProduct(newProduct).subscribe((data:any)=>{
          console.log(data)
        })
      
  }
}
