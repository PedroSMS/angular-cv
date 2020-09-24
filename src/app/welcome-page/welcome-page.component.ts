import { Component, OnInit } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css'],
  animations: [
    trigger('wordUpdated', [
      transition("* => *", group([
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(40%)' }),
          animate('.5s ease-in', style({ opacity: 1, transform: 'translateY(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ opacity: 1, transform: 'translateY(0%)' }),
          animate('.5s ease-out', style({ opacity: 0, transform: 'translateY(-40%)' }))
        ], { optional: true })
      ]))
    ]),
  ]
})
export class WelcomePageComponent implements OnInit {
  index: number = 0;
  words: string[] = [ 'Pedro de Sousa', 'Software Developer', '.NET Enthusiastic', 'Fast Learner', 'Team Player'];
  word: string = 'Pedro de Sousa';
  intervalId: any;
  goToInfo: boolean = true;

  constructor(private router: Router) {
    this.intervalId = setInterval(() => this.changeWord(), 2000);
  }

  ngOnInit(): void {

  }

  changeWord() {
    if (this.index === 0) {
      this.index = 1;
    } else if (this.index === 1) {
      this.index = 2;
    } else if (this.index === 2) {
      this.index = 3;
    } else if (this.index === 3) {
      this.index = 4;
    } else {
      this.index = 0;
    }

    this.word = this.words[this.index];
  }

  goToMyInfo(){
    this.disappearWelcomePage()
      .then(() => {
        this.router.navigate(['my-info'])
      });

  }

  disappearWelcomePage(){
    return new Promise((resolve, rej) => {
      clearInterval(this.intervalId);
      this.goToInfo = false;

      setTimeout(resolve, 0.1);
    })
  }

}


