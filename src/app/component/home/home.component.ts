import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  

  constructor() {}

  ngOnInit(): void {
    this.typingAnimation(0);
  
  }

  typingAnimation(pos:number): void {

    let message = "I'm Jose Caro";

    let speed = 200;
    document.getElementById("name") !.innerHTML = message.substring(0, pos);
    if (message.length != pos) {
     
      setTimeout(() => this.typingAnimation(pos+1), speed);
    }
  }

}
