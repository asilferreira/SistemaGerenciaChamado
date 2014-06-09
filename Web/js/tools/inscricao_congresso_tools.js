$(document).ready(function(){
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 210,
	width: 450,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Cancelar": function() {
		$(this).dialog("close");
	    },
	    "Confirmar": function() {
		efetivarInscricaoCongresso($("#id-categoria").val(),$("#valor-categoria").val());
	    }
	}
    });
    
    $('#dialog-msg-inscricao').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 210,
	width: 450,
	modal: true,
	resizable: false,
	title: "Sucesso!",
	close: function(event, ui) {
	    location.href = RAIZ+'congresso/congresso';
	},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		location.href = RAIZ+'congresso/congresso';
	    },
	    "Boleto": function() {
		window.open(RAIZ+'congresso/gerarBoleto');
	    }
	}
    });
    
    $('#dialog-msg-inscricao-erro').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 210,
	width: 450,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });

    $("#inscricao-posters").live('click',function(){
	location.href = RAIZ+'congresso/inscricaoPoster';
    });
    
    $("#tb-categorias-congresso tbody tr").hover(
	function(){$(this).addClass('linha-cursor');},
	function(){$(this).removeClass('linha-cursor');}
    );
    
    $("#inscricao-congresso").click(function(){
	location.href = RAIZ+'congresso/realizarInscricaoCongresso'; 
    });
    
    $("#edita-dados").live('click',function(){
	location.href = RAIZ+'meus_dados/editarCadastro';
    });
    
    $("tbody tr").click(function(){
	var idCategoria = $(this).find('.id-categoria').val();
	var descCategoria = $(this).find('.desc-categoria').html();
	var valorCategoria = $(this).find('.valor-categoria').val();
	var html = "";
	var tipo = "";
	var texto = "";

	msgResposta(tipo,texto);
	tipo = "alerta";
	texto += "Você escolheu a categoria <strong>"+descCategoria+"</strong> com o valor de <strong>R$"+valorCategoria+"</strong>. ";
	texto += "Se a informação estiver correta, clique em confirmar para gerar o boleto de pagamento referente a esta categoria.";
	texto += "<input type='hidden' id='id-categoria' value='"+idCategoria+"' />";
	texto += "<input type='hidden' id='valor-categoria' value='"+valorCategoria+"' />";
	
	$('#dialog-msg').html(msgResposta(tipo,texto)).dialog('open');
    });
    
    $("#2a-via-boleto").click(function(){
	window.open(RAIZ+'congresso/gerarBoleto');
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