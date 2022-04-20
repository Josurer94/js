
function media(lista){
    //let sumalista = 0;
    //for(let i = 0; i< lista.length; i++ ){
    //    sumalista = sumalista + lista[i];
    //}

    const sumalist =lista.reduce(
        function(acomulado = 0, nuevo){
            return acomulado + nuevo;
        }
    );
    const promedio = sumalist/lista.length;
    
    const mitad = parseInt(lista.length / 2);
    let mediana;

    if(lista % 2 === 0){
       const e1 = lista[mitad - 1];
       const e2 = lista[mitad];

       mediana = (e1+e2)/2

    } else {
        mediana = lista[mitad];
    }

    const listacount = {};
    lista.map(
        function(elemento){
            if(lista[elemento]){
               lista[elemento] = lista+ 1; 
            }
            listacount[elemento] = 1;
        }
    );

    return mediana;

    
}
//para la moda
const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
  ];
  
  const lista1Count = {};
  
  lista1.map(
    function (elemento) {
      if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
      } else {
        lista1Count[elemento] = 1;
      }
    }
  );
  
  const lista1Array = Object.entries(lista1Count).sort(
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
  
  const moda = lista1Array[lista1Array.length - 1];

  //para la mediana
  function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }
  
  const lista1 = [
    100,
    200,
    500,
    400000000,
  ];
  
  const mitadLista1 = parseInt(lista1.length / 2);
  
  function esPar(numerito) {
    if (numerito % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let mediana;
  
  if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
  
    const promedioElemento1y2 = calcularMediaAritmetica([
      elemento1,
      elemento2,
    ]);
    
    mediana = promedioElemento1y2;
  } else {
    mediana = lista1[mitadLista1];
  }