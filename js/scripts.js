$(document).ready(function(){
    var pnf=$(".container_style").hasClass("404");
    if(pnf){
        $(".menu").css("display", "none");
        $(".allRight").css("display", "none");
    }
})


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
    $(".social-menu").animate({width: "0px",height: "0px", opacity: "0"}, 800);
    $(".search-menu").animate({width: "0px"}, 800);
    if($(".opacity-menu").css("width")=="0px"){
        $(".opacity-menu").animate({width: "70%"}, 800);
        $(".menu").animate({width: "340px"}, 800);
    }
    else{
        $(".opacity-menu").animate({width: "0px"}, 800);
        $(".menu").animate({width: "150px"}, 800);
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


$( "#fb" ).mouseover( function(){ $("#fb").attr("src", "media/images/icon/fb.png") }).mouseout(function(){ $("#fb").attr("src", "media/images/icon/fb1.png")});
$( "#inst" ).mouseover( function(){ $("#inst").attr("src", "media/images/icon/inst.png") }).mouseout(function(){ $("#inst").attr("src", "media/images/icon/inst1.png")});
$( "#you" ).mouseover( function(){ $("#you").attr("src", "media/images/icon/you.png") }).mouseout(function(){ $("#you").attr("src", "media/images/icon/you1.png")});
$( "#close-img" ).mouseover( function(){ $("#close-img").attr("src", "media/images/icon/close1.png") }).mouseout(function(){ $("#close-img").attr("src", "media/images/icon/close.png")});

$(document).on("click", ".social", function(){
    $(".search-menu").animate({width: "0px"}, 800);
    $(".opacity-menu").animate({width: "0px"}, 800);
    $(".menu").animate({width: "150px"}, 800);
    if($(".social-menu").css("width")=="0px"){
        $(".social-menu").animate({width: "120px",height: "130px", opacity: "1" }, 800);
   
    }
    else{
        $(".social-menu").animate({width: "0px",height: "0px", opacity: "0"}, 800);
       
    }
})
$(document).on("click", ".search", function(){
    $(".opacity-menu").animate({width: "0px"}, 800);
    $(".menu").animate({width: "150px"}, 800);
    $(".social-menu").animate({width: "0px",height: "0px", opacity: "0"}, 800);
    if($(".search-menu").css("width")=="0px"){
        $(".search-menu").animate({width: "95%",}, 800);
   
    }
    else{
        $(".search-menu").animate({width: "0px"}, 800);
       
    }
})
$(document).on("click", "#close-img", function(){
        $(".search-menu").animate({width: "0px"}, 800);

})
$(document).on("click", "#duration-number-arrow", function(){
    
    if( $(".numbers").css("width")=="4px"){
        $(".numbers").animate({ width: "60%"}, 800);
        setTimeout(function(){
            $(".numbers").css("padding", "5px 20px");
            $(".numbers").css("display", "flex");
            }, 200);
       
    }
    else{
        $(".numbers").animate({ width: "4px"}, 800);
        setTimeout(function(){
        $(".numbers").css("padding", "0px 0px");
        $(".numbers").css("display", "none");
        }, 500);
      
    }
})
var basic_opts = {
    mapKey: 'alt'
};

var initial_opts = $.extend({},basic_opts, 
    { 
        staticState: true,
        fill: false,
        stroke: true,
        strokeWidth: 2,
        strokeColor: 'ff0000'
    });
$('#map').mapster(initial_opts)
    .mapster('set',true,'imereti', {
        fill: true,
        fillColor: '00ff00'
    })
    .mapster('snapshot')
    .mapster('rebind',basic_opts);