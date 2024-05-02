import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  router = inject(Router)
  productService = inject(ProductsService);

  ngOnInit(): void {
    this.productService.getAll().subscribe((products: any[]) => {
      this.products = products;
    })
  }

  onEdit = () => this.router.navigateByUrl('/edit-product');
}
