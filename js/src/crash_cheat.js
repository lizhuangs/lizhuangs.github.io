var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '不要离开我好吗 ╭(°A°`)╮ ';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/images/favicon.png");
        document.title = '你回来啦(ฅ>ω<*ฅ) ' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
