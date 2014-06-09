function autenticaUsuario(){
    var html = "";
    var dados = $("#form-login").serialize();
    
    $.ajax({
        type: 'post',
        url: RAIZ+'login/autenticarUsuario',
        data: dados,
        beforeSend: function(){
	    carregarModal("Autenticando...");
	},
        success: function(resposta){
	    if(resposta == 'autenticado'){
		location.href = RAIZ+'login/carregaIndexSistema';
	    }
	    
	    if(resposta == 'nao-autenticado'){
		html += "Você informou um CPF ou Senha incorretos.";
		$("#msg-erro-login").html(html).fadeIn(700);
	    }
	    
	    $.modal.close();
	    $("#msg-modal").hide();
        },
        error: function(erro){}
    });
}

function recuperarSenha(){
    var cpf = $("#cpf-recuperar-senha").val();
    var email = $("#email-recuperar-senha").val();
    var dados = $("#recuperacao-senha").serialize();
    var texto = "";
    var html, tipo;
    
    $('#dialog-recuperar-senha').dialog('close');
    
    $.ajax({
        type: 'post',
        url: RAIZ+'Recuperar_senha/verificaCpfEmailUsuario',
        data: dados,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    console.log(resposta);
	    if(resposta == 'enviado'){
		texto = 'Uma nova senha foi enviada para seu e-mail!';
		html = msgResposta('sucesso-cadastro',texto);
	    }else{
		texto += 'Ocorreu um erro ao enviar a nova senha. <br />';
		texto += 'Verifique se você informou seu CPF e E-mail corretamente.';
		html = msgResposta('erro-cadastro',texto);
	    }
	    
	    $('#dialog-envio-senha').html(html).dialog('open');
	    
	    $.modal.close();
	    $("#msg-modal").hide();
        },
        error: function(erro){}
    });
}
    
function faleConosco(){
    var nome = $("#nome_fale_conosco").val();
    var email = $("#email_fale-conosco").val();
    var telefone = $("#telefone_fale_conosco").val();
    var assunto = $("#assunto_fale_conosco").val();
    var mensagem = $("#mensagem_fale_conosco").val();
    var dados = $("#contato_fale_conosco").serialize();
    var texto = "";
    var html, tipo;
    
    
    $('#dialog-fale-conosco').dialog('close');
    
    $.ajax({
        type: 'post',
        url: RAIZ+'Fale_conosco/enviaEmail',
        data: dados,
        beforeSend: function(){
	    carregarModal("Aguarde...");
	},
        success: function(resposta){
	    console.log(resposta);
	    if(resposta == 'enviado'){
		texto = 'Seu e-mail foi enviado com sucesso!';
		html = msgResposta('sucesso-cadastro',texto);
	    }else{
		texto += '<p>Ocorreu um erro ao enviar o e-mail.</p>';
		texto += '<p>Verifique se você informou seus dados corretamente.</p>';
		html = msgResposta('erro-cadastro',texto);
	    }
	    
	    $('#dialog-envio-fale-conosco').html(html).dialog('open');
	    
	    $.modal.close();
	    $("#msg-modal").hide();
        },
        error: function(erro){}
    });
    
}