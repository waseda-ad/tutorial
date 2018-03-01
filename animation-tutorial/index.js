// スクロールイベントにより発火するアニメーション
function scrollAnimation(targetClassName, rateOfBorder) {

  //起動時に発火
  measureToAction();

  //スクロールイベントでも発火
  $(window).scroll(function(){
    measureToAction();
  });

  //メイン処理
  function measureToAction(){
    // ループ処理
    $('.'+ targetClassName).each(function(){
      var targetPos = $(this).offset().top; // ターゲット要素の位置（上端）
      var scroll = $(window).scrollTop(); // 画面の位置（上端）
      var windowHeight = $(window).height(); // 画面の高さ
      if (scroll > targetPos - windowHeight*rateOfBorder){
        // スルクロールにより発火する処理
        if (!$(this).hasClass('scrolled')) {
          $(this).addClass('scrolled');
        }
      }else {
        if ($(this).hasClass('scrolled')) {
          $(this).removeClass('scrolled');
        }
      }
    });
  }//measureToAction

}//end
