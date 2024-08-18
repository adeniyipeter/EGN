import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServicesComponent } from '../services/services.component';
import { FooterComponent } from '../footer/footer.component';
import { TestimonyComponent } from '../testimony/testimony.component';
import { AboutUsComponent } from "../about-us/about-us.component";
import { ContactComponent } from '../contact/contact.component';
@Component({
  selector: 'app-homecomponet',
  standalone: true,
  imports: [CarouselComponent, NavbarComponent, ServicesComponent, FooterComponent, TestimonyComponent, AboutUsComponent,ContactComponent],
  templateUrl: './homecomponet.component.html',
  styleUrl: './homecomponet.component.css'
})
export class HomecomponetComponent {

}
