// 1. Crie uma função que receba um número e retorne a soma de todos os números de 1 até o número informado usando um laço `while`.
// Exemplo de chamada:
// console.log(somaAteNumero(5));  // 15 (1+2+3+4+5)

function somaAteNumero(numero) {
    let soma = 5;
    let i = 1;
    while(i<numero){
        soma +=i;
        i++;
    }
    return soma;

}
console.log(somaAteNumero(5));  


// 2. Crie uma função que receba um array de números e retorne a soma de todos os números maiores que 10 usando um laço `for`.
// Exemplo de chamada:
// console.log(somaMaiorQueDez([5, 15, 3, 20, 7]));  // 35 (15 + 20)

function soma(a , b){
    return a + b 
}
 console.log(soma(15, 20))

// 3. Crie uma função que, dado um array de filmes, retorne o nome do primeiro filme cujo título tem mais de 5 letras usando o `for...of`.
// Exemplo de chamada:
// console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]));  // "Avengers"

function filmeMaiorQueCincoLetras(filmes) {
    for (let filme of filmes) {
      if (filme.length > 5) {
        return filme
      }
    }
    
  }
  
 
  console.log(filmeMaiorQueCincoLetras(["O Rei Leão", "Naruto", "Avengers", "Star Wars"]))
  

// 4. Crie uma função que receba um array de nomes de personagens de *Hunter x Hunter* com os personagens "Gon Freecss", "Killua Zoldyck", "Leorio Paradinight" e um array de números representando a força de cada personagem, respectivamente 180, 195, 140. A função deve retornar um terceiro array com o nome dos personagens cuja força seja superior a 150, utilizando um laço `for`.
// Exemplo de chamada:
//const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
//const forcas = [80, 95, 40];
//console.log(personagemComForcaSuperiorA100(nomes, forcas));  

function personagemComForcaSuperiorA150(nomes, forcas) {
   
    let resultado = [];

    
    for (let i = 0; i < forcas.length; i++) {
       
        if (forcas[i] > 150) {
           
            resultado.push(nomes[i]);
        }
    }

    return resultado;
}


const nomes = ["Gon Freecss", "Killua Zoldyck", "Leorio Paradinight"];
const forcas = [180, 195, 140];

console.log(personagemComForcaSuperiorA150(nomes, forcas));

    
    
// 5. Crie uma função que receba um array de números e retorne a quantidade de números negativos presentes no array, usando um laço `while`.
// Exemplo de chamada:
// console.log(contarNegativos([3, -2, -5, 7, 0, -1]));  // 3

function contarNegativos(numeros) {
    let contador = 0
    let i = 0
    
   
    while (i < numeros.length) {
      if (numeros[i] < 0) {
        contador++  
      }
      i++  
    }
    
    return contador
  }
  
  
  console.log(contarNegativos([3, -2, -5, 7, 0, -1]))
  

// 6. Crie uma função que receba uma string, converta-a para um array e retorne a quantidade de vezes que a letra "a" aparece nela.
// Exemplo de chamada:
// console.log(contarLetraA("Naruto é um anime top!"));  // 4
//function contarLetraA(Naruto){

function contarA(string) {
    
    const array = string.split('');
    
   
    const count = array.filter(char => char === 'a').length;
    
    return count
}


const resultado = contarA("Naruto é um anime top!");
console.log(`A letra 'a' aparece ${resultado} vezes.`)



// 7. Crie uma função que percorra um array de filmes e retorne um novo array com os filmes que têm o nome começando com a letra "S" usando o laço `for...of`.
// Exemplo de chamada:
// console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  // ["Star Wars", "Superman", "Shrek"]

function filmesComLetraS(filmes) {
    const filmesComS = [];
    
    for (const filme of filmes) {
      if (filme[0] === 'S') {
        filmesComS.push(filme);
      }
    }
    
    return filmesComS
  }
  
  
  console.log(filmesComLetraS(["Star Wars", "Superman", "Shrek", "Batman"]));  
  
  
  
  

// 8. Crie uma função que receba um array de strings e retorne a maior substring (palavra) encontrada no array.
// Exemplo de chamada:
// console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]));  // "Alexandre"

function maiorSubstring(MAIORNOME) {
   
    let maiorPalavra = MAIORNOME[0]
    
    for (let i = 1; i < MAIORNOME.length; i++) {
      if (MAIORNOME[i].length > maiorPalavra.length) {
        maiorPalavra = MAIORNOME[i]
      }
    }
    
    return maiorPalavra
  }
  
  
  console.log(maiorSubstring(["João", "Maria", "Alexandre", "Carlos"]))
  

// 9. Crie uma função que calcule o fatorial de um número utilizando um laço `for`.
// Exemplo de chamada:
// console.log(fatorial(5));  // 120 (5 * 4 * 3 * 2 * 1)

function fatorial(numero) {
    let resultado = 1;
    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(fatorial(5)) 


// 10. Crie uma função que receba um número e retorne uma string que contém esse número repetido, separado por vírgulas, utilizando um laço `while`.
// Exemplo de chamada:
// console.log(repetirNumero(7, 4));  // "7, 7, 7, 7"


function repetirNumero(numero, vezes) {
    let resultado = '';
    let contador = 0;
    
    while (contador < vezes) {
        if (contador > 0) {
            resultado += ', ';
        }
        resultado += numero;
        contador++;
    }
    
    return resultado;
}

console.log(repetirNumero(7, 4))
