function cadastrarNovoCongresso(){
    var dados = $("#form-novo-congresso").serialize();
    var tipo = "sucesso-cadastro";
    var texto = "";

    $.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/cadastrarNovoCongresso',
	data: dados,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
		    if(resposta == 'nao-logado'){location.href = RAIZ; return}
		    
		    if(resposta == true){
				tipo = "sucesso-cadastro";
				texto = "Congresso cadastrado com sucesso!";
				$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open'); 
		    }else if(resposta == 'congresso-ativo'){
				tipo = "erro-cadastro";
				texto = "Não foi possível cadastrar um novo congresso, pois já existe um ativo.";
				$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
		    }else{
				tipo = "erro-cadastro";
				texto = "Erro ao efetuar o cadastro. Entre em contato com desit@uerj.br informando o erro.";
				$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
		    }
		   
		    $.modal.close();
        },
        error: function(erro){}
    });
}