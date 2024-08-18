import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-years',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './years.component.html',
  styleUrl: './years.component.css'
})
export class YearsComponent {
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  openMenu(){
     this.menuValue =! this.menuValue ;
     this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
   }
    closeMenu() {
     this.menuValue = false;
     this.menu_icon = 'bi bi-list';
   }
  year=[
    {name:'2021',
    link:'./ministering-to-the-lord/MTTL-2021'
    },
    {
      name:'2022',
      link:'./ministering-to-the-lord/MTTL-2022'
    },
  {
    name:'2023',
    link:'./ministering-to-the-lord/MTTL-2023'
  },
  {
    name:'',
    link:''
  }
  ]

}
