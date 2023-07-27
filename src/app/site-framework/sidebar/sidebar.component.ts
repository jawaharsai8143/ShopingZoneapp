import { Component } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  categoylist:any
  constructor(private productService:ProductService){}
  ngOnInit(){
    this.productService.getCategory().subscribe(data=>{
      this.categoylist=data;
    })
  }

}
