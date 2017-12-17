

$(function(){
    $(".t").mouseover(function(){
        //鼠标指向时图片的样式发生改变
        $(this).css({width:433,height:576,"background-size":433,"z-index":1}).siblings(".t").stop().animate({opacity:0},400);
    })
    //鼠标离开后图片的样式发生改变
    $(".t").mouseleave(function(){
        $("this").css({width:63,height:355,"background-size":267})
        $(".t").stop().css({width:63,height:355,"background-size":267,"z-index":0}).animate({opacity:1},400);
    })

})




$(function(){
    $(".tab-gt").mouseover(function(){
        $(".tab-show").css({"transform":"rotate(0deg)"})
    })
    $(".tab-lt").mouseover(function(){
        $(".tab-show").css({"transform":"rotate(180deg)"})
    })
})
$(function(){
    $(".tab-gt").mouseover(function(){
        $(".r-1").stop().animate({top:180},400)
        $(".r-2").stop().animate({top:0},400)
    })
    $(".tab-lt").mouseover(function(){
        $(".r-1").stop().animate({top:0},400)
        $(".r-2").stop().animate({top:-180},400)
    })
    $(".tab-gt").mouseover(function(){
        $(".s-1").stop().animate({top:-250},400)
        $(".s-2").stop().animate({top:0},400)
    })
    $(".tab-lt").mouseover(function(){
        $(".s-1").stop().animate({top:0},400)
        $(".s-2").stop().animate({top:250},400)
    })
})




//圆
//壹
$(function(){
     $(".yuan-l").mouseover(function() {
         $(".zi-l").css({color: "#fff"})
         $(".yuan-l").css({"background-color": "#3eabff", "border": "1px solid #3eabff"})
         $(".zhao-l").css({"opacity":1})
         $(".zhao-l").siblings().stop().css({"opacity":0})
     })
    $(".yuan-l").mouseout(function(){
        $(".yuan-l").css({
            "background-color":"#ffffff",
            "border": "1px solid #3eabff"
        })
        $(".zi-l").css({color:"#3eabff"})
    })
})
//贰
$(function(){
    $(".yuan-r").mouseover(function() {
        $(".zi-r").css({color: "#fff"})
        $(".yuan-r").css({"background-color": "#3eabff", "border": "1px solid #3eabff"})
        $(".zhao-r").css({"opacity":1})
        $(".zhao-r").siblings().stop().css({"opacity":0})
    })
    $(".yuan-r").mouseout(function(){
        $(".yuan-r").css({
            "background-color":"#ffffff",
            "border": "1px solid #3eabff"
        })
        $(".zi-r").css({color:"#3eabff"})
    })
})
//叁
$(function(){
    $(".yuan-s").mouseover(function() {
        $(".zi-s").css({color: "#fff"})
        $(".yuan-s").css({"background-color": "#3eabff", "border": "1px solid #3eabff"})
        $(".zhao-s").css({"opacity":1})
        $(".zhao-s").siblings().stop().css({"opacity":0})
    })
    $(".yuan-s").mouseout(function(){
        $(".yuan-s").css({
            "background-color":"#ffffff",
            "border": "1px solid #3eabff"
        })
        $(".zi-s").css({color:"#3eabff"})
    })
})
//肆
$(function(){
    $(".yuan-f").mouseover(function() {
        $(".zi-f").css({color: "#fff"})
        $(".yuan-f").css({"background-color": "#3eabff", "border": "1px solid #3eabff"})
        $(".zhao-f").css({"opacity":1})
        $(".zhao-f").siblings().css({"opacity":0})
    })
    $(".yuan-f").mouseout(function(){
        $(".yuan-f").css({
            "background-color":"#ffffff",
            "border": "1px solid #3eabff"
        })
        $(".zi-f").css({color:"#3eabff"})
    })
})

//旋转木马
var config = [{
    width: 400,
    top: 20,
    left: 50,
    opacity: 0.2,
    zIndex: 2
}, //0
    {
        width: 600,
        top: 70,
        left: 0,
        opacity: 0.8,
        zIndex: 3
    }, //1
    {
        width: 800,
        top: 100,
        left: 200,
        opacity: 1,
        zIndex: 4
    }, //2
    {
        width: 600,
        top: 70,
        left: 600,
        opacity: 0.8,
        zIndex: 3
    }, //3
    {
        width: 400,
        top: 20,
        left: 750,
        opacity: 0.2,
        zIndex: 2
    } //4
];
// 1 先把所有的图片散开
window.onload = function() {
    var imgList = $id("slide").children[0].children;
    function rotate() {
        for (var i = 0; i < imgList.length; i++) {
            animatev5(imgList[i], config[i]);
        }
    }

    rotate();

    $id("wrap").onmouseover = function() {
        animatev5($id("arrow"), { "opacity": 1 });
    }
    $id("wrap").onmouseout = function() {
        animatev5($id("arrow"), { "opacity": 0 });
    }

    $id("arrRight").onclick = function() {
        config.push(config.shift());
        rotate();
    }

    $id("arrLeft").onclick = function(){
        config.unshift(config.pop());
        rotate();
    }
}

//电梯导航
$(document).ready(function() {
    var num=null;
    $(".subnav li").each(function(index, el) {
        num=-index*55;
        $(el).css("background-position","0px "+num+"px");
    });
    var T=null;
    $(window).scroll(function(event) {
        T=$(document).scrollTop();
        if(T>=$(".mei").offset().top)
        {
            $(".subnav li").eq(4).addClass('current').siblings().removeClass();
        }
        else if(T>=$(".fu").offset().top)
        {
            $(".subnav li").eq(3).addClass('current').siblings().removeClass();
        }
        else if(T>=$(".jia").offset().top)
        {
            $(".subnav li").eq(2).addClass('current').siblings().removeClass();
        }
        else if(T>=$(".dian").offset().top)
        {
            $(".subnav li").eq(1).addClass('current').siblings().removeClass();
        }
        else if(T>0)
        {

            $(".subnav").fadeIn();
        }
        else
        {
            $(".subnav").fadeOut();
        }
    });
    $(".subnav li").click(function(event) {

        $("body,html").stop().animate({
            "scrollTop":$(".jd").eq($(this).index()).offset().top
        },2000);
    });
    $(".back").click(function(event) {
        $("body,html").stop().animate({"scrollTop":0},100)
    });
});
