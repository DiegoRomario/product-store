import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product.interface';
import { CardComponent } from './card/card.component';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationDialogService } from '../../shared/services/confirmation-dialog.service';
import { filter } from 'rxjs';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  products: Product[] = [];

  confirmationDialogService = inject(ConfirmationDialogService);
  router = inject(Router)
  productService = inject(ProductsService);

  ngOnInit(): void {
    this.productService.getAll().subscribe((products: any[]) => {
      this.products = products;
    })
  }

  onEdit = (id: string) => this.router.navigate(['/edit-product', id]);

  onDelete = (product: Product) => {
    this.confirmationDialogService.openDialog().pipe(filter((answer) => answer))
      .subscribe(() => {
        this.productService.delete(product.id).subscribe(() => {
          this.productService.getAll().subscribe((products) => this.products = products);
        });
      })
  }
}
