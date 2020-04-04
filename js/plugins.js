$(document).ready(function(){
 
    $('.carousel').carousel({
        interval:5000000
    
      });

    //hna kiche ybalna color option ki bdrko 3la gear tamna
   $(".gear-check").click(function(){
       $(".color-option").fadeToggle();
  });

var scrollButtom=$("#scroll-top");
   $(window).scroll(function () {
       console.log( $(this).scrollTop());

    if ( $(this).scrollTop()>= 700) {
      scrollButtom.show();

    } 
    else{
      scrollButtom.hide();

    }
  });
    scrollButtom.click(function() {
$("html,body").animate({scrollTop:0},600);

   
});
});

