import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
  imports: [CommonModule],
  selector: "app-header",
  styleUrl: "./header.css",
  templateUrl: "./header.html",
})
export class Header {

  navItems: NavItem[] = [
    { icon: 'home', label: 'Home', isActive: true },
    { icon: 'users', label: 'My Network' },
    { icon: 'briefcase', label: 'Jobs' },
    { icon: 'message-square', label: 'Messaging' },
    { icon: 'bell', label: 'Notifications', badge: 1 },
  ];

}
