import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-2022',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './for-2022.component.html',
  styleUrl: './for-2022.component.css'
})
export class For2022Component {
  messages=[
    { title:'MTTL 2022', link:'https://drive.google.com/drive/folders/1MXQXI4kvl7n8iPZP6iNYB1bWH8ZufNiZ?usp=drive_link'}
  ]

}
