/***************************************************************************************************
 * Login Tools
 * @descricao - Funcionalidades da tela de login
 ***************************************************************************************************/
$(document).ready(function(){

$('#dialog-recuperar-senha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 380,
	modal: true,
	resizable: false,
	title: "Recuperação de senha",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Enviar": function() {
		recuperarSenha();
	    }	    
	}
    });
    
$('#dialog-envio-senha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 360,
	modal: true,
	resizable: false,
	title: "Recuperação de senha",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }    
	}
    });
    
$('#dialog-fale-conosco').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 450,
	width: 410,
	modal: true,
	resizable: false,
	title: "Formulário de contato",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Enviar": function() {
		faleConosco();
	    }	    
	}
    });
    
$('#dialog-envio-fale-conosco').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 360,
	modal: true,
	resizable: false,
	title: "Formulário de contato",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }    
	}
    });
    
$('#dialog').dialog({
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
    
$("#recuperar-senha").live('click',function(){
	html = "<br /><br />";
	html += "<form id='recuperacao-senha'>";
	html += "   <table>";
	html += "	<tr>";
	html += "	    <td><label for='cpf'>CPF:</label>&nbsp;</td>";
	html += "	    <td>";
	html += "		<input type='text' name='cpf-recuperar-senha' id='cpf-recuperar-senha' value='' maxlength=''";
	html += "		    size='20' class='campoTextoRecSenha mask-cpf'/>";
	html += "	    </td>";
	html += "	</tr>";
	html += "	<tr>";
	html += "	    <td><label for='email'>E-mail:&nbsp;</label></td>";
	html += "	    <td>";
	html += "		<input type='text' name='email-recuperar-senha' id='email-recuperar-senha' value=''";
	html += "		    maxlength='80' size='40' class='campoTextoRecSenha'/>";	
	html += "		<span id='erro-cpf' class='msg-erro'></span>";
	html += "	    </td>";
	html += "	</tr>";
	html += "   </table>";
	html += "</form>";
	
	$('#dialog-recuperar-senha').html(html).dialog('open');
	$(".mask-cpf").mask("999.999.999-99");
	return false;
    });
    
$("#fale-conosco").live('click',function(){
    html = "<br /><br />";
    html += "<form id='contato_fale_conosco'>";
    html += "   <table>";
    html += "	<tr>";
    html += "	    <td><label for='nome'>Nome:</label>&nbsp;</td>";
    html += "	    <td>";
    html += "		<input type='text' name='nome_fale_conosco' id='nome_fale_conosco' value='' maxlength='' size='40' class='campoTextoContato'/>";
    html += "	    </td>";
    html += "	</tr>";
    html += "	<tr>";
    html += "	    <td><label for='email'>E-mail:&nbsp;</label></td>";
    html += "	    <td>";
    html += "		<input type='text' name='email_fale_conosco' id='email_fale_conosco' value='' maxlength='80' size='40' class='campoTextoContato'/>";
    html += "	    </td>";
    html += "	</tr>";
    html += "	<tr>";
    html += "	    <td><label for='telefone'>Telefone:&nbsp;</label></td>";
    html += "	    <td>";
    html += "		<input type='text' name='telefone_fale_conosco' id='telefone_fale_conosco' value='' maxlength='80' size='40' class='campoTextoContato mask-tel'/>";
    html += "	    </td>";
    html += "	<tr>";
    html += "	    <td><label for='assunto'>Assunto:&nbsp;</label></td>";
    html += "	    <td>";
    html += "		<input type='text' name='assunto_fale_conosco' id='assunto_fale_conosco' value='' maxlength='80' size='40' class='campoTextoContato'/>";
    html += "	    </td>";
    html += "	</tr>";
    html += "	<tr>";
    html += "	    <td><label for='mensagem'>Mensagem:&nbsp;</label></td>";
    html += "	    <td>";	
    html += "		<textarea rows='10' cols='39' id='mensagem_fale_conosco' name='mensagem_fale_conosco' class='campoTexto'></textarea>";
    html += "           <span id='erro-cpf' class='msg-erro'></span>";
    html += "	    </td>";
    html += "	</tr>";
    html += "   </table>";
    html += "</form>";
	
    $('#dialog-fale-conosco').html(html).dialog('open');
    $(".mask-tel").mask("(99)9999-9999");
    return false;
});
    
    
$(':text[name = login]').focus();
    
$("#botao-login").click(function(){
	var html = "";
	var cpf = $("#cpf-login").val();
	var senha = $("#senha-login").val();
	
	$("#msg-erro-login").hide();
	
	if(cpf.length == 0 || senha.length == 0 ){
	    html += "Por favor, informe o CPF e Senha para entrar no sistema.";
	    $("#msg-erro-login").html(html).fadeIn(700);
	}else{
	    autenticaUsuario();
	}
	return false;
    });
    
});