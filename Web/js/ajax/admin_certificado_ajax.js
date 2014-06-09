function gerarCertificado(){
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_certificado/gerarCertificado',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; return
	    }
	    
	    $("#opc-certificado").html(resposta).fadeIn(700);

	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}

function carregarSubstituirEditarCertificado(){
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_certificado/carregarSubstituirEditarCertificado',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ;return}
	    
	    if(resposta == "sem-congresso-ativo"){
		tipo = "erro";
		texto += "Não existe congresso ativo para a realização do procedimento solicitado.";
		$('#dialog-msg-congresso-inativo').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		$("#opc-certificado").html(resposta).fadeIn();
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });   
    
}

function substituirCertificado(){
    var tipo = "";
    var texto = "";
    $.ajax({
        type: 'post',
        url: RAIZ+'admin_certificado/substituirCertificado',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
            if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
//            $("#opc-certificado").html(resposta).fadeIn(700);
            
            if(resposta == "atualizado"){
		tipo = "sucesso-cadastro";
		texto += "Dados atualizados com sucesso!";
		$('#dialog-msg-atualizacao').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar a atualização no momento. Tente novamente.";
		$('#dialog-msg-atualizacao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}	    