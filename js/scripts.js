
$(document).on("click", ".sound", function(){
    console.log("salome");
    console.log($('#speaker').attr('src'));

    if($('#speaker').attr('src')=="media/images/icon/speakerOff.png"){
        $('#speaker').attr('src',"media/images/icon/speaker.png");
        var bool = $("#video").prop("muted");
        $("#video").prop("muted",!bool);
    }
    else{
        $('#speaker').attr('src',"media/images/icon/speakerOff.png");
        var bool = $("#video").prop("muted");
        $("#video").prop("muted",!bool);
    }
})

$(document).on("click", ".menu-icon", function(){
    if($(".opacity-menu").css("width")=="0px"){
        $(".opacity-menu").animate({width: "70%"}, 800);
    }
    else{
        $(".opacity-menu").animate({width: "0px"}, 800);
    }
   
})

$(document).on("click", "#menu li", function(){
    var pageLink=$(this).attr("link");
    window.location=pageLink;

})
$(document).on("click", ".magic", function(){
    var pageLink=$(this).attr("link");
    window.location=pageLink;

})