/*
    ===== Código de TypeScript =====
*/
//let habilidades: any[] = [1, 'Victor', true];
//let habilidades: (boolean | string | number)[] = ['Saltar', 'Volar', 'Correr', 100];

/*Arreglo */
let habilidades: string[] = ['Saltar', 'Volar', 'Correr'];
habilidades.push('Pelear');

/*Objeto */
interface Personaje {
    nombre: string,
    hp: number,
    habilidades: string[],
    puebloNatal?: string
}

const personaje: Personaje = {
    nombre: 'Victor',
    hp: 100,
    habilidades: ['Saltar', 'Volar', 'Correr']
}

personaje.puebloNatal = 'Arbelaez';

console.table(personaje);




//console.log(habilidades);


