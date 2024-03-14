$(function(){
  // banner 슬라이드 이벤트
  $("#banner").mouseover(
    function(){
      $("#banner .swiper-button-prev").stop(true).fadeIn(500);
      $("#banner .swiper-button-next").stop(true).fadeIn(500);
    }
  );
  $("#banner").mouseout(
    function(){
      $("#banner .swiper-button-prev").stop(true).fadeOut(500);
      $("#banner .swiper-button-next").stop(true).fadeOut(500);
    }
  );
  // sub_menu 슬라이드 이벤트
  $(".all_category").mouseover(
    function(){
      $(".sub_menu").stop(true).slideDown(500);
    }
  );
  $(".all_category").mouseout(
    function(){
      $(".sub_menu").stop(true).slideUp(500);
    }
  );
});