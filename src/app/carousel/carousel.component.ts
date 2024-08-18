// carousel.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';  // Correct import path

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [  // Add animations array to the @Component decorator
    trigger('slideAnimation', [
      state('shown', style({ opacity: 1, transform: 'translateX(0)' })),
      state('hidden', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition('shown <=> hidden', animate('0.5s ease-in-out')),
    ]),
  ]
})
export class CarouselComponent {
  slides: any = [
    {
      title: 'image 1',
      image: './assets/image/apostle1.jpg',
    },
    {
      title: 'image 2',
      image: './assets/image/apostle2.jpg',
    },
    {
      title: 'image3',
      image: './assets/image/apostle3.jpg',
    }

  ];
  livestream='https://l.facebook.com/l.php?u=https%3A%2F%2Flinktr.ee%2Fexperiencinggodnetwork%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR3ol7Y2VSpcasI2uwPpVdD6IHwOr4SgTDek_JObEHcJA8GKuBXqvn9UDTs_aem_50gC5abGwXlFePQRN3SROg&h=AT0RDbcLmRPw8wEiIvQZ5kpyMiZYJtFz3Cu2RuGsjQX6U3krEA5hT89-H10wDznHx2aYJUdQs0qgwu10bBEwHWcz0-_Ajawe03t0foLubHX5D1JYkdWe-3DgwVC33L6SPylQcA';


}


