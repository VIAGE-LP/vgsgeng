$(document).ready(function () {
    // 圖片lozad
    const observer = lozad('.lozad', {
        rootMargin: "150px 0px"
    });
    observer.observe();
    // 立即購買btn動態
    $('.offerbtn, .offerbtn_m').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });
    // 立即訂購btn動態
    $('.buybtn').click(function (e) { 
        e.preventDefault();
        $('html , body').animate({
            scrollTop: $('#size').offset().top,
        },900);
    });

    $('.toggle_btn').click(function (e) { 
        e.preventDefault();
        $(".toggle_area").toggle();
    });

    $('.title_1').click(function (e) { 
        e.preventDefault();
        $(".text_1").toggle();
        $(".title_1").removeClass("animate__animated");
    });

    $('.title_2').click(function (e) { 
        e.preventDefault();
        $(".text_2").toggle();
        $(".title_2").removeClass("animate__animated");
    });

    $('.title_3').click(function (e) { 
        e.preventDefault();
        $(".text_3").toggle();
        $(".title_3").removeClass("animate__animated");
    });

    //偵測sns line btn 手機版還是電腦版，連結不同
    var vw=$(window).width();
    if (vw <= 768) {
        $(".line_link").attr("href", "https://bit.ly/2Bpg9M6");
    } else {
        $(".line_link").attr("href", "https://line.me/R/ti/p/%40fhl1857j");
    }

    // 抓取網址參數後跳轉至vgsg
    var getUrlString = location.href;
    var url = new URL(getUrlString);
    $('.chinese_link').click(function (e) {
        e.preventDefault();
        window.location.assign(`https://viagebeautybra.com/sg/vgsgkan/${url.search}`)
    });
});