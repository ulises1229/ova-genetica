$(document).ready(function(){
    $(".word").draggable();
    $("input").droppable({
    drop: function(event, ui) {
      var name = $(this).attr('name');
      var id = $(ui.draggable).attr('id');
      if(name == id)
        $(this).addClass('drop_good');
        else $(this).addClass('drop_bad');
    }
  });
});
