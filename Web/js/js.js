function reenvia(){
	document.forms.abrechamado.action = "";
	document.forms.abrechamado.submit();
}
function cadchamado(){
	document.forms.abrechamado.action = "CadastrarChamado";
	document.forms.abrechamado.submit();
}



function validacao(){
	if(document.forms.abrechamado.value=="") {
		
		alert("Por favor, Preencha o campo nome");
		document.abrechamado.focus();
		return false;

	}
	
}

function txtBoxFormat(objeto, sMask, evtKeyPress) {
	var i, nCount, sValue, fldLen, mskLen, bolMask, sCod, nTecla;

	if (document.all) { // Internet Explorer
		nTecla = evtKeyPress.keyCode;
	} else if (document.layers) { // Nestcape
		nTecla = evtKeyPress.which;
	} else {
		nTecla = evtKeyPress.which;
		if (nTecla == 8) {
			return true;
		}
	}

	sValue = objeto.value;

	// Limpa todos os caracteres de formatação que
	// já estiverem no campo.
	sValue = sValue.toString().replace("-", "");
	sValue = sValue.toString().replace("-", "");
	sValue = sValue.toString().replace(".", "");
	sValue = sValue.toString().replace(".", "");
	sValue = sValue.toString().replace("/", "");
	sValue = sValue.toString().replace("/", "");
	sValue = sValue.toString().replace(":", "");
	sValue = sValue.toString().replace(":", "");
	sValue = sValue.toString().replace("(", "");
	sValue = sValue.toString().replace("(", "");
	sValue = sValue.toString().replace(")", "");
	sValue = sValue.toString().replace(")", "");
	sValue = sValue.toString().replace(" ", "");
	sValue = sValue.toString().replace(" ", "");
	fldLen = sValue.length;
	mskLen = sMask.length;

	i = 0;
	nCount = 0;
	sCod = "";
	mskLen = fldLen;

	while (i <= mskLen) {
		bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".")
				|| (sMask.charAt(i) == "/") || (sMask.charAt(i) == ":"))
		bolMask = bolMask
				|| ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask
						.charAt(i) == " "))

		if (bolMask) {
			sCod += sMask.charAt(i);
			mskLen++;
		} else {
			sCod += sValue.charAt(nCount);
			nCount++;
		}

		i++;
	}

	objeto.value = sCod;

	if (nTecla != 8) { // backspace
		if (sMask.charAt(i - 1) == "9") { // apenas números...
			return ((nTecla > 47) && (nTecla < 58));
		} else { // qualquer caracter...
			return true;
		}
	} else {
		return true;
	}
}

function apenas_numero(evento) {
	var tecla;
	if (window.event) { // Internet Explorer
		tecla = event.keyCode;
	} else { // Firefox
		tecla = evento.which;
	}

	if (tecla == 0 || tecla >= 48 && tecla <= 57)
		return true;
	return false;
}