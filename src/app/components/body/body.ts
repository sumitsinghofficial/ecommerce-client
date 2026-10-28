import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

interface Banner {
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface Product {
  id: number;
  title: string;
  brand: string;
  price: number;
  oldPrice?: number;
  image: string;
  reviews: number;
  badge?: string;
}


@Component({
  imports: [CommonModule],
  selector: "app-body",
  styleUrl: "./body.css",
  templateUrl: "./body.html",
})
export class Body {

  currentBannerIndex = 0;
  private carouselTimer: any;

  // Mock Data Setup
  heroBanners: Banner[] = [
    {
      title: 'Upgrade your Workspace',
      subtitle: 'Get up to 40% off on premium mechanical keyboards and monitors.',
      image: 'https://unsplash.com',
      link: '/promo/workspace'
    },
    {
      title: 'Activewear Essentials',
      subtitle: 'Discover new technical fabrics designed to keep you moving.',
      image: 'https://unsplash.com',
      link: '/category/activewear'
    }
  ];

  categories: Category[] = [
    { id: 'electronics', name: 'Electronics', icon: '💻' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'home', name: 'Home & Living', icon: '🏠' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'fitness', name: 'Fitness', icon: '🏋️‍♂️' }
  ];

  featuredProducts: Product[] = [
    {
      id: 101,
      title: 'Wireless Noise-Cancelling Headphones',
      brand: 'AudioMax',
      price: 129.99,
      oldPrice: 179.99,
      image: 'https://unsplash.com',
      reviews: 1240,
      badge: 'Sale'
    },
    {
      id: 102,
      title: 'Minimalist Stainless Steel Smartwatch',
      brand: 'ChronoOS',
      price: 199.00,
      image: 'https://unsplash.com',
      reviews: 842,
      badge: 'Hot'
    },
    {
      id: 103,
      title: 'Ergonomic Wireless Gaming Mouse',
      brand: 'SwiftClick',
      price: 45.50,
      oldPrice: 59.99,
      image: 'https://unsplash.com',
      reviews: 312
    },
    {
      id: 104,
      title: 'Ultra-Compact Mechanical Keyboard (RGB)',
      brand: 'TypeForge',
      price: 89.95,
      image: 'https://unsplash.com',
      reviews: 519
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.startBannerRotation();
  }

  ngOnDestroy(): void {
    if (this.carouselTimer) {
      clearInterval(this.carouselTimer);
    }
  }

  // Carousel Mechanics
  startBannerRotation(): void {
    this.carouselTimer = setInterval(() => {
      this.nextBanner();
    }, 6000); // changes banner every 6 seconds
  }

  nextBanner(): void {
    this.currentBannerIndex = (this.currentBannerIndex + 1) % this.heroBanners.length;
  }

  prevBanner(): void {
    this.currentBannerIndex = this.currentBannerIndex === 0 
      ? this.heroBanners.length - 1 
      : this.currentBannerIndex - 1;
  }

  // Action / Output Handlers
  onCtaClick(link: string): void {
    console.log(`Navigating to banner target: ${link}`);
  }

  navigateToCategory(id: string): void {
    console.log(`Navigating to category stream: ${id}`);
  }

  toggleWishlist(id: number, event: Event): void {
    event.stopPropagation(); // Stops routing behavior from click
    console.log(`Toggling item ID ${id} inside client wishlist state`);
  }

  addToCart(product: Product, event: Event): void {
    event.stopPropagation();
    console.log(`Dispatched action: Add ${product.title} to primary checkout basket`);
  }
}
