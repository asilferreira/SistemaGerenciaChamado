$(document).ready(function(){
    var global = {
	soma: 0,
	campo: 0
    }
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "",
	close: function(event, ui) {document.location.reload();},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
   
    $(".opc_area").change(function(){
	global.campo = this;
	if (global.campo.checked) global.soma ++ ; else global.soma -- ;
	if (global.soma > 2) {
	    global.campo.checked = false;
	    global.soma -- ;
	}
    });
    
//    $("#inscricao_congresso_residente").click(function(){
//	efetivarInscricao();
//	return false;
//    });

    $("#form-inscricao-congresso-residentes").validate({
	rules:{
	    primeiro_ano_conclusao:{ required: true },
	    primeira_especialidade:{ required: true },
	    instituicao_atual:{ required: true }    
	},
	messages:{
	    primeiro_ano_conclusao:{ required: "*" },
	    primeira_especialidade:{ required: "*" },
	    instituicao_atual:{ required: "*" }
	},	

    
	submitHandler: function(form){
	    efetivarInscricao();
	} 
    });

});