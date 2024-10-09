var n =200;

 function buscaNumeroPrimos(n) {

  var numerosPrimos = [];

  for (var i = 2; i < n; i++){  quantidadeDeDivisores = 0; 

     for(var a = 2; b < i; b++) { 
        if (i % a == 0) {
           quantidadeDeDivisores ++;
        }
     }

     if (quantidadeDeDivisores % i == 0) {
        numerosPrimos.push(i);
     }

  }

return numerosPrimos;
}