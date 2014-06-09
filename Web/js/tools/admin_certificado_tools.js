/***************************************************************************************************
 * Admin Certificado Tools
 * @descricao - Funcionalidades da tela administrativa dos certificados
 ***************************************************************************************************/
$(document).ready(function(){
    
    $("#gerar-certificado").live('click',function(){
	gerarCertificado();
    });
    
    $("#bt-gerar-certificado").live('click',function(){        
        window.open(RAIZ+'admin_certificado/gerarCertificadoEspecial');
    });	
    
    $("#substituir-certificado").live('click',function(){
        $("#opc-certificado").hide();
	carregarSubstituirEditarCertificado();
    });
    
    $("#bt-salvar-certificado").live('click',function(){
	substituirCertificado();
//	return false;
    });
    
    $('#dialog-msg-atualizacao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$("#opc-certificado").hide();
		$(this).dialog("close");
	    }
	}
    });
    
//    $("#bt-cadastrar-evento").live('click',function(){
//	$("#info-cadastro-atividade").validate({
//	    rules:{
//		titulo:{ required: true },		
//		coordenacao: { required: true },
//		local: { required: true },
//		vagas: { required: true },
//		tipo: { required: true },
//		categoria: { required: true },
//		dt_inicio: { required: true },
//		hora_inicio: { required: true },
//		dt_fim: { required: true },
//		hora_fim: { required: true }
//	    },
//	    errorPlacement: function (error, element) {
//		element.css('background', '#ffd7cd');
//		element.css('border', '1px solid #b0736f');
//	    },
//	    submitHandler: function(form){
//		efetivarCadastroAtividade();
//	    }    
//	});
//    });
    
});