function efetivarInscricao(){
    var form = $("#form-inscricao-congresso-residentes").serialize();
    var tipo = "";
    var texto = "";
    
    $.ajax({
        type: 'post',
	data: form,
        url: RAIZ+'congresso/efetivarInscricaoCongressoResidentes',  
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
  		
	    if(resposta == 'nao-logado'){
		location.href = RAIZ; 
		return;
	    }
	    
	    if(resposta == "sucesso"){
		tipo = "sucesso-cadastro";
		texto += "Inscrição realizada com sucesso!";
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