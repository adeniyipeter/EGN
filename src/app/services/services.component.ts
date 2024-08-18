import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  mypicture =[
    {
    name:'school of the spirit',
    image:'./assets/image/SOTS.jpg',
    about:'we want you to join us on tuesday and thurday by 6pm for our School Of The spirit for an exploration of through teachings of THE SEED PRINCIPLE'
  },
  {
    name:'Mininstering to the lord',
    image:'./assets/image/mttl (1).jpg',
    about:''
  },
  {
    name:'Bible Study',
    image:'./assets/image/NSOTS.jpg',
    about:''
  }
  ]

}
