<script>
function allowDrop(ev) {
  /* The default handling is to not allow dropping elements. */
  /* Here we allow it by preventing the default behaviour. */
  ev.preventDefault();
}

function drag(ev) {
  /* Here is specified what should be dragged. */
  /* This data will be dropped at the place where the mouse button is released */
  /* Here, we want to drag the element itself, so we set it's ID. */
  ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text/html");
  /* If you use DOM manipulation functions, their default behaviour it not to 
     copy but to alter and move elements. By appending a ".cloneNode(true)", 
     you will not move the original element, but create a copy. */
    var con=1;
    if (typeof(nombre)=="undefined")
    {
    var nombre = "nodeCopy";
    nombre = document.getElementById(data).cloneNode(true);
    nombre.id = "newId";
    var id=1;
    nombre.setAttribute("draggable","false");
    nombre.setAttribute("width","3%");
    nombre.setAttribute("margin-right","3px");
    ev.target.appendChild(nombre);
    }
    else{
       nombre.concat(con) = document.getElementById(data).cloneNode(true);
        con++;
        nombre.id= "newId".concat(id);
        id++;
        nombre.setAttribute("draggable","false");
        nombre.setAttribute("width","3%");
        nombre.setAttribute("name","img");
        nombre.setAttribute("margin-right","3px");
        ev.target.appendChild(nombre);
    }
}
    
    function revisar(){
        var caja = document.getElementById('div1');
        var  imgs = caja.document.getElementsByTagName("img").length;
        if(imgs.length==2)
        alert("correcto");
    }

</script>