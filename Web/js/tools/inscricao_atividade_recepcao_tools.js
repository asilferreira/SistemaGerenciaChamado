$(document).ready(function(){
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "",
	close: function(event, ui) {document.location.reload();},
	buttons: {
	    "Fechar": function() {
		document.location.reload();
	    }    
	}
    });
    
    $('#dialog-atividade').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 400,
	width: 700,
	modal: true,
	resizable: false,
	title: "Atividade",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog('close');
	    },  
	    "Confirmar inscrição": function() {
		var id_atividade = $(this).find('#id_atividade').val();
		var cpf = $("#cpf").val();
		var congresso_id = $("#congresso_id").val();
		var usuario_id = $("#usuario_id").val();
		confirmarInscricaoRecepcao(id_atividade, cpf, congresso_id, usuario_id);
	    }    
	}
    });
    
    $('#dialog-atividade-inscrito').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 400,
	width: 700,
	modal: true,
	resizable: false,
	title: "Atividade",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog('close');
	    }   
	}
    });
    
    $("#cpf").keydown(function(){
		$("#cursos-disponiveis").html("").hide();
    });

    $("#verificar-atividades-usuario").click(function(){
    	var tipo = "alerta";
		var texto = "Atenção! Você precisa informar um CPF válido para efetuar essa solicitação.";
		var cpf = $("#cpf").val();
		
		$("#cursos-disponiveis").hide();
		
		if(validaCpf(cpf)){
		    carregarAtividadesCongressista(cpf);
		}else{
		    $('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
		}
		return false;
    });

    $('#lista_atividades tbody tr').live('click', function(){
	var id_atividade = $(this).find('.id_atividade').val();
	var disponibilidade = $(this).find('.disponibilidade').val();
	if(disponibilidade == "disponivel") carregarDadosAtividade(id_atividade);
    });
    
    $('#lista_inscricoes_atividades tbody tr').click(function(){
	var id_atividade = $(this).find('.id_atividade').val();
	var disponibilidade = $(this).find('.disponibilidade').val();
	carregarDadosAtividadeInscrito(id_atividade);
    });
});