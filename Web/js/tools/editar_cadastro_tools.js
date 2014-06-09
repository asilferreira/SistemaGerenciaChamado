/***************************************************************************************************
 * Login Tools
 * @descricao - Funcionalidades da tela de login
 ***************************************************************************************************/
$(document).ready(function(){
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
	    }  
	}
    });
   
    $('#dialog-aviso').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 150,
	width: 480,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });
    
    $('#dialog-resposta-sucesso').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 320,
	modal: true,
	resizable: false,
	title: "Meus dados",
	close: function(event, ui) {
	    location.href = RAIZ;
	},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		location.href = RAIZ;
	    }
	}
    });
    
    $("#estados").live('change', function(){
	var idEstado = $(this).val();
	carregarCidadesPorEstado(idEstado);
    });
    
    $("#form-atualizacao-usuario").validate({
	rules:{
	    nome:{ required: true },
	    nome_cracha: { required: true },
	    sexo: { required: true },
	    data_nascimento: { required: true },
	    area_usuario: { required: true },
	    endereco:{ required: true },
	    numero:{ required: true },
	    bairro:{ required: true },
	    cep:{ required: true },
	    estados:{ required: true },
	    cidade:{ required: true },
	    paises:{ required: true },
	    tel_celular:{ required: true },
	    
	    email:{ required: true, email: true },
	    rep_email:{ required: true, email: true, equalTo: "#email" }
	},
	
	messages:{
	    nome:{ required: "Informe seu nome completo" },
	    nome_cracha:{ required: "Informe o nome que aparecerá no crachá" },
	    sexo:{ required: "Informe seu sexo" },
	    data_nascimento: { required: "Informe sua data de nascimento" },
	    area_usuario: { required: "Informe sua área de atuação" },
	    endereco:{ required: "Informe seu endreço" },
	    numero:{ required: "Informe o nº de seu endereço" },
	    bairro:{ required: "Informe o bairro em que reside" },
	    cep:{ required: "Informe o CEP de sua localidade" },
	    estados:{ required: "Informe o estado de sua região" },
	    cidade:{ required: "Informe a cidade de seu estado" },
	    paises:{ required: "Informe se país" },
	    tel_celular:{ required: "Informe seu celular para contato" },
	    
	    email:{
		required: "Informe seu e-mail para contato ",
		email: "Informe um e-mail válido"
	    },
	    rep_email:{
		required: "Informe novamente seu e-mail",
		email: "Informe um e-mail válido",
		equalTo: "Informe novamente seu e-mail"
	    }
	},
	submitHandler: function(form){
	    atualizarUsuario();
	    return false;
	}    
    });
    
});