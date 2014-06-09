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
		confirmarInscricao(id_atividade);
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
    
    $('table tbody tr').hover(
	function() {$(this).addClass('hover-tabela');},
	function() {$(this).removeClass('hover-tabela');}
    );
	
    $('#lista_atividades tbody tr').click(function(){
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