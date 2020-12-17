    
    /*
    * 思路：
    * 1、页面布局
    * 2、明确操作对象有哪些
    * 3、确认事件类型
    * 4、确定默认移动方向
    * */
    //获取操作对象
define(['jquery'], function($){
    function bannerswp(){
        $(function () {

        var bnimgs=document.getElementById('bnimgs')
        var bnbox=document.getElementById('banner')
        var bnbtn=document.getElementById('bnbtn')
        var prev=document.getElementById('prev')
        var next=document.getElementById('next')
        var spans=$("#bnbtn").find('span')
        var index=1 // 按钮 的初始下标
        var dsq;//定时器

        var aa=false;// 当aa=true，代表还在执行定时器，那么就不能在执行其他定时器
        //移动图片
        function animation1(offset){//图片切换函数
            //当点击当前显示图片对应按钮时，直接跳出此函数 当移动距离为0的时候代表不移动，因此就不在执行下面的代码
            //所产生的效果是？
            if(offset==0){
                return
            }
            //设置每一步的步长
            var speed=offset/30
            //获取图片移动到终点的距离   offset为移动距离
            var left=parseInt(bnimgs.style.left)+offset //至少挪动一个图片的offset的绝对值|1920|的距离+挪动时整个大图片的left值 [style.left值其实就是大图片的位置 这两个left是两回事]   也好理解 挪动到终点的距离就是原先的位置+挪动的1920距离  OK!
            aa=true
            //动起来
            var go= function () {//animation1切换函数中的speed缓冲函数
                //从左往右移动 如果步长是正数并 且 大图片的位置的值小于到终点的距离 也就是offset还没走完
                //或者 从右往左移动 图片的步长为负数并 且 大图片的位置大于到终点的距离 也就是往左走的负的offset还没走完            
                if((speed>0 && parseInt(bnimgs.style.left)<left)||(speed<0 && parseInt(bnimgs.style.left)>left)){
                    // console.log('我是赋值 前 offset:'+offset);//往右走offset始终是-1920  往左走始终是1920 
                    // console.log('我是 未 赋值前的bnimg.style.left:'+ bnimgs.style.left); //初始值为-1920 
                    // console.log('我是 未 赋值前的left:'+ left);//初始值为-3840
                    // console.log('<br>');
                    //那么就把此时的过程位置（大图片位置加上过度步幅）计算结果赋值给bnimgs对象 以达到过度效果
                    bnimgs.style.left=parseInt(bnimgs.style.left)+speed+'px'
                    // console.log('我是赋值 后 的bnimg.style.left:'+ bnimgs.style.left);//往右走切换完一个图片结束下一个图片还没开始前 此值从-1920逐渐变为-3840 反之往左走是正1920 也就是一个图片的距离
                    // //切换完进入下一个图片初始值为-3840 往后再切换一个图片的话 再-或者+1920
                    // console.log('我是赋值 后 的left:'+ left);//往右切换完一个图片结束下一个图片还没开始前 此值一直-3840
                    // //切换完进入下一个图片的初始值为-5760 反之往左走就是+1920  也就是一个图片的距离 没有中间过程直接变为 -5760 往后再切换一个图片的话 再-或者+1920
                    // console.log('我是赋值 后 offset:'+offset);//往右走offset始终是-1920  往左走始终是1920

                 dsq2 = setTimeout(go,10)//此定时器的功能是执行切换动画的函数的 只要在if状态内 每10毫秒执行一次speed 每执行一次 speed变化一次 speed根据传进去的offset值的正负也可以是负数 直到达到left 如果在if所在的状态内就运行setTimeout函数 
                
                }else{
                    //next时，最后一张图片的判断
                    if(left<-1920*8){//从倒数第二张刚且到到最后一张图片的时候 值小于-1920*8 此时left赋值为第二张图片的left值因为都是图片1
                        bnimgs.style.left='-1920px'
                    }
                    //prev时，第一张图片的判断
                    if(left>-1920){//当手动从第二张切换到第一张时 也就是从图片1往左切换到左侧的图片8时 自动变为尾部的图片8  
                        bnimgs.style.left=-1920*8+"px"
                    }
                    aa=false//此时将aa设为false 就是图片已经切换完毕 可以进行下一次切换的定时 防止定时器重叠
                }
            }
            go()
        }
        //开始函数
        function play(){//自动切换函数
            dsq=setInterval(function () {
                next.onclick()//  每过3秒自己运行一下 next.onclick的函数
            },3000)
        }
        

        //下一张图片  这才是动态核心
        next.onclick= function () {
            //先判断是否有定时器在执行
            if(aa){//如果aa存在 则不运行 点击无效
                return
            }
            //判断按钮是否为最后 
            if(index>=8){//当点击下一个的时候 如果当前按钮的index值大于或者等于8 点击后设为1 
                index=1
            }else{//反之 点完就++
                index++
            }
            btnShow()//点完刷新下按钮样式函数
            animation1(-1920)//运行下切换动画函数 offset设置为-1920 就是图片往左走 一个图片的距离
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
        //按钮样式函数
        function btnShow(){
            //使用循环遍历span对象，去除所有span对象的class属性值
            for(var i=0;i<spans.length;i++){
                spans[i].className=''
            }
            //给当前图片对象对应的按钮添加class属性值
            spans[index-1].className='first'
        }
        //遍历所有按钮对象，分别给每个按钮绑定点击事件
        for(var i=0;i<spans.length;i++){
            spans[i].onmouseover= function () {
                // setTimeout(clearInterval(dsq2),10);
                //获取当前按钮对象的index属性值
                var myIndex=this.getAttribute('index')//范围是1-8
                //显示按钮对应的图片
                //bnimgs.style.left=-600*parseInt(myIndex)+'px'
                // console.log('我是index：'+ index);
                //prev和next可以控制index数值
                
                animation1(-1920*(parseInt(myIndex)-index))//offset参数值为 在图片所在位置的索引值（1-8）减去 设置的index值 所得的值就是当前点击span按钮与图片所在按钮的差值 根据差值的正负去*-1920来达到图片正反切换到什么位置的效果 也就是说自定义的index值始终是图片所在位置的索引值  index也只能通过span按钮控制和next prev控制 play也是调用的next控制的
                index=myIndex//点击span按钮也可以控制index数值
                
                btnShow()
            }
        }
        //鼠标移入删除定时器
        bnbox.onmouseover= function () {
            clearInterval(dsq)
        }
        bnbox.onmouseout=play
        play()
        /*
        * 完成剩下的功能
        * */
        });
        
    }
    return {
        bannerswp
    }

})