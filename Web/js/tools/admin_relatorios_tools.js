$(document).ready(function(){    
    
    $("#consultar-relatorios-congressita").live('click',function(){
	window.open(RAIZ+'admin_relatorios/relatoriosCongressitasInscritos');
    });
    
    $("#consultar-relatorios-atividade").live('click',function(){
	window.open(RAIZ+'admin_relatorios/relatoriosCongressitasIsentos');
    });
    
    $("#consultar-relatorios-pendentes").live('click',function(){
	window.open(RAIZ+'admin_relatorios/relatoriosCongressitasPendentes');
    });
    
}); 