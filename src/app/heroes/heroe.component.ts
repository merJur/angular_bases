import { Component } from "@angular/core";

@Component({
    selector: 'heroe-app',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css'],

})

export class HeroeComponent {
    name   : string = 'Tony Stark';
    age : number = 45;
    adress: string = 'NYC';
    alterEgo: string = 'Ironman'

    takeName() : string {
        return `${this.name}, ${this.age}, lives  at ${this.adress} and is ${this.alterEgo}`
}
    get capitalizedName():string{
        let result = this.name.toUpperCase()
        console.log(result);
        
        
        return result
    }
    changeName(): string{
        return this.name = 'Margarita'
    }

   }

