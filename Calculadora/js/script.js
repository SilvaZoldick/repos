function calc(tipo, valor) {

    if (tipo == 'acao') {
        if (valor == 'C') { //limpar
            document.getElementById('tela').value = '';
        }else if (valor != '=') { //operações matemáticas
            var lista = ['+', '-', 'x', '/'];
            var texto = document.getElementById('tela').value;
            var qnt_caracter = texto.length;
            var check = 0;

            for (var i = 0; i < 4; i++) {
                if (texto.lastIndexOf(lista[i]) == qnt_caracter - 1) {
                    check = 1;
                }
            }
            if (check == 0) {
                if (valor != 'x') {
                    document.getElementById('tela').value += valor;
                }else {
                    document.getElementById('tela').value += '*';
                }
            }           
        }else { //resultado
            var expressao = document.getElementById('tela').value;
            document.getElementById('tela').value = eval(expressao);
        }
    }else {
        document.getElementById('tela').value += valor;
    }
}