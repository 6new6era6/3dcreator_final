$(document).ready(function(){
  aktion = "0";
  aktion2 = "1";
  meldung1 = "0";
  eetest = $('.aktion2').width();
  eetest2= ('0')-eetest;
  eetest3= eetest-("77");
  setTimeout( function(){ 
    $(".aktion2").css({right:eetest2});
    $(".aktion2").css({left:"auto"});
    $(".aktion2").animate({right:"0",left:"auto"},1000);
    $(".aktion_btn2").animate({right:eetest3},1000);
  }  , 3000 );
 
  
  jQuery('nav').meanmenu();
  $('a[href^=#]').bind('click.smoothscroll',function (e) {
    e.preventDefault();
    var target = this.hash,
        $target = $(target);
    $('html, body').stop().animate({'scrollTop': $target.offset().top}, 1000, 'swing', function () {
      window.location.hash = target;
    });
  });
  
  $('.aktion_btn').click( 
    function(){
      if(aktion=="1"){
      test = $('.aktion').width();
          test2= ('0')-test;
          $(".aktion").animate({right:test2},1000);
          $(".aktion_btn").animate({right:"-77"},1000);
      aktion = "0";
     } else{
          test = $('.aktion').width();
          test2= ('0')-test;
          test3= test-("77");
          $(".aktion").css({right:test2});
          $(".aktion").css({left:"auto"});
          $(".aktion").animate({right:"0",left:"auto"},1000);
          $(".aktion_btn").animate({right:test3},1000);
      aktion = "1";
      }
    }
  );
  
  $('.meldung').click( 
    function(){
      if(meldung1=="1"){
    $(".meldung").animate({left:"100%"},1000);
        meldung1 = "0";
      } else{
        $(".meldung").animate({left:"50%"},1000);
        meldung1 = "1";
        }
    }
  );
  
  $('.aktion_btn2').click( 
    function(){
      if(aktion2=="1"){
      etest = $('.aktion2').width();
          etest2= ('0')-etest;
          $(".aktion2").animate({right:etest2},1000);
          $(".aktion_btn2").animate({right:"-77"},1000);
      aktion2 = "0";
     } else{
          etest = $('.aktion2').width();
          etest2= ('0')-etest;
          etest3= etest-("77");
          $(".aktion2").css({right:etest2});
          $(".aktion2").css({left:"auto"});
          $(".aktion2").animate({right:"0",left:"auto"},1000);
          $(".aktion_btn2").animate({right:etest3},1000);
      aktion2 = "1";
      }
    });
 
  $('.bxslider').bxSlider(
  {
    auto: true,
    autoControls: false,
    pause: 7000,
    speed: 2000
  }); 


  $.each($(".fig_img"), function () {
    top1 = $(this).width();
    top2 = $(this).children("img").width();
    $(this).children("img").css("left", ((top1 - top2) / 2));
  });

  $.each($(".fig_img_s"), function () {
    top1 = $(this).width();
    top2 = $(this).children("img").width();
    $(this).children("img").css("left", ((top1 - top2) / 2));
  });
 
});