import { templateJitUrl } from "@angular/compiler";
import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


// Usar o OnChanges para carregar informações assincronas
export class StarComponent implements OnChanges {
   // @input() indica que a variavel pode receber informações de um componente externo
    @Input()
    rating: number = 0;

    starWidth!: number;

    
    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rating * 74 / 5
    }

}