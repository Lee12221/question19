$(".gnb li").hover(
    function(){
        $(".sub",this).stop().fadeIn();
    },
    function(){
        $(".sub",this).stop().fadeOut();
    }
);