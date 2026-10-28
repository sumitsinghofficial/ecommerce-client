import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Message } from './components/message/message';
import { AmazonHeader } from './components/amazon-header/amazon-header';
import { Footer } from './components/footer/footer';
import { Body } from './components/body/body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AmazonHeader, Footer,Body,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ecommerce-client');
}
