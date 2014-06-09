/***************************************************************************************************
 * Upload Tools
 * @descricao - Funcionalidades da tela de Upload
 ***************************************************************************************************/
    
$(document).ready(function(){
    var erro = $("#info-erro").html();
    var sucesso = $("#info-sucesso").html();
    var dados = {}

    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
		document.location.reload();
	    }
	}
    });

    $('#dialog-msg-confirmacao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 400,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Confirmar": function() {
		confirmarInscricao(dados.inscricao_id);
	    }
	}
    });

    if(erro) $("#info-erro").fadeIn(1000);
    if(sucesso) $("#info-sucesso").fadeIn(1000);
    
    $('#table-confirmacao-extrato tbody tr').live('click', function(){
    	dados = {inscricao_id: $(this).find('.inscricao_id').val()}
    	var tipo = "alerta";
	var texto = "Você tem certeza que deseja confirmar a inscrição para o congressista selecionado?";

	$('#dialog-msg-confirmacao').html(msgResposta(tipo,texto)).dialog("open");
    });

});

function confirmarInscricao(inscricao_id){
    var tipo = "";
    var texto = "";
    
    $('#dialog-msg-confirmacao').dialog("close");

	$.ajax({
        type: 'post',
        url: RAIZ+'admin_congresso/efetivarConfirmacaoPorExtrato',
        data: 'inscricao_id='+inscricao_id,
        beforeSend: function(){
        	carregarModal("Aguarde...");
        },
        success: function(resposta){
	    if(resposta == 'nao-logado'){location.href = RAIZ; return}
	    
	    if(resposta == true){
		tipo = "sucesso-cadastro";
		texto += "Inscrição confirmada com sucesso";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }else{
		tipo = "erro-cadastro";
		texto += "Ocorreu um erro durante a confirmação. Entre em contato com o DESIT";
		$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
	    }
	    
	    $.modal.close();
        },
        error: function(erro){}
    }); 
}
