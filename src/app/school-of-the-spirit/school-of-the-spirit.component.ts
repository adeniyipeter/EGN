import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { title } from 'process';

@Component({
  selector: 'app-school-of-the-spirit',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './school-of-the-spirit.component.html',
  styleUrl: './school-of-the-spirit.component.css'
})
export class SCHOOLOFTHESPIRITComponent {
  messages=[
    {
      title:' Feeding On The Love Of God And Overcoming The Accusation Of The…',
      link:'https://drive.google.com/file/d/1v9Zy2o8eSL818uE9SaiSlOvGjZmx6xHo/view?usp=sharing'
    },
     {
      title:' Rejoicing & Having Confidence In Christ -Miracle Ayo –',
      link:'https://drive.google.com/file/d/1SraGCj5ftX310nkhLhpFZgRBdt0T439T/view?usp=sharing'
    },
    {
      title:' Rejoicing & Having Confidence In Christ - Miracle Ayo ',
      link:'https://drive.google.com/file/d/1SraGCj5ftX310nkhLhpFZgRBdt0T439T/view?usp=sharing'
    },
    {
      title:'The Principle Of Remembrance & The Joy Of The Lord -Miracle Ayo',
      link:'https://drive.google.com/file/d/15N376GKaprIvG3NYrWxmsWqmV3avHNCH/view?usp=sharing'
    },
    {
      title:' The Strongholds Of God -Miracle Ayo ',
      link:'https://drive.google.com/file/d/1ywRfm7xkJYiZgtBPoA2WFFZfVwWI5Vm0/view?usp=sharing'
    }

  ]

}
