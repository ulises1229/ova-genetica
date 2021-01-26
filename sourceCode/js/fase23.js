function validar() {

incisoa = document.getElementById("A").value;
incisob = document.getElementById("B").value;
incisoc = document.getElementById("C").value;

if(( incisoa == "C") && ( incisob == "A") && ( incisoc == "B")) {
	
	document.getElementById('correct').style.visibility='visible';
	document.getElementById('avanzar').style.visibility='visible';
}

else {
	
	document.getElementById('incorrect').style.visibility='visible';
	
}

}