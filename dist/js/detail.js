define(["jquery", "jquery-cookie"], function($) {
    console.log("detail加载成功");

        //首先获取元素 并将图片做成一个arr形参数组 以供后期传入实参图片数组
     /*  function scale(){
        var m1 = new getEle(['../images/sm1.jpg','../images/sm2.jpg','../images/sm3.jpg','../images/sm4.jpg','../images/sm5.jpg','../images/sm6.jpg','../images/sm7.jpeg']);
        
            
      
        function getEle(){
    
            this.oSmall = document.getElementById("smbox");
            this.oMark = document.getElementById("mark1");
            this.oBig = document.getElementById("bigimgbox1");
            this.oBigImg = this.oBig.getElementsByTagName("img")[0];
            // //编写一个数组，存放着五个图片的信息
            // this.msg = arr;

        };

        //给小图片添加鼠标移入移出达到mark及右侧显示容器是否显示
        getEle.prototype.funOverOut = function(){
            var _this =this;//这里的this是构造函数的对象
            this.oSmall.onmouseenter = function(){
                _this.oMark.style.display = 'block';
                _this.oBig.style.display = 'block';
            }
            this.oSmall.onmouseleave = function(){
                _this.oMark.style.display = 'none';
                _this.oBig.style.display = 'none';
            }

        };

        //给小图片的mark添加移动效果
        getEle.prototype.funMove = function(){
    
            var _this = this;//这里的this是构造函数的对象是指的getEle的？
            this.oSmall.onmousemove = function(ev){
                var e = ev || window.event;
                //让遮罩层跟随鼠标移动
                //鼠标焦点在页面的位置-左侧小容器在上一层可以找到有定位父元素的位置  本次为左侧小容器的最上层是html 如果需要调就把有定位的容器位置减出来
                var l = e.pageX - _this.oSmall.offsetLeft - 104;//值为mark的一半  因为鼠标焦点要在mark中心
                var t = e.pageY - _this.oSmall.offsetTop - 104;
                
                if(l <= 0 ){//当鼠标所在位置pageX和小容器左侧离上一层有定位的父元素距离相同时 即本次的鼠标位置和小容器和左侧html距离相同时 也就是在小容器定位的left值 小容器左侧边 因为有个mark不能出界 所以要减去mark的一半值104.5 
                    l = 0;//l值最低不能小于0 小于0的情况是鼠标焦点在小容器左侧外面的情况 pageX值小于固定的offsetX值
                }
                if(l >= 292){//小容器的宽高-mark的宽高为mark的移动距离 不能让mark超出小容器
                    l = 292;
                }

                if(t <= 0){
                    t = 0;
                }
                if(t >= 292){
                    t =292;
                }

                //将此时的l，t值赋给mark的位置值
                _this.oMark.style.left = l + 'px';
                _this.oMark.style.top = t + 'px';

                //同时让右侧的图片反方向按缩放倍数2.4进行移动
                _this.oBigImg.style.left = l * -2.4 + 'px';
                _this.oBigImg.style.top = t * -2.4 + 'px';
            }
        };


        getEle.prototype.load = function(id){
            this.parentNode = document.getElementById(id);

        }
                
        //完成点击小图片，放大图片的切换
        getEle.prototype.tab =function(){
            var m1 = ['../images/mid1.jpg','../images/mid2.jpg','../images/mid3.jpg','../images/mid4.jpg','../images/mid5.jpg','../images/mid1.jpg','../images/sm7.jpeg'];
            var m2 = ['../images/bigimg1.jpg','../images/bigimg2.jpg','../images/bigimg3.jpg','../images/bigimg4.jpg','../images/bigimg5.jpg','../images/bigimg1.jpg','../images/bigimg2.jpg',];
            //获取当前选中小图片的父节点下的所有子元素
            // 下面小图片
            var oImgs = document.querySelectorAll('.smpic');
            
            // 左边的图片
            var smimg = document.getElementById('smimg');
            oBigImg = this.oBig.getElementsByTagName("img")[0];
            oImgs.forEach(function (val, i) {
                val.onclick = function () {
                    
                    smimg.src = m1[i]
                    oBigImg.src = m2[i]
                   
                    $(this).parent().attr('class','smliactive');
                    $(this).parent().siblings().attr('class','');
                    //  $(this).attr('class','smliactive');
                    //  val.className= '';
                }
            })
        };

        m1.funOverOut();
            m1.funMove();
            m1.load();
            m1.tab();

    }*/


    return {
    // scale
      };
});