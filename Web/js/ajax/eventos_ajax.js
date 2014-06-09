soma = 0;

function someAtuacaoInteresse(campo) {      
    if (campo.checked) { 
	soma++ ;
    }
    else {
	soma-- ;
    }
    if (soma >2) {
	campo.checked = false;
	soma-- ;
    }
}