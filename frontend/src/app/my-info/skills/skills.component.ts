import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  valueNET: number = 80; //MAX 80
  valueJS: number = 0; //MAX 70
  valueC: number = 0; //MAX 80
  valuePHP: number = 0; //MAX 65
  valueANGULAR: number = 47; //MAX 47

  constructor() { }

  ngOnInit(): void {
  }

  progressBarAnimations(){
    this.valueNET =  0;
    this.valueJS = 0;
    this.valueC = 0;
    this.valuePHP =  0;
    this.valueANGULAR = 0;

    setInterval(() => {


      if(this.valueANGULAR !== 47 && this.valueC !== 80){
        this.valueANGULAR++;
        this.valueC++;
      }
      else if(this.valueC !== 80){
        this.valueC++;
      }
    }, 10);


  }

}
