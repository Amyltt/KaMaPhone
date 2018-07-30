$(document).ready(Ready)

function Ready () {
  //点击出现侧边菜单
    $('#nav-btn').click(() => {

        let he = $('#side-nav').position().left
        console.log(he)
        if (he < 0) {
            $('#side-nav').animate({left: '0'})
        } else {
            $('#side-nav').animate({left: '-500px'})
        }
      return false
    })

    //产品二级菜单出现隐藏
  $('.slide-ul').click((e)=>{
      let isActive = $(e.currentTarget).hasClass('active')
      if(isActive){
        $('.more-nav').removeClass('active')
        $('.second-product').hide()
      }else{
        $('.more-nav').addClass('active')
        $('.second-product').show()
      }
  })
  //二级菜单点击效果
  $('.product-nav a,.about-nav a').click((e)=>{

  })
  //轮播图切换
  let $dragBln = false;
  $(".slide-ul").touchSlider({
    flexible : true,
    speed : 200,
    btn_prev : $("#btn_prev"),
    btn_next : $("#btn_next"),
    paging : $(".carousel-items span"),
    counter : function (e){
      $(".carousel-items span").removeClass("active").eq(e.current-1).addClass("active");//图片顺序点切换
    }
  });
  $(".slide-ul").bind("mousedown", function() {
    $dragBln = false;
  });

  $(".slide-ul").bind("dragstart", function() {
    $dragBln = true;
  });
  $(".carousel-wrap>a").click(function(){
    if($dragBln) {
      return false;
    }
  });

  let  timer = setInterval(function(){
    $("#btn_next").click();
  }, 5000);
  $(".slide-ul").bind("touchstart",function(){
    clearInterval(timer);
  }).bind("touchend", function(){
    timer = setInterval(function(){
      $("#btn_next").click();
    }, 5000);
  });

  //登陆注册切换
  $('.go-register,.go-login').click((e)=>{
    let $t = $(e.currentTarget)
    let type = $t.data('type')
    if(type==='login'){
      if(!$t.hasClass('active')){
        $t.addClass('active')
        $('.go-register').removeClass('active')
        $('.login-box').show()
        $('.register-box').hide()
      }
    }
    if(type==='register'){
      if(!$t.hasClass('active')){
        $t.addClass('active')
        $('.go-login').removeClass('active')
        $('.login-box').hide()
        $('.register-box').show()
      }
    }
  })
}
