/*-------ここから画像のスライドショー-----------*/
$(function(){
  // 初期画像の表示
  let index = 0;
  $('.img').eq(index).addClass('current-img');

  setInterval(function(){
    // 非表示
    $('.img').eq(index).removeClass('current-img');
    // 画像の最後判定
    if(index == $('.img').length - 1){
      index = 0;
    }else{
      index++;
    }
    // 表示
    $('.img').eq(index).addClass('current-img');
  }, 3000);
});



/*-------ハンバーガーメニュー-----*/

$(function() {
  $('.js-btn').on('click', function() {
    $('.menu , .btn-line').toggleClass('open');
  })
});


/*-------フェード処理-----*/

$(window).on('scroll', function() {
  $('.fade-up, .fade-down, .fade-right').each(function() {
    var target = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var height = $(window).height();

    var point = target - height;

    if (scroll > point && scroll < (point + $(this).height() + height)) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  });

});


// Likeボタンクリック
$('.LikesIcon').on('click', function() {
  let $btn = $(this);
  // Likeボタンがonクラス持っていたら
  if ($btn.hasClass('on')) {

    $btn.removeClass('on');

    // 白抜きアイコンに戻す
    $btn.children("i").attr('class', 'far fa-heart LikesIcon-fa-heart');

  } else {

    $btn.addClass('on');

    // ポイントは2つ！！
    // ①アイコンを変更する
    // far fa-heart（白抜きアイコン）
    // ⇒ fas fa-heart（背景色つきアイコン）
    // ②アニメーション+アイコン色変更用のheartクラスを付与する

    $btn.children("i").attr('class', 'fas fa-heart LikesIcon-fa-heart heart');

  }
});
