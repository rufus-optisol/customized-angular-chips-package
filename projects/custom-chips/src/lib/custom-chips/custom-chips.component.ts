import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-custom-chips',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './custom-chips.component.html',
  styleUrls: ['./custom-chips.component.scss']
})
export class CustomChipsComponent implements OnInit{

  @Input() public label = '';
  @Input() items: any[] = [];
  @Input() selectedItems: any[] = [];
  @Input() fieldName: string = 'name';

  @Output() public filterItem: EventEmitter<string> = new EventEmitter<string>();
  @Output() public deleteItem: EventEmitter<number | string> = new EventEmitter<number | string>();
  @Output() public updatedItems: EventEmitter<any[]> = new EventEmitter<any[]>();
  @Output() public removeItemFromList: EventEmitter<number | string> = new EventEmitter<number | string>();

  public filteredItems: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.filteredItems = this.items;
  }

  filterItems(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();

    if (searchTerm) {
      this.filteredItems = this.items.filter(item => item.name.toLowerCase().includes(searchTerm));
    } else {
      this.filteredItems = this.items; // Reset to all items if search term is empty
    }
  }

  toggleItemSelection(itemId: string) {
    const index = this.selectedItems.indexOf(itemId);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(itemId);
    }
    this.updatedItems.emit(this.selectedItems);
  }  

  setItem(event: any) {
    let newValues = event.value;
    let selectedSet = new Set(this.selectedItems);
    newValues.forEach((item:{}) => selectedSet.add(item));
    this.selectedItems.forEach(item => {
        if (!newValues.includes(item)) {
            selectedSet.delete(item);
        }
    });
    this.selectedItems = Array.from(selectedSet);
    this.updatedItems.emit(this.selectedItems);
  }

  removeItem(id: any) {
    this.selectedItems = this.selectedItems.filter((item: any) => item !== id);
    this.updatedItems.emit(this.selectedItems);
    this.removeItemFromList.emit(id);
  }

  public checkEntry(id: number) {
    if(!id) return;
    return this.selectedItems && this.selectedItems.includes(id)
  }

}
