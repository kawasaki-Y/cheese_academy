// jQueryを使ってスライドショーを初期化
// スライドショーの設定
$(document).ready(function () {
    $('.slideshow-wrapper').slick({
        dots: false,           // ドットナビゲーションを非表示
        infinite: true,        // 無限ループ
        speed: 500,           // フェードのスピード（0.5秒）
        fade: true,            // フェード効果を有効にする
        cssEase: 'linear',     // フェードの動作を滑らかに
        slidesToShow: 1,       // 表示するスライド数（1つずつ）
        autoplay: true,        // 自動スライドを有効にする
        autoplaySpeed: 2000,   // 自動スライドの間隔（2秒）
        arrows: false          // 矢印を非表示
    });
});

