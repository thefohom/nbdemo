define(function(){

    function fundbtl() {

        //获取操作
        var dbtl = document.querySelector('.dbtl');
        var scrTop = document.querySelector('.scrTop');
        var scrTopBtn = document.querySelector('.scrTopBtn');
        var dbdsq;
        var nowTop;
        //给window对象绑定滚顶事件
        window.onscroll = function () {
            //获取当前滚动距离
            nowTop = document.body.scrollTop || document.documentElement.scrollTop
            //判断当前滚动距离是否大于合适距离 如超过banner图  300
            // console.log(nowTop)
            if (nowTop > 40) {
                //给div对象设置高度
                dbtl.style.height = "40px";
                scrTopBtn.style.display = 'block';
                scrTop.style.opacity = "1";
            } else {
                dbtl.style.height = '0';
                scrTopBtn.style.display = "none";
                scrTop.style.opacity = "0";
            }
        }
        //给btn对象绑定点击对象事件
        scrTopBtn.onclick = function () {

            dbdsq = setInterval(function () {
                //设置每次移动的距离（步长）
                var speed = Math.ceil(nowTop / 4)
                // console.log(speed)
                if (nowTop <= 0) {
                    clearInterval(dbdsq);
                }
                //使用当前距离减去步长，得到剩下的滚动距离
                document.documentElement.scrollTop = nowTop - speed;
            }, 50)
            // document.documentElement.scrollTop = 0;


        }
    }
    return {
        fundbtl 
    }
})