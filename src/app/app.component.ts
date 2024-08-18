import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { For2023Component } from './ministering-to-the-lord/for-2023/for-2023.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NavbarComponent ,
    CarouselComponent,ServicesComponent,FooterComponent, TestimonyComponent ,For2023Component, PageNotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
url(arg0: string) {
throw new Error('Method not implemented.');
}
  title = 'my_documetation_work';
  myfirstphoto='src/assets/image/apostle1.jpg'
  currentSlide: number = 1;

  goToSlide(slideIndex: number): void {
    this.currentSlide = slideIndex;
  }

  isHomeRoute: boolean | undefined;



}

// TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com
// Initialization for ES Users
