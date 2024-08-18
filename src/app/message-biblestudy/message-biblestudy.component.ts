import { Component } from '@angular/core';
import { link } from 'fs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-message-biblestudy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-biblestudy.component.html',
  styleUrl: './message-biblestudy.component.css'
})
export class MessageBiblestudyComponent {
messagelist=[
  {
    name:'Being Filled With the Spirit _ Apostle Miracle Ayo _ May 2, 2022',
    link:'./assets/audio/Bible Study _ Monday Messages\Being Filled With the Spirit _ Apostle Miracle Ayo _ May 2, 2022.mp3',
  },
  {
    name:'Building Christ Consciousness',
    link:'./assets/audio/Bible Study _ Monday Messages\Building Christ Consciousness _ Apostle Miracle Ayo _ May 9, 2022.mp3'

  },
  {
    name:'Configuring our Sense of Knowing',
    link:'./assets/audio/Bible Study _ Monday Messages\Configuring our Sense of Knowing  _ Apostle Miracle Ayo _ August 15, 2022.mp3'
  },
  {
    name:"Daniel's 8th Vision and the Last Days",
    link:"./assets/audio/Bible Study _ Monday Messages\Daniel's 8th Vision and the Last Days _ Apostle Miracle Ayo _ October 10, 2022..mp3'"
  },
  {
    name:"Deliverance From Idolatry",
    link:"./assets/audio/Bible Study _ Monday Messages\Deliverance From Idolatry _ Apostle Miracle Ayo_ July 4, 2022.mp3"
  },
  {
    name:'Governing Principles, Mountains and Seedlines',
    link:'./assets/audio/Bible Study _ Monday Messages\Governing Principles, Mountains and Seedlines _ Apostle Miracle Ayo _ November 7, 2022.mp3'
  },
  {
    name:'Insights Regarding Spiritual Warfare'
,
    link:'./assets/audio/Bible Study _ Monday Messages\Insights Regarding Spiritual Warfare _ Apostle Miracle Ayo _ March 21, 2022.mp3'
  },
  {
    name:"Jesus Christ; Humanity's Eyesight to God ",
    link:"./assets/audio/Bible Study _ Monday Messages\Jesus Christ; Humanity's Eyesight to God _ Apostle Miracle Ayo _ June 13, 2022.mp3"
  },
  {
    name:'Meditating on Truth',
    link:'./assets/audio/Bible Study _ Monday Messages\Meditating on Truth _ Apostle Miracle Ayo _ June 6, 2022.mp3'
  },
  {
    name:' Establishing Your Heart In Grace- Miracle Ayo ',
    link:'https://drive.google.com/file/d/1xYVPNumK5QMX31Jg7p0cSXlRXB1m9hCd/view?usp=sharing'
  },
  {
    name:'The New Creation Man - The Product Of God -Miracle Ayo ',
    link:'https://drive.google.com/file/d/1UOHau8XAHtDzeDsS4e9vcP2HmqKztZIY/view?usp=sharing'
  },
  {
    name:' The Power Of God And Understanding The Gospel Of Christ - Miracle Ayo',
    link:'https://drive.google.com/file/d/1RRn3rMnk2aAFKO5Uc07IMuw99_9WvIVV/view?usp=sharing'
  },
  {
    name:'',
    link:''
  }
]
}
