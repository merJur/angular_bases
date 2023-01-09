import { Component } from "@angular/core"; 

@Component({
    selector: 'app-contador',
    styleUrls: ['./contador.component.css'],
    template: `
    <h1>{{title}}</h1>
    
<div class='contador'>
    <button (click)="addOrSubs(1)"> + 1 </button>
    <button (click)="addOrSubs(decena)"> + 10 </button>
    <button (click)="addOrSubs(centena)"> + 100 </button>
    
    <span class="num"> {{num}} </span>
    
    <button (click)="addOrSubs(-1)"> - 1 </button>
    <button (click)="addOrSubs(-decena)"> - 10 </button>
    <button (click)="addOrSubs(-centena)"> - 100 </button>
</div>    
        `
})
export class ContadorComponent{
    public title: string = 'Contador app';
    num: number = 100;
    decena: number = 10;
    centena: number = 100
  
    addOrSubs(valor: number) {
      this.num += valor
    }
}