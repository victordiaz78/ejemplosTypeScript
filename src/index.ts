/*Funcion tradicional */
function sumar (a: number, b: number): number | string {
    return (a + b).toString();
    //return (a + b);
}

/*Funcion Flecha */
const sumarFlecha = (a: number , b: number): number => {
    return a + b;
}




const resultado = sumar(5, 4);
const resultado2 = sumarFlecha(3, 2);

console.log(resultado + ' ' + resultado2);


/** */
function multiplicar(numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base;
}

const resultadoM = multiplicar(10, 20);

console.log(resultadoM);