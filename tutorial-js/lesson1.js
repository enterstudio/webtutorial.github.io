$(document).ready(function(){
    $("#nilai_awal").keyup(function(){
        $("#hasil_nilai").html($("#nilai_awal").val());
    }); 
});