function inscricaoPoster(){
    var form = $("#form-inscricao-poster").serialize();
    var tipo = "";
    var texto = "";
 
    $.ajax({
        type: 'post',
        url: RAIZ+'congresso/inscreverPoster',
	data: form,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Pôster cadastrado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}

function atualizarPoster(){
    var form = $("#form-atualizar-inscricao-poster").serialize();
    var tipo = "";
    var texto = "";
 
    $.ajax({
        type: 'post',
        url: RAIZ+'congresso/atualizarPoster',
	data: form,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Pôster atualizado cadastrado com sucesso!";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro";
		texto += "Não foi possível efetuar sua solicitação no momento. Tente novamente.";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}