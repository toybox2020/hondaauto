/*==================================================

** スムーススクロール
==================================================*/
$(function(){
	$('a[href^="#"]:not([href="#"])').click(function(){

		let target = $($(this).attr('href')).offset().top;
		target -= 100;	// コンテンツ上部より上がどのくらい空くか指定

		$('html,body').animate({
			scrollTop : target
		}, 500);	// スクロールの速さ

		return false;
	});
});


/*==================================================

** スマホメニューの開閉
==================================================*/
$(function(){
	$('.toggle').click(function(){
		$(this).toggleClass('active');	// クラスにactiveを追加⇔削除
		$('.gnav').toggleClass('active');
  });
});


/*==================================================

** ページトップボタン
==================================================*/
jQuery(function ($) {
    var topBtn = $('#pagetop');
    topBtn.hide();
  
    // スクロールが500に達したらボタン表示
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
  
    topBtn.click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
    });
});