import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-message",
  styleUrl: "./message.css",
  templateUrl: "./message.html",
})
export class Message {

  // Mock data for the logged-in user
  user = {
    name: 'User Name',
    avatarUrl: 'https://unsplash.com', // Replace with your image path
    isOnline: true
  };

  // State to handle drawer open/close toggle
  isExpanded = false;

  toggleDrawer(): void {
    this.isExpanded = !this.isExpanded;
  }

  onMoreOptions(event: Event): void {
    event.stopPropagation(); // Prevents collapsing the bar when clicking actions
    console.log('More options clicked');
  }

  onNewMessage(event: Event): void {
    event.stopPropagation(); // Prevents collapsing the bar when clicking actions
    console.log('Compose new message clicked');
  }
}
