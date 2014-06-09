/***************************************************************************************************
 * Login Tools
 * @descricao - Funcionalidades da tela de login
 ***************************************************************************************************/
$(document).ready(function(){

    $('#dialog-altera-senha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 280,
	width: 450,
	modal: true,
	resizable: false,
	title: "Alterar Senha",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    },
	    "Alterar": function() {
		var atual = $("#altera-senha-atual").val();
		var nova_senha = $("#altera-nova-senha").val();
		var senha_repetida = $("#repeti-nova-senha").val();
		
		$("#msg-erro-senha").hide();
		
		if(atual.length == 0 || nova_senha.length == 0 || senha_repetida.length == 0){
		    $("#msg-erro-senha").html("Todos os campos são obrigatórios").fadeIn();
		    return false;
		}
		
		if(nova_senha != senha_repetida){
		    $("#msg-erro-senha").html("A nova senha e a repetição da senha não conferem").fadeIn();
		    return false;
		}
		
		if(nova_senha.length < 6){
		    $("#msg-erro-senha").html("Sua senha deve possuir no mínimo 6 caracteres").fadeIn();
		    return false;
		}
		
		alterarSenha();
	    }	    
	}
    });

    $('#dialog-resposta-sucesso-senha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 320,
	modal: true,
	resizable: false,
	title: "Alterar Senha",
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
    
    $('#dialog-msg-senha').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 200,
	width: 320,
	modal: true,
	resizable: false,
	title: "Alterar Senha",
	close: function(event, ui) {},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		$(this).dialog("close");
	    }
	}
    });

    $("#altera-senha").live('click',function(){
	html = "<br /><br />";
	html += "<form id='alteracao-senha'>";
	html += "   <table>";
	html += "	<tr>";
	html += "	    <td><label for='senha'>Senha Atual:</label>&nbsp;</td>";
	html += "	    <td>";
	html += "		<input type='password' name='altera-senha-atual' id='altera-senha-atual' value='' maxlength='40'";
	html += "		    size='40' class='campoTextoAltSenha'/>";
	html += "	    </td>";
	html += "	</tr>";
	html += "	<tr>";
	html += "	    <td><label for='nova_senha'>Nova Senha:</label></td>";
	html += "	    <td>";
	html += "		<input type='password' name='altera-nova-senha' id='altera-nova-senha' value=''";
	html += "		    maxlength='40' size='40' class='campoTextoAltSenha'/>";	
	html += "		<span id='erro-nova-senha' class='msg-erro'></span>";
	html += "	    </td>";
	html += "	</tr>";	
	html += "	<tr>";
	html += "	    <td><label for='re_nova_senha'>Repita a Senha:&nbsp;</label></td>";
	html += "	    <td>";
	html += "		<input type='password' name='repetir-nova-senha' id='repeti-nova-senha' value=''";
	html += "		    maxlength='40' size='40' class='campoTextoAltSenha'/>";	
	html += "		<span id='erro-repita-senha' class='msg-erro'></span>";
	html += "	    </td>";
	html += "	</tr>";
	html += "	<tr>";
	html += "	    <td></td>";
	html += "	    <td><span id='msg-erro-senha' class='msg-erro'></span></td>";
	html += "	</tr>";
	html += "   </table>";
	html += "</form>";
	
	$('#dialog-altera-senha').html(html).dialog('open');	
	return false;
    });  
    
    $("#edita-dados").live('click',function(){
	location.href = RAIZ+'meus_dados/editarCadastro';
    });
    
});