// ローディングアニメーション
// $(function () {
//   $('#loading').addClass('loaded');
//   $('body').delay(1500).queue(function(){
//     $(this).removeClass('loading-noscroll');
//   })
// });

// タイトルスライドイン
const CLASSNAME = "-visible";
const TIMEOUT = 500;
const DELAY = 500;
const $target1 = $(".kv__title");
const $target2 = $(".kv__text");


setInterval(() => {
  $target1.addClass(CLASSNAME);
  setTimeout(() => {
    $target2.addClass(CLASSNAME);
  }, DELAY);

  // setTimeout(() => {
  //   $target1.removeClass(CLASSNAME);
  //   setTimeout(() => {
  //     $target2.removeClass(CLASSNAME);
  //   }, DELAY);
  // }, TIMEOUT);
}, TIMEOUT * 2);


//スティッキーヘッダー
const $window = $(window), //ウィンドウを指定
$about = $("#about"), //#about部分
$stickyHeader = $("#sticky-header"), //#sticy-header部分
topContent = $about.offset().top; //#aboutの位置を取得

let sticky = false;

 $window.on("scroll", function () {
      if ($window.scrollTop() > topContent) {//scroll位置が#aboutの下にある場合
           if ( sticky === false ){//もしstickyがfalseならばスティッキーヘッダーが降りてきてstickyになり
                $stickyHeader.slideDown();
                // sticyにtrueが代入される
                sticky = true;
                // 再代入の際はlet書いちゃあいけない
           }
      } else {
        // スクロール位置がaboutより上にあるなら
           if ( sticky === true ){
            //  stickyがtrueに入った状態であれば
                $stickyHeader.slideUp();//#change部分が上がる
                sticky = false;
                // stickyにfalseが代入され
           }
      }
 });
//  $window.trigger("scroll");






// ハンバーガーメニュー
$(function(){
  $('.ham__btn').on('click',function(){
      $('.ham__btn').toggleClass('close');
      $('.header').fadeToggle(500);
      $('body').toggleClass('noscroll');
     })
   $('.header__list-item').on('click',function(){
      $('header').fadeToggle(500);
      $('body').removeClass('noscroll');
  });  
  $("#kv__copy").addClass("is-active");

  // バックボタン
    // #bttをクリックした時に
    $("#btt").click(function () {
      // html, bodyに0.6sでscrollTop: 0のアニメーションする
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        600
      );
    });

    // パララックス
    $(window).scroll(function () {
      let value = -$(window).scrollTop() / 120;
  
      $(".js-parallax-down").css({
        transform: "translateY(" + -value + "%)",
      });
    });

    $(window).scroll(function () {
      let value = -$(window).scrollTop() / 50;
      $(".js-parallax-up").css({
        transform: "translateY(" + value + "%)",
      });
    });

    $(window).scroll(function () {
      let value = -$(window).scrollTop() / 20; 
      $(".js-parallax-up-hard").css({
        transform: "translateY(" + value + "%)",
      });
    });
  
    // 画面をスクロールした時に
    $(window).scroll(function () {
      // もしスクロール位置が画面の高さを超えたら
      if ($(window).scrollTop() > $(window).height()) {
        // #bttにis-activeクラスを追加する
        $("#btt").addClass("is-active");
        // そうでなければ
      } else {
        // #bttのis-activeクラスを削除する
        $("#btt").removeClass("is-active");
      }
    });

    $(window).scroll(function () {
      $(".js-trigger").each(function () {
        let trigger_point = $(this).offset().top - $(window).height() / 2;
  
        if ($(window).scrollTop() > trigger_point) {
          $(this).find(".js-slide").addClass("is-active");
        }
      });
    });
  

// スライダー
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    fade:true,
    speed: 1000,
    slidesToShow: 1,
    prevArrow: '<img src="img/arrow-prev.png" class="slider__arrow slider__arrow-prev">',
    nextArrow: '<img src="img/arrow-next.png" class="slider__arrow slider__arrow-next">',
    responsive:[{
      breakpoint: 1080,
      settings:{
        slidesToShow: 1,
      }
    },{
      breakpoint: 480,
      settings:{
        slidesToShow: 1,
      }
    }]
  });
  
  $(".slider-item").hover(
    function () {
      $(this).addClass("active");
      $(this).children(".slider-txt").stop().animate({'bottom':"30px"},300,"linear");
      $(this).children(".slider-sub-txt").stop().animate({'bottom':"20px"},500,"linear");
    },
    function () {
      $(this).removeClass("active");
      $(this).children(".slider-txt").stop().animate({'bottom':"-120px"},300,"linear");
      $(this).children(".slider-sub-txt").stop().animate({'bottom':"-120px"},500,"linear");
    }
  );
});


// 時間差fadein
$(function(){
	$(window).scroll(function (){
		$('.fadein__block').each(function(){
			let elemPos = $(this).offset().top;
			let scroll = $(window).scrollTop();
			let windowHeight = $(window).height();
			let speed = 500;
			if(scroll > elemPos - windowHeight){
				$(this).find('div').addClass('scrollin');
				$(this).delay(speed).queue(function(){
					$(this).find('img').addClass('scrollin').dequeue();
					$(this).find('img').delay(speed).queue(function(){
						$('.family__item-contents').find('p').addClass('scrollin');
						$('.family__item-contents--georgia').find('p').addClass('scrollin');
					});
				});
			}
		});
	});
});

// 時間差fadein
$(function(){
	$(window).scroll(function(){
    // スクロールしたら機能する
    let scroll = $(this).scrollTop();
    // スクロールした際のwindowのトップの高さを変数に代入する
    let scrollBottom = scroll + $(this).height();
    //　変数scrollBottomにスクロールしたwindowの下辺までの高さ代入。つまり要素の下辺までの高さを代入できる。
    let effectPos = scrollBottom - 50;
    console.log(effectPos);
    console.log(scroll);
    console.log(scrollBottom);

    // 変数effectPosにscrollBottomより50px上の高さを代入する
      $('.carrier__item--fadein,.process__item--fadein').each(function(i){
        // クラス名first-carrier__itemのそれぞれの要素に処理をする。
        // 関数functionに引数iを代入
        if(effectPos > $(this).offset().top){
        // もし変数effectPosの高さがfirst-carrier__itemのトップより大きくなると
          let that = this;

          setTimeout(function(){
            $(that).addClass('scrollin');
          },50*i);
          }
        });
        });
      });

