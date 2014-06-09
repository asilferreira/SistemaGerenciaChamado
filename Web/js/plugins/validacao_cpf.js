/*
 *  Project: Validação CPF JS
 *  Description: Simples validação de CPF
 *  Author: Fernando A. Valente
 *	    http://www.fernandovalente.com.br
 *	    http://www.fernandovalente.com.br/blog
 */

function validaCpf(cpfDigitado) {
    var cpf, ponto, traco, cpfPronto, numeros, digitos, soma, i, resultado, digitos_iguais;
    
    /*
     *	Verifica se o cpf informado possui 11 ou 14 caracteres.
     *	11 caracteres = CPF informado sem os pontos e o tração. Ex: 12334566789
     *	14 caracteres = CPF informado com pontos e traÃ§os. Ex: 123.345.667-89
     */
    if(cpfDigitado.length == 14){
	if(!cpfDigitado.match(/[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]/)) return false

	ponto = cpfDigitado.split(".");
	traco = ponto[2].split("-");
	cpfPronto = ponto[0]+ponto[1]+traco[0]+traco[1];


	cpf = cpfPronto;
    }else if(cpfDigitado.length == 11){
	cpf = cpfDigitado;
    }else{
	return false;
    }
    
    /*
     * Efetua a validação do cpf
     */
    digitos_iguais = 1;
      
    if (cpf.length < 11) return false;
      
    for (i = 0; i < cpf.length - 1; i++){
	if (cpf.charAt(i) != cpf.charAt(i + 1)) {
	    digitos_iguais = 0;
	    break;
	}
    }

    if (!digitos_iguais) {
	numeros = cpf.substring(0,9);
	digitos = cpf.substring(9);
	soma = 0;

	for (i = 10; i > 1; i--){
	    soma += numeros.charAt(10 - i) * i;
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if (resultado != digitos.charAt(0)) return false;

	numeros = cpf.substring(0,10);
	soma = 0;

	for (i = 11; i > 1; i--){
	    soma += numeros.charAt(11 - i) * i;
	}

	resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;

	if (resultado != digitos.charAt(1)) return false;

	return true;
    } else {
	return false;
    }

}