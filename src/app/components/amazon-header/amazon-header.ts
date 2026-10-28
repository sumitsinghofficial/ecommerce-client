import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  imports: [CommonModule, FormsModule],
  selector: "app-amazon-header",
  styleUrl: "./amazon-header.css",
  templateUrl: "./amazon-header.html",
})
export class AmazonHeader {

   // Bound visual values from your exact screenshot
  userName: string = 'Sumit';
  deliveryLocation: string = 'Pune 411057';
  cartCount: number = 40;
  
  searchQuery: string = '';
  
  categories: string[] = [
    'All Categories',
    'Deals',
    'Electronics',
    'Computers',
    'Books',
    'Fashion'
  ];

  onSearch() {
    if (this.searchQuery.trim()) {
      console.log('Searching for:', this.searchQuery);
      // Implement your application search logic here
    }
  }

  
}
