google.load('visualization','1.0',{'packages':['corechart']});

google.setOnLoadCallback(graficar);

function graficar(){
	var data = new google.visualization.DataTable();
    data.addColumn('string','Estagio');
	data.addColumn('number','Moleculas');
	

	data.addRows(
	[
	['1',4],
	['S',8],
	['G2',8],
	['Profase 1',8],
	['Metafase 1',8],
	['Anafase 1',8],
	['Telofase 1 e citocinese 1',4],
	['Profase 1',4],
	['Metafase 2',4],
	['Anafase 2',4],
	['Telofase 1 e citocinese 1',2]
	]
	);
	
	var opciones = {'title':'Gráfica',
	'width':375,'height':410};
	
	var grafica = new google.visualization.LineChart(document.getElementById('charts'));
	grafica.draw(data,opciones);
	
}


function validar(){
	
UNO = document.getElementById("UNO").value;
UNOC = document.getElementById("UNOC").value;
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
Prof2 = document.getElementById("Prof2").value;
Prof2C = document.getElementById("Prof2C").value;
Met2 = document.getElementById("Met2").value;
Met2C = document.getElementById("Met2C").value;
Ana2 = document.getElementById("Ana2").value;
Ana2C = document.getElementById("Ana2C").value;
Telo2 = document.getElementById("Telo2").value;
TeloC2 = document.getElementById("TeloC2").value;
	
	
	if((UNO == "4") && (UNOC == "2C") && (S == "8" ) && (SC == "4C") && (G2 == "8") && (G2C == "4C") && (Prof == "8") && (ProfC == "4C") && (Met == "8") && (MetC == "4C") && (Ana == "8") && (AnaC == "4C") && (Telo == "4") && (TeloC == "2C") && (Prof2 == "4") && (Prof2C == "2C") && (Met2 == "4") &&(Met2C == "2C") && (Ana2 == "4") && (Ana2C == "2C") && (Telo2 == "2") && (TeloC2 == "1C")) 
	
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
	