/***************************************************************************************************
 * Login Tools
 * @descricao - Funcionalidades da tela de login
 ***************************************************************************************************/
$(document).ready(function(){
   $("#termos-uso").live('click',function(){
	carregarTermoUsoCadastroUsuario();
	return false;
    });
   
   $('#dialog-termos-uso').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 350,
	width: 700,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Aceito": function() {
		$(this).dialog("close");
		$('#box_termos_uso').attr('checked','true');
	    }	    
	}
   
   });
   
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
	    "Logar": function() {
		location.href = RAIZ;
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
    
    $("#estados").live('change', function(){
	var idEstado = $(this).val();
	carregarCidadesPorEstado(idEstado);
    });
    
    $("#cpf").live('blur',function(){
	var cpf = $(this).val();
	verificarCpfCadastrado(cpf);
    });    

    $("#form-novo-usuario").validate({
	rules:{
	    cpf:{ required: true },
	    nome:{ required: true },
	    nome_cracha: { required: true },
	    sexo:{ required: true },
	    data_nascimento:{ required: true },
	    area_usuario:{ required: true },
	    endereco:{ required: true },
	    numero:{ required: true },
	    bairro:{ required: true },
	    cep:{ required: true },
	    estados:{ required: true },
	    cidade:{ required: true },
	    paises:{ required: true },
	    tel_celular:{ required: true },
	    
	    senha:{ required: true, minlength: 6  },
	    re_senha:{ required: true, equalTo: "#senha", minlength: 6  },
	    email:{ required: true, email: true },
	    rep_email:{ required: true, email: true, equalTo: "#email" }
	},
	messages:{
	    cpf:{ required: "Informe um CPF válido" },
	    nome:{ required: "Informe seu nome completo" },
	    nome_cracha:{ required: "Informe o nome que aparecerá no crachá" },
	    sexo:{ required: "Informe seu sexo" },
	    data_nascimento:{ required: "Informe sua data de nascimento" },
	    area_usuario: { required: "Informe sua área de atuação" },
	    endereco:{ required: "Informe seu endreço" },
	    numero:{ required: "Informe o nº de seu endereço" },
	    bairro:{ required: "Informe o bairro em que reside" },
	    cep:{ required: "Informe o CEP de sua localidade" },
	    estados:{ required: "Informe o estado de sua região" },
	    cidade:{ required: "Informe a cidade de seu estado" },
	    paises:{ required: "Informe se país" },
	    tel_celular:{ required: "Informe seu celular para contato" },
	    
	    senha:{ 
		required: "Informe uma senha",
		minlength: "Informe uma senha com o mínimo de 6 caracteres"
	    },
	    re_senha:{ 
		required: "Informe novamente sua senha",
		equalTo: "As senhas devem ser iguais",
		minlength: "Informe uma senha com o mínimo de 6 caracteres"
	    },
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
	    var cpf = $("#cpf").val();
	    
	    $("#erro-cpf").hide();
	    $("#erro-termo-uso").hide();
	    
	    if (!$("#box_termos_uso").attr("checked")){
		$("#erro-termo-uso").html("Você deve concordar com os termos de uso para efetuar o cadastro.").fadeIn(700);
		return false
	    }
	    
	    cadastrarNovoUsuario();
	}    
    });
    
});