import { Component, EventEmitter, Output, computed, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  product = input.required<Product>();

  productTitle = computed(() => this.product().title)

  onEdit = () => this.edit.emit();
  onDelete = () => this.delete.emit();
}
