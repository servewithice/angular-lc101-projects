import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'buttons',
   templateUrl: './buttons.component.html',
   styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
   buttonHeading: string = "Buttons"
   goldInactive: boolean = false;
   silverInactive: boolean = false;
   copperInactive: boolean = false;

   constructor() { }

   ngOnInit() { }

   changeEnable() {
      if ((!this.goldInactive) && (!this.silverInactive) && (!this.copperInactive)) {
         this.goldInactive=!this.goldInactive;
         this.silverInactive=!this.silverInactive;
         this.copperInactive=!this.copperInactive;
      } else if (this.goldInactive && (this.silverInactive) && (this.copperInactive)) {
         this.goldInactive=!this.goldInactive;
         this.silverInactive=!this.silverInactive;
         this.copperInactive=!this.copperInactive;
      } else {
         this.goldInactive=false;
         this.silverInactive=false;
         this.copperInactive=false;
      }
   }
   
}
