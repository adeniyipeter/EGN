import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  message=[
   {
    list:'Bible study',
    link:'./ministering-to-the-lord/Bible_study',

   },
   {
    list:'Ministering to the Lord',
    link:'./ministering-to-the-lord/years'
   },
   {
    list:'School of the spirit',
    link:'./ministering-to-the-lord/SOTS'
   },
   {
     list:'New wine of The Spirit',
     link:'./ministering-to-the-lord/NewWine'
   },

   {
    list:'paradigm shift',
    link:''
   }
  ]

}
