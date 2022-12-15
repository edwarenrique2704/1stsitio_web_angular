import { Component, OnInit } from '@angular/core';
import { ProductItemService } from 'src/app/services/product-item.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList:any;

  constructor(private api: ProductItemService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
    })
  }

}
