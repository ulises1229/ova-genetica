google.load('visualization','1.0',{'packages':['corechart']});

google.setOnLoadCallback(graficar);

function graficar(){
	var data = new google.visualization.DataTable();
    data.addColumn('string','Estagio');
	data.addColumn('number','Moleculas');
	

	data.addRows(
	[
	['G1',4],
	['S',8],
	['G2',8],
	['Profase e prometafase',8],
	['Metafase',8],
	['Anafase',8],
	['Telofase e citocinese',4]
	]
	);
	
	var opciones = {'title':'Gráfica',
	'width':375,'height':410};
	
	var grafica = new google.visualization.LineChart(document.getElementById('charts'));
	grafica.draw(data,opciones);
	
}

function validar(){
	
G1 = document.getElementById("G1").value;
G1C = document.getElementById("G1C").value;
S = document.getElementById("S").value;
SC = document.getElementById("SC").value;
G2 = document.getElementById("G2").value;
G2C = document.getElementById("G2C").value;
Prof = document.getElementById("Prof").value;
ProfC = document.getElementById("ProfC").value;
Met = document.getElementById("Met").value;
MetC = document.getElementById("MetC").value;
Ana = document.getElementById("Ana").value;
AnaC = document.getElementById("AnaC").value;
Telo = document.getElementById("Telo").value;
TeloC = document.getElementById("TeloC").value;
	
	
	if(( G1 == "4") && (G1C == "2C") && (S == "8" ) && (SC == "4C") && (G2 == "8") && (G2C == "4C") && (Prof == "8") && (ProfC == "4C") && (Met == "8") && (MetC == "4C") && (Ana == "8") && (AnaC == "4C") && (Telo == "4") && (TeloC== "2C"))
	
	{    
		document.getElementById('correct').style.visibility='visible';
		document.getElementById('avanzar').style.visibility='visible';
		document.getElementById('charts').style.visibility='visible';
			
	}
	
	else
	
	{
		
		document.getElementById('incorrect').style.visibility='visible';
		
		
	}
}
