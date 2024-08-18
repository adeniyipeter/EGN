import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogerService {
  log(mess:any) { console.log(mess)};
  error(mess:any) { console.error(mess);}
  warn(mess:any) {console.warn(mess)}
  
  
  

  constructor() { }
}
