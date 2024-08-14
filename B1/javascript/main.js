$(function(){
    $(".main > li").mouseover(function(){
        $(".sub").stop().slideDown();
    })
    $(".main > li").mouseout(function(){
        $(".sub").stop().slideUp();
    })

    var n = 0 ;

    var count = $(".left_move li").length - 1;
    console.log(count);

    // setInterval(function(){

    //     if(n == count){
    //         n=0;
    //     }else{
    //         n++;
    //     }//if
    //     console.log("n :",n);

    //     $(".left_move").animate({left : n*(-1200) + "px"}, 500)

    // }, 3000)


    setInterval(function(){
        $(".left_move").animate({left : "-1200px"}, 500, function(){
            $(".left_move").append($(".left_move li").eq(0));
            $(".left_move").css({left : "0"});
        })
    }, 3000)

    //탭
    $(".cont1 h2").click(function(){
        $(".cont1 h2").removeClass("on");
        $(this).addClass("on")

        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"})

    })


    $(".p_click").click(function(){
        $(".pop").slideDown();
    })
    $(".close").click(function(){
        $(".pop").slideUp();
    })
    





})//jQ end