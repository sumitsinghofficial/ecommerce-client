import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-footer",
  styleUrl: "./footer.css",
  templateUrl: "./footer.html",
})
export class Footer {

  constructor() {}

  /**
   * Smoothly scrolls the viewport back to the top of the page
   */
  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
