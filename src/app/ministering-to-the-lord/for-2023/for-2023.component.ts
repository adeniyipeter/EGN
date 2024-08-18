import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { title } from 'node:process';

@Component({
  selector: 'app-for-2023',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './for-2023.component.html',
  styleUrl: './for-2023.component.css'
})
export class For2023Component {
messages=[
  {title:'War of princes',
   link:'https://drive.google.com/drive/folders/1nNY30yiU_rfFsYscQneuULMNyZ4W_VfJ'

  },
  {
    title:'The Hidden Streams Of The Prophetic( MTTL, March 2023)',
    link:'https://drive.google.com/drive/folders/1JyAyQjpX1QkTum8x0rV-lt5bzfhyPwFy?usp=share_link'
   },
  {
   title:'Powers Of The Age To Come (MTTL APRIL 2023',
  link:'https://drive.google.com/drive/folders/16JKvYQ2RqZVu1qKnw0wGSDbPlzJaQxGf?usp=share_link'
 },
 {
  title:'Engraving of Glory',
  link:'https://drive.google.com/drive/folders/1FYwnBa6nIaUq3LIP8nglHUnlHmI800eo?usp=drive_link'
 },
 {
  title:'Speakings From The Throne(MTTL JUNE 2023',
  link:'https://drive.google.com/drive/folders/1jIdnWFmDt6fySlGxIarQ-B6_y0gbsoXG',
  },
  {
    title:'Royal Priesthood - The Priesthood Order of Melchizedek(MTTL AUGUST 2023)',
    link:'https://drive.google.com/drive/folders/1Mn5SRCPC0HyxnXAdLSQ8BSGizJDzPwAj?usp=sharing',
    },
 {
  title:'The civilization of Life(MTTL SEPTEMBER 2023)',
  link:'https://drive.google.com/drive/folders/1MhUdf8osNqC9eO4-leSH577-DKlxO00Z?usp=sharing'
 },
 {
  title:'Spiritual cities and civilization MTTL OCTOBER 2023',
  link:'https://drive.google.com/drive/folders/1aAVa9ZQAvqSqc4pGSzTMfQv3rOBvWpIB?usp=sharing'
 },
  {
    title:'Eternal Places (MTTL NOVEMBER 2023)',
    link:'https://drive.google.com/drive/folders/1I_4fcJ07zPdVCbBBeTCH5II2S5PmnTeD?usp=drive_link',
    },
  {
  title:'Trading Floors:Redemption,Restoration and Harvest (MTTL DECEMBER 2023)',
  link:'https://drive.google.com/drive/folders/18zgTBJ8N5Y4U4oDidP_QDojGu2wELK-y?usp=drive_link'
  }
]

}
