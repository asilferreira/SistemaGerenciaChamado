function efetivarInscricaoCongresso(idCategoria,valorBoleto){    
    var tipo = "";
    var texto = "";
    
    $('#dialog-msg').dialog('close');
    
    $.ajax({
        type: 'post',
        url: RAIZ+'congresso/efetivarInscricaoCongresso',
	data: "id-categoria="+idCategoria+"&valor-boleto="+valorBoleto,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == "erro"){
		tipo = "erro";
		texto += "Não foi possível efetuar sua inscrição no momento. Tente novamente.";
		$('#dialog-msg-inscricao-erro').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "sucesso-cadastro";
		texto += "Sua incrição foi efetuada com sucesso! Clique na opção \"Boleto\" para efetuar o pagamento.";
		texto += "<input type='hidden' id='id-inscricao-congresso' value='"+resposta+"' />";
		$('#dialog-msg-inscricao').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    });
}
