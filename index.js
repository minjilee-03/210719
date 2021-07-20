$(document).ready(function(){
    $(".main-visual-slick-slides").slick({
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      cssEase: 'ease-in-out',
      arrows: true
    });
  });

  $(function(){
    var $header = $('.header-inner-wrap');
    var $page = $('.main-visual-txt-con');
    var $window = $(window);
    var pageOffsetTop = $page.offset().top;//색상 변할 부분의 top값 구하기
    
    $window.resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
      pageOffsetTop = $page.offset().top;
    });
    
    $window.on('scroll', function(){ //스크롤시
      var scrolled = $window.scrollTop() >= pageOffsetTop; //스크롤된 상태; true or false
      $header.toggleClass('down', scrolled); //클래스 토글
    });
  });
