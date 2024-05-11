import { Component, inject } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../shared/interfaces/product.interface';
import { ProductsService } from '../../shared/services/products.service';
import { BackToHomeComponent } from '../../shared/components/back-to-home/back-to-home.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormComponent, BackToHomeComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  productsService = inject(ProductsService);
  matSnackBar = inject(MatSnackBar)
  router = inject(Router)

  product: Product = inject(ActivatedRoute).snapshot.data['product'];

  onSubmit = (product: Product) => this.productsService.put(this.product.id, product).subscribe(() => {
    this.matSnackBar.open("Produto editado com sucesso!", "Ok");
    this.router.navigateByUrl('/');
  })
}
