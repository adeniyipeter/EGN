import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  picture:any=[
    {background:'./assets/image/apostle3.jpg',
}
  ]
  site=[
    {
      whatsapp:'https://chat.whatsapp.com/Kt6hxVkPOfz5eaUtByot3d',
      facebook:'facebook.com/experiencinggodnetwork',
      telegram:'t.me/joinchat/FuoBcxeOMEWNhJ5T7g5SGw',
     
      instagram:'instagram.com/experiencinggodnetwork',
      youtube:'https://www.youtube.com/@experiencinggodnetwork'
    }
  ]

}
