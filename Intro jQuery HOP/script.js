$(document).ready(function(){    
    $("h1").dblclick(function(){
        $(this).css("color", "blue");
    });
});

$(document).ready(function(){    
    $("h1").hover(function(){
        $(this).css("font-size", "400%");
    }, function(){
        $(this).css("font-size", "200%");        
    });
});