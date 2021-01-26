/**
* Función que se ejecuta al arrastrar el elemento. 
**/
function start(e) {
	e.dataTransfer.effecAllowed = 'move'; // Define el efecto como mover (Es el por defecto)
	e.dataTransfer.setData("Text", e.target.id); // Coje el elemento que se va a mover
	e.target.style.opacity = '0.4'; 
}

/**
* Función que se ejecuta se termina de arrastrar el elemento. 
**/
function end(e){
	e.target.style.opacity = ''; // Restaura la opacidad del elemento			
	e.dataTransfer.clearData("Data");			
}

/**
* Función que se ejecuta cuando un elemento arrastrable entra en el elemento desde del que se llama. 
**/
function enter(e) {
	return true;
}

/**
* Función que se ejecuta cuando un elemento arrastrable esta sobre el elemento desde del que se llama. 
* Devuelve false si el objeto se puede soltar en ese elemento y true en caso contrario.
**/
function over(e) {
	if ((e.target.className == "four columns nums" || "six columns nums" || "columnas_grupos nums") || (e.target.id == "cont_cromo"))
		return false;
	else
	return true;   
}
    
/**
* Función que se ejecuta cuando un elemento arrastrable se suelta sobre el elemento desde del que se llama. 
**/
function drop(e){
	e.preventDefault(); // Evita que se ejecute la accion por defecto del elemento soltado.
	var elementoArrastrado = e.dataTransfer.getData("Text");
	e.target.appendChild(document.getElementById(elementoArrastrado)); // Coloca el elemento soltado sobre el elemento desde el que se llamo esta funcion
	//comprobarPuzzle();
}





function reset(e){

    document.getElementById('uno').innerHTML = "1";
    document.getElementById('dos').innerHTML = "2";
    document.getElementById('tres').innerHTML = "3";
}
    



/**
* Muestra un mensaje de advertencia si el navegador no soporta Drag & Drop. (En Windows no lo soportan ni IE ni Safari)
**/
function comprobarnavegador() {
	if( 
		(navigator.userAgent.toLowerCase().indexOf('msie ') > -1) || 
		((navigator.userAgent.toLowerCase().indexOf('safari') > -1) && (navigator.userAgent.toLowerCase().indexOf('chrome') == -1)))
	{
		alert("Tu navegador no soporta correctamente las funciones Drag & Drop de HTML5. Prueba con otro navegador.");
	}

}
$(document).ready(function(){
    $(".instruccion").click(function(){
        $("#instrucciones").css("visibility","visible");
    });
});

$(document).ready(function() {
	$(".instruccionB").click(function(){
		$("#instruccionesB").css("visibility","visible");
	});  
});

$(document).ready(function() {
	$(".instruccionC").click(function(){
		$("#instruccionesC").css("visibility","visible");
	});  
});

$(document).ready(function() {
	$(".instruccionD").click(function(){
		$("#instruccionesD").css("visibility","visible");
	});  
});

$(document).ready(function() {
	$(".instruccionE").click(function(){
		$("#instruccionesE").css("visibility","visible");
	});  
});

$(document).ready(function() {
	$(".instruccionF").click(function(){
		$("#instruccionesF").css("visibility","visible");
	});  
});

$(document).ready(function() {
	$(".instruccionG").click(function(){
		$("#instruccionesG").css("visibility","visible");
	});  
});

function cerrar(){
    if(document.getElementById('instrucciones').style.visibility = 'visible'){
    document.getElementById('instrucciones').style.visibility = 'hidden';
    }
}

function cerrarB(){
    if(document.getElementById('instruccionesB').style.visibility = 'visible'){
    document.getElementById('instruccionesB').style.visibility = 'hidden';
    }
}

function cerrarC(){
    if(document.getElementById('instruccionesC').style.visibility = 'visible'){
    document.getElementById('instruccionesC').style.visibility = 'hidden';
    }
}

function cerrarD(){
    if(document.getElementById('instruccionesD').style.visibility = 'visible'){
    document.getElementById('instruccionesD').style.visibility = 'hidden';
    }
}

function cerrarE(){
    if(document.getElementById('instruccionesE').style.visibility = 'visible'){
    document.getElementById('instruccionesE').style.visibility = 'hidden';
    }
}

function cerrarF(){
    if(document.getElementById('instruccionesF').style.visibility = 'visible'){
    document.getElementById('instruccionesF').style.visibility = 'hidden';
    }
}

function cerrarG(){
    if(document.getElementById('instruccionesG').style.visibility = 'visible'){
    document.getElementById('instruccionesG').style.visibility = 'hidden';
    }
}


function comprobarA(){
    
    if((document.getElementById('crom1').parentNode.id=='uno') &&
        (document.getElementById('crom2').parentNode.id=='dos')&&
        (document.getElementById('crom3').parentNode.id=='tres'))
        
        {
            document.getElementById('verifyB').style.visibility="visible";
            document.getElementById('verifyA').style.visibility="hidden";
			document.getElementById('correctA').style.visibility="visible";
			document.getElementById('B').style.visibility="hidden";
			document.getElementById('InstruccionB').style.visibility="visible";
            document.getElementById('instruccion').style.visibility="hidden";
            
           
        }
    else
    {
    if((document.getElementById('crom1').parentNode.id=='uno'))
        {
            document.getElementById('correct').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect').style.visibility="visible";
        }
              
    if((document.getElementById('crom2').parentNode.id=='dos'))
        {
            document.getElementById('correct2').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect2').style.visibility="visible";
        }
    
    if((document.getElementById('crom3').parentNode.id=='tres'))
        {
            document.getElementById('correct3').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect3').style.visibility="visible";
        }
    }
}


function comprobarB(){
    if((document.getElementById('crom4').parentNode.id=='cuatro') &&
        (document.getElementById('crom5').parentNode.id=='cinco'))
        
        {
            document.getElementById('verifyC').style.visibility="visible";
            document.getElementById('verifyB').style.visibility="hidden";
			document.getElementById('C').style.visibility="hidden";
            document.getElementById('correctB').style.visibility="visible";
            document.getElementById('InstruccionC').style.visibility="visible";
            document.getElementById('InstruccionB').style.visibility="hidden";
        }
    else
    {
    if((document.getElementById('crom4').parentNode.id=='cuatro'))
        {
            document.getElementById('correct4').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect4').style.visibility="visible";
        }
              
    if((document.getElementById('crom5').parentNode.id=='cinco'))
        {
            document.getElementById('correct5').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect5').style.visibility="visible";
        }
    }
}


function comprobarC(){
    
    if((document.getElementById('crom6').parentNode.id=='seis') &&
        (document.getElementById('crom7').parentNode.id=='siete')&&
        (document.getElementById('crom8').parentNode.id=='ocho')&&
        (document.getElementById('crom9').parentNode.id=='nueve')&&
        (document.getElementById('crom10').parentNode.id=='diez')&&
        (document.getElementById('crom11').parentNode.id=='once')&&
        (document.getElementById('crom12').parentNode.id=='doce'))
        
        {
            document.getElementById('verifyD').style.visibility="visible";
            document.getElementById('verifyC').style.visibility="hidden";
			document.getElementById('D').style.visibility="hidden";
            document.getElementById('correctC').style.visibility="visible";
            document.getElementById('InstruccionD').style.visibility="visible";
            document.getElementById('InstruccionC').style.visibility="hidden";
           
        }
    else
    {
    if((document.getElementById('crom6').parentNode.id=='seis'))
        {
            document.getElementById('correct6').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect6').style.visibility="visible";
        }
              
    if((document.getElementById('crom7').parentNode.id=='siete'))
        {
            document.getElementById('correct7').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect7').style.visibility="visible";
        }
    
    if((document.getElementById('crom8').parentNode.id=='ocho'))
        {
            document.getElementById('correct8').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect8').style.visibility="visible";
        }
        
    if((document.getElementById('crom9').parentNode.id=='nueve'))
        {
            document.getElementById('correct9').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect9').style.visibility="visible";
        }
        
    if((document.getElementById('crom10').parentNode.id=='diez'))
        {
            document.getElementById('correct10').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect10').style.visibility="visible";
        }
        
    if((document.getElementById('crom11').parentNode.id=='once'))
        {
            document.getElementById('correct11').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect11').style.visibility="visible";
        }
        
    if((document.getElementById('crom12').parentNode.id=='doce'))
        {
            document.getElementById('correct12').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect12').style.visibility="visible";
        }
    }
}

function comprobarD(){
    
    if((document.getElementById('crom13').parentNode.id=='trece') &&
        (document.getElementById('crom14').parentNode.id=='catorce')&&
        (document.getElementById('crom15').parentNode.id=='quince'))
        
        {
            document.getElementById('verifyE').style.visibility="visible";
            document.getElementById('verifyD').style.visibility="hidden";
			document.getElementById('E').style.visibility="hidden";
            document.getElementById('correctD').style.visibility="visible";
            document.getElementById('InstruccionE').style.visibility="visible";
            document.getElementById('InstruccionD').style.visibility="hidden";
        }
    else
    {
    if((document.getElementById('crom13').parentNode.id=='trece'))
        {
            document.getElementById('correct13').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect13').style.visibility="visible";
        }
              
    if((document.getElementById('crom14').parentNode.id=='catorce'))
        {
            document.getElementById('correct14').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect14').style.visibility="visible";
        }
    
    if((document.getElementById('crom15').parentNode.id=='quince'))
        {
            document.getElementById('correct15').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect15').style.visibility="visible";
        }
    }
}

function comprobarE(){
    
    if((document.getElementById('crom16').parentNode.id=='dieciseis') &&
        (document.getElementById('crom17').parentNode.id=='diecisiete')&&
        (document.getElementById('crom18').parentNode.id=='dieciocho'))
        
        {
            document.getElementById('verifyF').style.visibility="visible";
            document.getElementById('verifyE').style.visibility="hidden";
			document.getElementById('F').style.visibility="hidden";
            document.getElementById('correctE').style.visibility="visible";
            document.getElementById('InstruccionF').style.visibility="visible";
            document.getElementById('InstruccionE').style.visibility="hidden";
        }
    else
    {
    if((document.getElementById('crom16').parentNode.id=='dieciseis'))
        {
            document.getElementById('correct16').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect16').style.visibility="visible";
        }
              
    if((document.getElementById('crom17').parentNode.id=='diecisiete'))
        {
            document.getElementById('correct17').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect17').style.visibility="visible";
        }
    
    if((document.getElementById('crom18').parentNode.id=='dieciocho'))
        {
            document.getElementById('correct18').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect18').style.visibility="visible";
        }
    }
}

function comprobarF(){
    
    if((document.getElementById('crom19').parentNode.id=='diecinueve') &&
        (document.getElementById('crom20').parentNode.id=='veinte'))
        
        {
            document.getElementById('verifyG').style.visibility="visible";
            document.getElementById('verifyF').style.visibility="hidden";
			document.getElementById('G').style.visibility="hidden";
            document.getElementById('correctF').style.visibility="visible";  
            document.getElementById('InstruccionG').style.visibility="visible";
            document.getElementById('InstruccionF').style.visibility="hidden";
        }
    else
    {
    if((document.getElementById('crom19').parentNode.id=='diecinueve'))
        {
            document.getElementById('correct19').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect19').style.visibility="visible";
        }
              
    if((document.getElementById('crom20').parentNode.id=='veinte'))
        {
            document.getElementById('correct20').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect20').style.visibility="visible";
        }
    }
}

function comprobarG(){
    
    if((document.getElementById('crom21').parentNode.id=='veintiuno') &&
        (document.getElementById('crom22').parentNode.id=='veintidos')&&
        (document.getElementById('cromxy').parentNode.id=='xy'))
        
        {
            
			document.getElementById('success').style.visibility="visible";
			document.getElementById('felicidades').style.visibility="visible";
			
           
        }
    else
    {
    if((document.getElementById('crom21').parentNode.id=='veintiuno'))
        {
            document.getElementById('correct21').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect21').style.visibility="visible";
        }
              
    if((document.getElementById('crom22').parentNode.id=='veintidos'))
        {
            document.getElementById('correct22').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrect22').style.visibility="visible";
        }
    
    if((document.getElementById('cromxy').parentNode.id=='xy'))
        {
            document.getElementById('correctxy').style.visibility="visible";
        }
    else
        {
            document.getElementById('incorrectxy').style.visibility="visible";
        }
    }
}



                  
  
    
               
         


