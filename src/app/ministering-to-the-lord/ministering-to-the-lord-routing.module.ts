import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { For2023Component } from './for-2023/for-2023.component';
import { For2022Component } from './for-2022/for-2022.component';
import { YearsComponent } from './years/years.component';
import { SCHOOLOFTHESPIRITComponent } from '../school-of-the-spirit/school-of-the-spirit.component';
import { NewWineSchoolTheSpiritComponent } from '../new-wine-school-the-spirit/new-wine-school-the-spirit.component';
import { MessageBiblestudyComponent } from '../message-biblestudy/message-biblestudy.component';

const routes: Routes = [
  { path: 'years', component: YearsComponent },
  { path: 'MTTL-2023', component: For2023Component },
  { path: 'MTTL-2022', component: For2022Component },
  { path:'SOTS', component:SCHOOLOFTHESPIRITComponent},
  { path:'NewWine', component:NewWineSchoolTheSpiritComponent},
  { path:'Bible_study', component:MessageBiblestudyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinisteringToTheLordRoutingModule { }

