import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
        new Quote(1,'Treat me like a joke and I will leave you like it is funny'),
        new Quote(2,'I am not wierd I am limited edition'),
        new Quote(3, 'Get up, stand up, Stand up for your rights. Get up, stand up, Don not give up the fight'),
        new Quote(4, 'Talk is cheap. Show me code'),
        new Quote(5, 'Things are not always #000000 and #FFFFFF'),
        new Quote(6, 'Eat Sleep Game Repeat'),
        new Quote(7, 'Gamers do not die they respawn'),


    ]
  constructor() {}
  
  ngOnInit() {
  }

}
