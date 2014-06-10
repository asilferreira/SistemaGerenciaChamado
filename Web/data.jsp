<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page import="Beans.*, Dao.*, java.util.*,java.text.*"%>
<%
	Date dataAtual = new Date(); 
SimpleDateFormat sdf = new SimpleDateFormat("EE dd MMMM yyyy");
String dataStr = sdf.format(dataAtual);
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>

	<%!
	public String fncMES(int mes){
		
		String retorno =""; 
		
			switch(mes){ 
			
			case 1: retorno="Janeiro";break; 
			case 2: retorno="Fevereiro";break; 
			case 3: retorno="Março";break; 
			case 4: retorno="Abril";break; 
			case 5: retorno="Maio";break; 
			case 6: retorno="Junho";break; 
			case 7: retorno="Julho";break; 
			case 8: retorno="Agosto";break; 
			case 9: retorno="Setembro";break; 
			case 10: retorno="Outubro";break; 
			case 11: retorno="Novembro";break; 
			case 12: retorno="Dezembro";break; 
			}
			return retorno; 
			}
	%>
	<h4>
		<%
				int mes = Integer.parseInt(new SimpleDateFormat("M").format(new Date()));
				int dia = Integer.parseInt(new SimpleDateFormat("dd").format(new Date()));
				int ano = Integer.parseInt(new SimpleDateFormat("yyyy").format(new Date()));
				out.println("Rio de Janeiro, " + dia + " de " + fncMES(mes) + " de " + ano);
		%>
	</h4>

</body>
</html>