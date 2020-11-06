/*
    * 思路：
    * 1、页面布局
    * 2、明确操作对象有哪些
    * 3、确认事件类型
    * 4、确定默认移动方向
    * */
    //获取操作对象
    var imgs=document.getElementById('images')
    var box=document.getElementById('box')
    var btn=document.getElementById('btn')
    var prev=document.getElementById('prev')
    var next=document.getElementById('next')
    var spans=document.getElementsByTagName('span')
    var index=1 //按钮的初始下标
    var dsq;//定时器

    var aa=false;// 当aa=true，代表还在执行定时器，那么就不能在执行其他定时器
    //移动图片
    function animation1(offset){
        //当点击当前显示图片对应按钮时，直接跳出函数
        if(offset==0){
            return
        }
        //设置每一步的步长
        var speed=offset/40
        //获取图片移动终点
        var left=parseInt(imgs.style.left)+offset
        aa=true
        //动起来
        var go= function () {
            //从左往右移动                                    从右往左移动
            if((speed>0 && parseInt(imgs.style.left)<left)||(speed<0 && parseInt(imgs.style.left)>left)){
                //把计算结果赋值给imgs对象
                imgs.style.left=parseInt(imgs.style.left)+speed+'px'
                setTimeout(go,10)
            }else{
                //next时，最后一张图片的判断
                if(left<-1920*8){
                    imgs.style.left='-1920px'
                }
                //prev时，第一张图片的判断
                if(left>-1920){
                    imgs.style.left=-1920*8+"px"
                }
                aa=false
            }
        }
        go()
    }
    //开始函数
    function play(){
        dsq=setInterval(function () {
            next.onclick()
        },3000)
    }
    //按钮函数
    function btnShow(){
        //使用循环遍历span对象，去除所有span对象的class属性值
        for(var i=0;i<spans.length;i++){
            spans[i].className=''
        }
        //给当前图片对象对应的按钮添加class属性值
        spans[index-1].className='first'
    }

    //下一张图片
    next.onclick= function () {
        //判断是否有定时器在执行
        if(aa){
            return
        }
        //判断是否为最后
        if(index>=8){
            index=1
        }else{
            index++
        }
        btnShow()
        animation1(-1920)
    }
    //上一张图片
    prev.onclick= function () {
        if(aa){
            return
        }
        //判断是否在最前
        if(index<=1){
            index=8
        }else{
            index--
        }
        btnShow()
        animation1(1920)
    }
    //遍历所有按钮对象，分别给每个按钮绑定点击事件
    for(var i=0;i<spans.length;i++){
        spans[i].onclick= function () {
            //获取当前按钮对象的index属性值
            var myIndex=this.getAttribute('index')
            //显示按钮对应的图片
//            imgs.style.left=-600*parseInt(myIndex)+'px'
            animation1(-1920*(parseInt(myIndex)-index))
            index=myIndex
            btnShow()
        }
    }
    //鼠标移入删除定时器
    box.onmouseover= function () {
        clearInterval(dsq)
    }
    box.onmouseout=play
    play()
    /*
    * 完成剩下的功能
    * */