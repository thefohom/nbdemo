define(["detail","jquery", "jquery-cookie","parabola"], function(parabola,$) {
    console.log("detailsp加载成功");
    function shopinn(){
        console.log("detailsp shop in加载成功");
        sc_num();//打开页面先执行下 右侧 购物车数量和信息的函数
        // sc_msg();//打开页面先执行下 右侧 购物车数量和信息的函数
        

        $.ajax({//从数据源获取数据 把主页面信息加载完毕
            type:'get',
            url:'../data/shop_in.json',
            success:function(arr){
                console.log("detailsp  success 加载成功");
                for(var i = 0; i < arr.length; i++){
                    var node = $(`<h2 class="detail" id="${arr[i].id}">
                    <article class="detailLeft">
                        <aside id="smbox"><img id="smimg" src="${arr[i].bsboxpic}" alt="">
                            <div class="mark" id="mark1"></div>
                        </aside>
                        <div class="bigimgbox" id="bigimgbox1">
                            <img src="${arr[i].bigboxpic}" alt="">
                        </div>
                        <aside>
                            <li class="dtli1"><img src="../images/lvzuojt.png" alt=""></li>
                            <ul class="smul">
                                <li class="smliactive"><img src="${arr[i].smulli}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli1}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli2}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli3}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli4}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli5}" alt="" class="smpic"></li>
                                <li><img src="${arr[i].smulli6}" alt="" class="smpic"></li>
                            </ul>
                            <li class="dtli2"><img src="../images/lvyoujt.png" alt=""></li>
                        </aside>
                        <aside>
                            <i>
                            <span>分享到&nbsp;&nbsp;</span> 
                            <icon class="iconfont"><img src="../images/weixin.png" alt="">&nbsp;&nbsp;</icon>
                            <icon class="iconfont"><img src="../images/qq.png" alt=""></icon>
                            </i>
                            <i>
                                &nbsp;&emsp;<span>丨&emsp;</span>    
                            <icon class="iconfont">&#xe640;</icon>&nbsp;
                            <span>收藏</span>
                            &emsp;&nbsp;
                            <icon class="iconfont">&#xe636;</icon>&nbsp;
                            <span>对比</span>
                            </i>
                        </aside>
        
                    </article>
        
                    <article class="detailRight">
                        <h1>
                            <span class="self_product">自营</span>
                            美的新一级能效极酷大1.5匹智能变频冷暖空调 KFR-35GW/N8VHA1
                        </h1>
        
                        <h5>每日前100名赠送小美智能音箱（购物车勾选赠品）；晒单好评送美的电火锅 HS136B+返现20、晒单登记后30个工作日发出</h5>
        
                        <section>
                            <div><img src="../images/jinglin.png" alt=""></div>&nbsp;
                            距活动结束：01天12小时
                            <span>19</span>分
                            <span>54</span>秒
        
                        </section>
        
                        <section>
                            <article>
                                <span>
                                    <i>￥</i>
                                    <b class="price">${arr[i].price}</b>
                                    &nbsp;&nbsp;
                                    <del class="oldPrice">${arr[i].oldprice}</del>
                                    &nbsp;&nbsp;
                                    <aside class="xsth">限时特惠</aside>
        
        
                                </span>
                                <p>开通PRO会员，预计可省&nbsp;
                                    <span>170元</span>&nbsp;&nbsp;  
                                    <icon class="iconfont">&#xe6dc;</icon>&nbsp;&nbsp;&nbsp;&nbsp;  
                                    <a href="">立即开卡&nbsp;&nbsp;&gt;</a>
                                </p>    
        
                            </article>
        
                        </section>
        
                        <section>
                            <h3>优惠</h3>
                            <article>
                                <aside>
                                    <span class="xsth">满赠</span>
                                    <a href="">下单送小美智能音箱，数量有限，先到先得，每个订单赠品只可享受一台；用户需加入购物车后手动勾选赠品，未勾选不予补发&nbsp;&nbsp;&nbsp;&gt;</a>
                                </aside>
                                <aside>
                                    <span class="xsth">送积分</span>
                                    <a href="">最高送239积分</a>
                                </aside>
                            </article>
        
                        </section>
        
                        <section class="shoppj">
                            <h3>评价</h3>
                            <article>
                                <div class="pingj">
                                    <aside>
                                        空调很好(225)     
        
                                    </aside>
                                    <aside>
                                        安装很顺利(191)
                                    </aside>
                                    <aside>
                                        安装速度快(157)
                                    </aside>
                                </div>
                            </article>
                        </section>
        
                        <div class="morescripts">
                            <article>
                                <h3>颜色</h3>
                                <aside><em><img src="../images/sm1.jpg" alt=""></em>极地白</aside>
                            </article>
                            <article>
                                <h3>规格</h3>
                                <aside>
                                    <span>1匹</span>
                                    <span>1.5匹</span>
                                </aside>
                            </article>
                            <article>
                                <h3>数量</h3>
                                <aside>
                                    <div id="addsub">
                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>
                                    </div> 
                                    <div>
                                        库存 <span>${arr[i].kucun}</span>   	（限购5件）
                                    </div> 
        
                                </aside>
                            </article>
                            <article>
                                <h3>配送</h3>
                                <aside>
                                    <div>山东省 青岛市 市南区</div> <span>有货 送装一体 <icon class="iconfont"></icon>
                                    </span>
                                </aside>
                            </article>
                            <article>
                                <h3>服务</h3>
                                <aside>延长保修 <icon class="iconfont"></icon>
                                </aside>
                            </article>
                            <article>
                                <h3>供货商</h3>
                                <aside>美的官网商城</aside>
                            </article>
        
                        </div>
                        
                        <div class="addBuy">
                        <a class="addshop" id="${arr[i].id}" href="javascript:">加入购物车</a>
                        <a class="buyNow" href="javascript:">立即购买</a>
        
        
                        </div>
                        <div class="dtbottom">
                            <icon class="iconfont">&#xe636;</icon><span>美的唯一官方商城</span>
                            <icon class="iconfont">&#xe636;</icon><span>全国联保</span>
                            <icon class="iconfont">&#xe636;</icon><span>全场包邮</span>
                            
                        </div>
        
                    </article>
        
                </h2>`);

            node.appendTo($("main"));
            // detail.scale();
                }
                
                // fangdajing
                var smbox = $('#smbox');
                var mark = $('#mark1');
                var limg = $('#smimg');
                var bigbox = $('#bigimgbox1');
                var rimg = $(bigbox).children().first();
                var ul = $('.smul').eq(0);
                var ulimgs = $(ul).find('img');

                smbox.mousemove(function (e){
                    var e = e || window.event;
                    var l = e.pageX - smbox.offset().left - 104;
                    var t = e.pageY - smbox.offset().top - 104;
                    
                    l = Math.min(l,smbox.width()-mark.width())
                    l = Math.max(l,0)
                    t = Math.min(t,smbox.height()-mark.height())
                    t = Math.max(t,0)

                    mark.css({
                        left:l,
                        top:t
                    })
                    rimg.css({
                        left:-2.4*l,
                        top:-2.4*t
                    })
                })
                
                ulimgs.click(function (){
                    var src = $(this).attr('src');
                    limg.attr('src',src);
                    rimg.attr('src',src);
                })


                smbox.mouseenter(function (){
                    mark.css('display','block');
                    bigbox.css('display','block');
                })
                smbox.mouseleave(function (){
                    mark.css('display','none');
                    bigbox.css('display','none');
                })
            },
            error:function(msg){
                console.log(msg);
            }
        })

        
     


    
        //通过事件委托，给加和减这两个按钮添加点击
        $("main").on("click", "#addsub button", function(){//通过选择符 找到ul 委托ul给右侧购物车购买按钮添加事件(本次为通过插入的外层节点 非插入节点添加委托  找到<i>的+-按钮 点击+-时 给受委托节点添加事件)
            //获取当前购买按钮所在数据的id
            var id = $(this).closest('h2').attr('id');
            
           
            var spannum = $(this).siblings('span').html();
            if(this.innerHTML == '+'){//如果点击的是‘+’号
                spannum++;
                $(this).siblings('span').html(spannum);
            }else{//减少的话也要分情况
                spannum == 1 ? alert('数量为1,不能减少了') : spannum--;
                $(this).siblings('span').html(spannum);
                
            }
            
            
        })


        $('main').on('click','.addshop',function(){//以下操作都是点击时触发
            //先拿到点击按钮所在的商品id
            console.log('我点击了加入购物车');
            var id = this.id;
            console.log('我是点击购物车后获取的id'+id);
            //适合用cookie进行本地缓存 <1>只能存储字符串 <2>cookie最大4kb
            //存储成json字符串，结构：[{id:id,num1},{id:id,num2}]
            //1、判断cookie是否存在 cookie的name为'goods'
            var first = $.cookie('goods') === null ? true : false;//为空 是true 也就是不存在cookie  不为空是false
            if(first){
                //判断如果是空 那么是第一次 第一的话就新建一个cookie 
                //先声明一个新数组 要接收传进来的id 和num参数
                var cookieArr = [{id: id, num: 1}];
                //cookie名为goods 转义进入 时间为7天
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })//参数（name,value,{}） 将接收到的数据存储至cookie中 时间为7天
            }else{
                //如果不是第一次 first为false 那么查找之前是否添加过  这种情况是？找到goods cookie了  但是没找到这个id？？？
                var cookieArr = JSON.parse($.cookie("goods"));//所以先从cookie中先获取name为goods的cookie
                console.log('查找到含有叫goods的cookie  新从cookie获取的解析后的goods:'+JSON.parse($.cookie('goods')));
                var same = false;//假设没添加过
                for(var i =0; i<cookieArr.length; i++){//遍历它  
                    if(cookieArr[i].id == id){//如果点击的id和cookie中获取的id相等 代表cookie中含有当前点击商品
                        same = true;//代表添加过
                        break;//如果获取到的cookieArr里面的下标所对应的id和新添加的id相同 same改为true 
                    }
                }
                if(same){//如果same为true 就是如果cookie添加过当前商品 则数量+1
                    var spannum = $('#addsub span').html();
                    console.log('我是cookieArr[i].num：'+cookieArr[i].num);
                    console.log('我是spannum：'+spannum);
                    (cookieArr[i].num)+= parseInt(spannum);//下标所对应对象的num值++
                    //span要转换成数字  此处不能有字符串  为什么此时cookieArr.num是空
                }else{
                    //没有添加过 就是same为false
                    let obj = {//新建一个对象并初始化 初始数量为1
                        id: id, num: 1
                            }
                        cookieArr.push(obj);//将新对象添加至声明好的cookieArr数组内
                }
                //无论之前有还是没有都将最后的结果存回cookie中 相当于更新cookie
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
            }

            console.log('更新后的cookie:'+$.cookie('goods'));

            sc_num();//数量及信息更改后 右侧购物车重置一下
            // sc_msg();//数量及信息更改后 右侧购物车重置一下
            ballMove(this);
        })


        function sc_num(){//关于购物车数量的函数  先从cookie中获取 再分配到各个数据输出节点
            var sum = 0;//数量初始化先从0开始
            var cookieStr = $.cookie('goods');//先从cookie中的name为'goods'中获取数据
            if(cookieStr){//如果cookie中存在数据
                var cookieArr = JSON.parse(cookieStr);//将获取到的JS格式数据解析为数组格式
                //将数据中每个值都获取到
                for(var i = 0; i< cookieArr.length; i++){
                    sum += cookieArr[i].num;//而总num值等于所有的 数据.num的 值之和
                }
            }
            $('#rightnum').html(sum);//通过选择器 找到右侧购物车的 数量 输出sum
        }

        //加载购物车的商品
        //cookie放着我们加入购物车的商品 id num
        //商品的具体的数据  数据源
        // function sc_msg(){//关于右侧购物车信息的函数
        //     //先清空一下上一次的数据
        //     // $('main').empty();//先将右侧购物车数据清空  后面重新加载通过ajax获取的外围网络的新数据
        //     $.ajax({
        //         type:'get',
        //         url:'./data.json',
        //         success: function(arr){//如果获取成功
        //             //在arr中将已经加入购物车的数据拿出来
        //             //以下整体目的为节省cookie空间 
        //             var cookieStr = $.cookie('goods');//声明一个cookieStr接收 获取到的name为'goods'的cookie
        //             var newArr =[];//声明一个空数组用于接收符合条件的(含有对应num值的 arr[i])
        //             if(cookieStr){//如果本地cookie数据存在
        //                 var cookieArr = JSON.parse(cookieStr);//将获取到的cookie JS格式数据解析为数组格式
        //                 for(var i =0;i<arr.length; i++){//将 通过ajax获取到的外网整体数据遍历
        //                     for(var j= 0; j<cookieArr.length;j++ ){//同时再将本地cookie数据遍历
        //                         if(arr[i].id == cookieArr[j].id){//当整体的外网数据的id和本地cookie数据的id相等时 也就是代表本地cookie的id和整体数据都存在这个id  
        //                             //得知了这个id之后 通过id获取相应的num值 将数据添加上去
        //                             arr[i].num = cookieArr[j].num; //将本地cookie存在的这个id的num添加给下载到本地的整体数据的num 使arr.[i]也有了num值属性
        //             //然后将这个完整的含有num的对象添加到newArr里面 停止查找
        //                             newArr.push(arr[i]);
        //                             break;//因为id是唯一的 找到后停止本次内循环 跳到外面的循环查找下一个符合条件的元素
        //                         }
        //                     }
        //                 }
        //                 console.log('我是newArr：'+newArr);
                        
        //                 //将找出来的数据，在右侧购物车中加载出来
        //                 for(var i = 0;i<newArr.length;i++){
        //                     var node = $(`<li id="${newArr[i].id}">
        //           <div class="sc_goodsPic">
        //               <img src="${newArr[i].img}" alt="">
        //           </div>
        //           <div class="sc_goodsTitle">
        //               <p>这是商品曲奇饼干</p>
        //           </div>
        //           <div class="sc_goodsBtn">购买</div>
        //           <div class="delete_goodsBtn">删除</div>
        //           <div class="sc_goodsNum">
        //               <div>
        //                   <button>+</button>
        //                   <button>-</button>
        //                   <span>商品数量：${newArr[i].num}</span>
        //               </div>
        //           </div>
        //       </li> `);
        //         node.appendTo($(".sc_right ul"))//将上述新建节点 添加到右侧购物车的ul节点中
        //                 }
        //             }
        //         },
        //         error:function(msg){
        //             console.log(msg);
        //         }
        //     })
        // }

        //node 当前点击的加入购物车的按钮
        function ballMove(node){
            $("#ball").css({
                display: 'block',
                left: $(node).offset().left,
                top: $(node).offset().top
                })

            //计算相对位置
            var X = $("#rightnum").offset().left - $(node).offset().left;//为右侧购物车的图标的位置 - 点击元素的位置
            var Y = $("#rightnum").offset().top - $(node).offset().top;

            //声明抛物线对象
            var bool = new Parabola({
                el: "#ball",
                offset: [X, Y],
                duration: 500,
                curvature: 0.001,
                callback: function(){
                    $("#ball").hide();
                }
            })
            bool.start();
        }


    };


    return {

    shopinn
  
      };
});