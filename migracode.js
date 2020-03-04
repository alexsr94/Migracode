function selectdata (a) {
	var i, tohidee;
	tohide = document.getElementsByClassName("tohide");
	
	
	if(document.getElementById(a).style.display=="none"){
		for (i = 0; i < tohide.length; i++) {
    tohide[i].style.display = "none";
  }
		
		
  document.getElementById(a).style.display = "block";} else
  {
	  for (i = 0; i < tohide.length; i++) {
    tohide[i].style.display = "none";
  }
	  document.getElementById(a).style.display ="none";
  document.getElementById("tema0").style.display ="block";}
	
}

function bio(){ 
	
		document.getElementById("information").style.display="none";
	document.getElementById("iframe").style.display="block";
	document.getElementById("publicacion1").style.display="block";
	document.getElementById("bio").style.color="black";
	document.getElementById("bio").style.cursor="default";
	document.getElementById("info").style.color="#385898";
	document.getElementById("info").style.cursor="pointer";
		
	
	
}
function info(){ 
	
		document.getElementById("information").style.display="block";
	document.getElementById("iframe").style.display="none";
	document.getElementById("publicacion1").style.display="none";
	document.getElementById("bio").style.color="#385898";
	document.getElementById("bio").style.cursor="pointer";
	document.getElementById("info").style.color="black";
	document.getElementById("info").style.cursor="default";
		
	
	
}

function calciva(){
	var base = document.getElementById("ibase").value;
	document.getElementById("iva").value = (base*0.21).toFixed(2);
	
	
}
function agregarfactura(){
	var selector = document.getElementById("ingresos").value;
	
	var ibase = document.getElementById("ibase").value;
	var iva = document.getElementById("iva").value;
	var i = 0;
	var suma= document.getElementsByClassName("basei");
	let total= 0;
	let totaliva=0;
	
	
	var data = "<tr><td class='basei'>"+ibase+"</td><td class='ivai'>"+iva+"</td><td class='total'>"+((+ibase)+(+iva))+"</td></<tr>";
	
	
	if(selector=="ingresos"){
		
		suma = document.getElementsByClassName("basei");
		sumaiva= document.getElementsByClassName("ivai");
		data = "<tr><td class='basei'>"+ibase+"</td><td class='ivai'>"+iva+"</td><td class='total'>"+((+ibase)+(+iva))+"</td></<tr>";
		
		$('#tingresos').append(data);
		
		
		
		
		for (i;suma.length;i++){
			total+=(+suma[i].textContent);
			
			document.getElementById("numero1").innerHTML= total+"€";
			
			
		
	}
		
		
		
		
		
	} else if(selector=="gastos"){
		
		data="<tr><td class='baseg'>"+ibase+"</td><td class='ivag'>"+iva+"</td><td class='total'>"+((+ibase)+(+iva))+"</td></<tr>";
		suma =document.getElementsByClassName("baseg");
		sumaiva= document.getElementsByClassName("ivag");
		$('#tgastos').append(data);
		
		
		for (i;suma.length;i++){
			total+=(+suma[i].textContent);
			
			document.getElementById("numero2").innerHTML= total+"€";
			
		
	}
		
		
		
		
		
	}
	
	
	
	
}