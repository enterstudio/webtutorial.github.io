$(document).ready(function(){
    //auto input style #latarbelakang
    $("#asalkode-background-color").keyup(function(){
        $("#style-latarbelakang").html($("#asalkode-background-color").val());
        
        //koreksi properti #latarbelakang
        warnalatarbelakang_elem = document.getElementById("latarbelakang");
        warnalatarbelakang_val  = window.getComputedStyle(latarbelakangasal,null).getPropertyValue("background-color");
    });
});