var palavra = prompt('Digite a palavra que quer contar a  quantidade de caracteres: ')
var contadorDeCaracteres = palavra.length

console.log(contadorDeCaracteres)



for (var i in (0, contadorDeCaracteres), i++) {
    var j = [];
    var caractere = palavra.charAt(i);
    document.write(caractere);
    j += i;
    console.log('a' + j);
}
console.log(j);