$(document).ready(function(){
    pg_atividade = {}
    
    $('#dialog-msg-alerta').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {document.location.reload();},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
		document.location.reload();
	    }
	}
    });
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "",
	close: function(event, ui) {carregarListaInscritos(pg_atividade.id_atividade);},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
		carregarListaInscritos(pg_atividade.id_atividade);
	    }
	}
    });
    
    $('#dialog-msg-confirmacao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 450,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog('close');
		carregarListaInscritos(pg_atividade.id_atividade);
	    },
	    "Falta": function() {
		confirmarFalta(pg_atividade.id_inscricao_atividade);
	    },
	     "Presença": function() {
		confirmarPresenca(pg_atividade.id_inscricao_atividade);
	    }
	}
    });
    
    $('#dialog-emitir-modificar-vencimento-boleto').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 'auto',
	width: 400,
	modal: true,
	resizable: false,
	title: "Emitir boleto",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-imprimir-etiqueta-cracha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 'auto',
	width: 400,
	modal: true,
	resizable: false,
	title: "Imprimir Etiqueta",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $("#consultar-disponibilidade-atividade").click(function(){
	location.href = RAIZ+'admin_atividade/disponibilidadeAtividade';
    });

    $("#inscricao-atividade").click(function(){
	location.href = RAIZ+'admin_atividade/inscreverCongressistaAtividade';
    });

    $("#presenca-atividade").click(function(){
	location.href = RAIZ+'admin_atividade/presencaAtividade';
    });

    $("#carregar-inscritos").click(function(){
	pg_atividade.id_atividade = $("#atividade").val();
	$("#lista-inscritos").hide();
	if(pg_atividade.id_atividade) carregarListaInscritos(pg_atividade.id_atividade);
	return false;
    });
    
    $('#table-lista-inscritos tbody tr').live('click',function(){
	var tipo = "alerta";
	var texto = "Escolha uma das opções abaixo para confirmar, ou não, a presença do congressista. ";
	texto += "Tome cuidado, essa ação influenciará na emissão do certificado do participante";
	
	pg_atividade.id_inscricao_atividade = $(this).find('.id_inscricao').val();
	
	$("#dialog-msg-confirmacao").html(msgResposta(tipo,texto)).dialog("open");
	
    });
    
    $("#emitir-boleto").live('click',function(){
	var html = "";

	html += "<div id='conf-pg-individual'>";
	html += "   <span for='cpf-usuario'>CPF:&nbsp;</span>";
	html += "   <input type='text' id='cpf-usuario' name='cpf-usuario' class='campoTexto mask-cpf' size='15' value=''/>";
	
	html += "   <input type='button' id='gerar-boleto' value='Gerar Boleto' class='botao'/>";
	html += "   <p><span id='erro-cpf' class='msg-erro'></span></p>";
	html += "   <p><span id='resposta-consulta' class='hidden-element red'></span></p>";
	html += "</div>";
	
	$('#dialog-emitir-modificar-vencimento-boleto').html(html).dialog("open");
	carregarMascaras();
    });
    
    $("#gerar-boleto").live('click', function(){
    	var cpf = $("#cpf-usuario").val();
    	if (validaCpf(cpf)) {
    		geraBoletoDataHoje(cpf);
    	} else {
			$("#resposta-consulta").html('Informe um CPF válido!').fadeIn();
    	}
    });
    
    $("#imprimir-etiqueta").live('click',function(){
	var html = "";

	html += "<div id='verificar-imprimir-etiqueta'>";
	html += "   <span for='cpf-usuario'>CPF:&nbsp;</span>";
	html += "   <input type='text' id='cpf-usuario' name='cpf-usuario' class='campoTexto mask-cpf' size='15' value=''/>";
	
	html += "   <input type='button' id='gerar-etiqueta' value='Gerar Etiqueta' class='botao'/>";
	html += "   <p><span id='erro-cpf' class='msg-erro'></span></p>";
	html += "   <p><span id='resposta-consulta' class='hidden-element red'></span></p>";
	html += "</div>";
	
	$('#dialog-imprimir-etiqueta-cracha').html(html).dialog("open");
	carregarMascaras();
    });
    
    $("#gerar-etiqueta").live('click', function(){
	var cpf = $("#cpf-usuario").val();
    	if (validaCpf(cpf)) {
                geraEtiqueta(cpf);
    	} else {
                $("#resposta-consulta").html('Informe um CPF válido!').fadeIn();
    	}
    });

    $("#inscricao-atividade").click(function(){    	
    });

});