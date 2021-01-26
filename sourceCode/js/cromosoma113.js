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
	if ((e.target.className == "crom2_f1 nums") || (e.target.id == "cont_cromo"))
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


function comprobarPuzzle(){
	if((document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='uno'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='uno'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='uno'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='uno'))) && 
       (document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='dos'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='dos'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='dos'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='dos'))) &&
       (document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi1'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi1'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi1'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='tres'))) |
       (document.getElementById('subi2'),(document.getElementById('subi4'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi4'),(document.getElementById('subi1').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi4').parentNode.id=='tres'))) |
       (document.getElementById('subi3'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi1'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi3').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi2'),(document.getElementById('subi1').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi2').parentNode.id=='tres'))) |
       (document.getElementById('subi4'),(document.getElementById('subi3'),(document.getElementById('subi1').parentNode.id=='tres'))) &&
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='cuatro'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='cuatro'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='cuatro'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='cuatro'))) &&
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='cinco'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='cinco'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='cinco'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='cinco'))) &&
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro1'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro1'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro1'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='seis'))) |
       (document.getElementById('acro2'),(document.getElementById('acro4'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro4'),(document.getElementById('acro1').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro4').parentNode.id=='seis'))) |
       (document.getElementById('acro3'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro1'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro3').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro2'),(document.getElementById('acro1').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro2').parentNode.id=='seis'))) |
       (document.getElementById('acro4'),(document.getElementById('acro3'),(document.getElementById('acro1').parentNode.id=='seis'))))
       
       

	{
        document.getElementById('correct').style.visibility='visible';
        document.getElementById('correcto').style.visibility='visible';
        document.getElementById('avanzar').style.visibility='visible';
	}
    
    else 
        document.getElementById('incorrect').style.visibility='visible';
        //document.getElementById('incorrecto').style.visibility='visible';
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