window.onload = function(){
//-------------------------------------------------------------------
//"トップへ戻る"ボタンの処理
//-------------------------------------------------------------------

//"トップへ戻る"ボタンをクリックしたとき
  var backToTop = $("#back-to-top");

  backToTop.click(function () {
    $("body,html").animate(
     {
       scrollTop: 0,
      },
      500
    ); //0.5秒かけてトップへ移動
    return false;
  });



//-------------------------------------------------------------------
//スライドショーの処理
//-------------------------------------------------------------------
  
  //ページ読み込む時の処理
  $('.slide-show').fadeIn(2000);
  $('#message-wrapper').find('.show').animate(
    {
      'left': '30%',
        'opacity':'1'
    },
    2000
  );



  //スライドボタンをクリックしたとき：
  $('#slider-wrapper i').click(function () {

    //スライドボタンの処理---------------------------------------------
    var solid = 'fas fa-circle fa-lg';
    var regular = 'far fa-circle fa-lg';

    //ソリッドボタンをレギュラーに戻す
    $('#slider-wrapper').find('.fas').attr('class',regular);
    
    //クリックされたボタンをソリッドにする
    $(this).attr('class',solid);

    //写真の処理------------------------------------------------------
    var $photoWrapper = $('#photo-wrapper');

    //現在表示されている写真を消す
    $photoWrapper.find('.show').hide();
    $photoWrapper.find('.show').removeClass('show');

    //クリックされたボタンの番号を取得する
    var sliderNumber = $(this).attr('id').substr(6,2);
    
    //表示する写真のid
    var photoNumber = '#photo' + sliderNumber;

    //idから要素を指定し、"show"クラスを付与する
    $photoWrapper.find(photoNumber).fadeIn(1600);
    $photoWrapper.find(photoNumber).addClass('show');

    //メッセージの処理------------------------------------------------------
    var $messageWrapper = $('#message-wrapper');
    var $shownMessage = $messageWrapper.find('.show')

    //現在表示されているメッセージを消す/位置を戻す/'show'クラスを付ける
    $shownMessage.animate(
      {
        'left': '20%',
        'opacity':'0'
      },
      1
      );
      $shownMessage.removeClass('show');

    //表示するメッセージのid
    var messageNumber = '#message' + sliderNumber;

    //idから要素を指定し、"show"クラスを付与する
    $messageWrapper.find(messageNumber).addClass('show');
    $messageWrapper.find('.show').animate(
      {
        'left': '30%',
        'opacity':'1'
      },
      2000
      );
  });
};




// 読み込み時とリサイズ時に処理を実行
media();
$(window).on("resize", function(){ media(); });
// メディアクエリ
function media() {
	// 横幅を取得
	var width = $(window).width();
	if(width <768) {
    // 画面幅が768pxより小さい時
    


  } else　{
  //768px以上の時
  var backToTop = $("#back-to-top");

  $(window).scroll(function () {
    //400pxスクロールしたら表示
    if ($(this).scrollTop() > 400) {
      backToTop.fadeIn();
    } else {
      backToTop.fadeOut();
    }
  });
	}
}




 
