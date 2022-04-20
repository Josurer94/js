console.group("cuadrado");
console.log("hola mundo")
const cuadrado = 5;
console.log("el lado del cuadrado mide " + cuadrado);
var perimetro = cuadrado * 4;
console.log("el perimetro es " + perimetro);
var area = cuadrado * cuadrado;
console.log("el area es " + area);
console.groupEnd();
console.group("triangulo");
const triangulo = 3;
var perimetro = triangulo * 3;
var area = Math.sqrt((3*3)/(1.5*1.5))*(3/2);
console.log("el perimetro es " + perimetro + " y el area es " + area);
console.groupEnd();
console.group("el pi");
console.log("pi es " + Math.PI);
console.groupEnd();
//triangulo
function alturat(lado1,lado2,lado3){
    if(lado1 > lado2){
        if(lado1 > lado3){
            if(lado2>lado3){
                return  lado1 * lado3;
            }else{
                 return lado1 * lado2;
            }
        }
        else return lado2 * lado3;
            
        }
    }


function get_cuadradop(lado){
    return lado*4;
}

function get_cuadradoa(lado){
    return lado * lado;
}

function get_triangulop(lado1,lado2,lado3){
    return lado1 + lado2 + lado3;
}

function get_trianguloa(lado1,lado2,lado3){
    return alturat(lado1,lado2,lado3) * lado1;
}


function cpc(){
    const input = document.getElementById("inputcuadrado");
    const value = input.value;
    const peri = get_cuadradop(value);
    alert(peri);
}


