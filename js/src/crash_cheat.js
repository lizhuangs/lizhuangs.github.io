<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '你不要我了 ╭(°A°`)╮ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '回来真好(ฅ>ω<*ฅ) ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});