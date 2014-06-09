/***************************************************************************************************
 * Inscricao de poster Tools
 * @descricao - Funcionalidades da tela de administração
 ***************************************************************************************************/
$(document).ready(function(){
    
    $('#dialog-msg').dialog({
	bgiframe: true,
	autoOpen: false,
	height: 185,
	width: 350,
	modal: true,
	resizable: false,
	title: "Atenção!",
	close: function(event, ui) {location.href = RAIZ+'congresso/inscricaoPoster';},
	position: 'center',
	buttons: {
	    "Fechar": function() {
		location.href = RAIZ+'congresso/inscricaoPoster';
	    }
	}
    });
    
    $("#atualizar_poster").click(function(){
	atualizarPoster();
	return false;
    });
    
    $("#cancelar").live('click',function(){
	location.href = RAIZ+'congresso';
    });
    
    $("#form-inscricao-poster").validate({
	rules:{
	    titulo_trabalho:{ required: true },
	    nome_responsavel:{ required: true },
	    servico_instituicao:{ required: true },
//	    categoria_artigo:{ required: true },
	    area_profissional:{ required: true },
	    area_tematica:{ required: true },
	    nome_autor_principal:{ required: true },
	    nome_poster_autor_principal:{ required: true },
	    introducao_poster:{ required: true },
	    objetivo_poster:{ required: true },
	    metodo_poster:{ required: true },
	    conclusao_poster:{ required: true },
	    trabalho_oral_poster:{ required: true }
	},
	messages:{
	    titulo_trabalho:{ required: "Obrigatório" },
	    nome_responsavel:{ required: "Obrigatório" },
	    servico_instituicao:{ required: "Obrigatório" },
//	    categoria_artigo:{ required: "Obrigatório" },
	    area_profissional:{ required: "Obrigatório" },
	    area_tematica:{ required: "Obrigatório" },
	    nome_autor_principal:{ required: "Obrigatório" },
	    nome_poster_autor_principal:{ required: "Obrigatório" },
	    introducao_poster:{ required: "Obrigatório" },
	    objetivo_poster:{ required: "Obrigatório" },
	    metodo_poster:{ required: "Obrigatório" },
	    conclusao_poster:{ required: "Obrigatório" },
            trabalho_oral_poster:{ required: "Marque ao menos um" }
	},
	
	submitHandler: function(form){
            
	    inscricaoPoster();
	} 
    });
    
});

function inicia (){
    total = 2500;
}

function max(txtarea) {	
    tam = 0;
    lista = document.getElementsByClassName('resumo');

    for (i=0; i < lista.length; i++)
	tam += lista[i].value.length;

    if (tam > total){
	toRemove = tam - total;
	len = txtarea.value.length;
	txtarea.value = txtarea.value.substring(0,len-toRemove);
	tam = total;
    }
    Digitado.innerHTML = tam;
    Restante.innerHTML = total - tam;	
}