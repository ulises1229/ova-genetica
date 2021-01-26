$(document).ready(function(){
    $(".avanzar").hide();
    $(".avanzar").bind('click',false);
    $(".avanzar").addClass("disabled");
    $(".avanzar").click(function(){
        if($(this).hasClass("disabled"))
            alert("Debes completar correctamente todos los campos para poder avanzar");
        else alert("Correcto!, ya puedes avanzar")
    });

    var ploidia =['2n','2n','2n','2n','2n','8n','6n','2n','4n','2n','2n','2n'];
    var numero =['78','60','40','38','64','40','46','48','88','78','38','78'];
    var tipo =['Euploidía','Euploidía','Euploidía','Euploidía',
            'Euploidía','Euploidía','Poliploidia','Poliploidia','Poliploidia','Poliploidia','Poliploidia','Poliploidia'];

    var id1 = "ploidia";
    var id2 = "numero";
    var id3 = "tipo";

    $("#random").click(function(){
        $(':input').val('');
        var nums1 = [];
        var nums2 = [];
        var nums3 = [];
            for (var i = 0;i<=3;i++){
                nums1[i] = Math.floor((Math.random() * 11));
                nums2[i] = Math.floor((Math.random() * 11));
                nums3[i] = Math.floor((Math.random() * 11));

                var hint1 = id1.concat(nums1[i]);
                var hint2 = id2.concat(nums2[i]);
                var hint3 = id3.concat(nums3[i]);

                var answ1= ploidia[nums1[i]];
                var answ2 = numero[nums2[i]];
                var answ3 = tipo[nums3[i]];

                $("#"+hint1).val(answ1);
                $("#"+hint2).val(answ2);
                $("#"+hint3).val(answ3);
            }
    });
    $("#verificar").click(function(){
        $('input').each(function() {
            if(!$(this).val()){
                alert('Algunos campos están vacíos');
                $(this).addClass("wrong");
                return false;
            }
        });
        for(var i = 0; i<12;i++){
            var r1 = $("#"+id1+i).val();
            var r2 = $("#"+id2+i).val();
            var r3 = $("#"+id3+i).val();
                if(r1 == ploidia[i])
                    $("#"+id1+i).addClass("good");
                else $("#"+id1+i).addClass("wrong");

                if(r2 == numero[i])
                    $("#"+id2+i).addClass("good");
                else $("#"+id2+i).addClass("wrong");

                if(r3 ==tipo[i])
                    $("#"+id3+i).addClass("good");
                else $("#"+id3+i).addClass("wrong");

        }
        $('input').each(function() {
            if($(this).hasClass("good")){
                $(this).attr('disabled',true);
                $(".avanzar").removeClass("disabled");
                $(".avanzar").show();
                $('.avanzar').unbind('click', false);
            }  else{
                $(".avanzar").bind('click',false);
                $(".avanzar").addClass("disabled");
            }
        });
    });
});
