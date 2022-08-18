var data_hoje = new Date();
var data_nasc = prompt('Digite a data que você nasceu:');

var data_hoje_dia = data_hoje.charAt(0) + data_hoje.charAt(1);
var data_hoje_mes = data_hoje.charAt(3) + data_hoje.charAt(4);
var data_hoje_ano = data_hoje.charAt(6) + data_hoje.charAt(7);

console.log(data_hoje_dia + '/' + data_hoje_mes + '/' + data_hoje_ano);
var qnt_milisec1 = data_hoje.getTime();
var qnt_milisec2 = data_nasc.getTime();

var qnt_dias = (qnt_milisec1 - qnt_milisec2) / 1000 / 60 / 60 / 24;
var qnt_anos = qnt_dias / 365;

document.write(qnt_dias, ' dias')
document.write('<hr>')
document.write(qnt_anos, ' anos')