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
		json.put("name",nome);
        json.put("value",nome);
        jsonArr.add(json);
        }
		out.println(jsonArr);
        
    
        
%>