import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomecomponetComponent } from './homecomponet/homecomponet.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { MessagesComponent } from './messages/messages.component';
import { TestimonyComponent } from './testimony/testimony.component';
import { MessageBiblestudyComponent } from './message-biblestudy/message-biblestudy.component';
import { For2023Component } from './ministering-to-the-lord/for-2023/for-2023.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', title: 'Home', component: HomecomponetComponent },
  { path: 'about', title: 'About us', component: AboutUsComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'service', title: 'Service', component: ServicesComponent },
  { path: 'messages', title: 'Messages', component: MessagesComponent },
  { path: 'testimony', title: 'Testimony', component: TestimonyComponent },
  { path: 'biblestudy', title: 'Bible study', component: MessageBiblestudyComponent },
  { path: 'for_2024messages', component: For2023Component },
  { path: 'ministering-to-the-lord', loadChildren: () => import('./ministering-to-the-lord/ministering-to-the-lord.module').then(m => m.MinisteringToTheLordModule) },
  { path: '**', component: PageNotFoundComponent }
];


export class AppRoutingModule { }
