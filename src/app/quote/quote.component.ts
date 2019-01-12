import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  quotes = [
    new Quote(1, 'Treat me like a joke and I will leave you like it is funny', 'By Chelsea Lydia'),
    new Quote(2, 'I am not wierd I am limited edition', 'By Abby'),
    new Quote(3, 'Get up, stand up, Stand up for your rights. Get up, stand up, Don not give up the fight', 'By Bob Marley'),
    new Quote(4, 'Talk is cheap. Show me code', 'By June Barasa'),
    new Quote(5, 'Things are not always #000000 and #FFFFFF', 'By Yommie Samora'),
    new Quote(6, 'Eat Sleep Game Repeat', 'Benson Kimani'),
    new Quote(7, 'Gamers do not die they respawn', 'By Denzel Ouma'),


  ]
  constructor() { }

  ngOnInit() {
  }

}
