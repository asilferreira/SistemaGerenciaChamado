<%@ page contentType="text/html; charset=iso-8859-1" language="java"%>
<%@ page import="net.sf.json.JSONObject,net.sf.json.JSONArray,Beans.*, Dao.*, java.util.*"%>
<%
		String name = request.getParameter("name");
		JSONArray jsonArr = new JSONArray();
		JSONObject json=new JSONObject();
        List<Funcionario> func = new ArrayList<Funcionario>();
        SgcDao dao = new SgcDao();
        func = dao.prenomes();
        for(Funcionario f1 : func){
        String nome = f1.getLogin();
        int id = f1.getMatricula_1();
		json.put("name",nome);
        json.put("value",id);
        jsonArr.add(json);
        }
		out.println(jsonArr);
        
    
        
%>