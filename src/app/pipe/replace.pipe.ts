// Exemplo de criação de pipe para o angular

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})

export class ReplacePipe implements PipeTransform {
    transform(value: string, char: string, valueToReplace: string) {
        return value.replace(char, valueToReplace)
    }

}