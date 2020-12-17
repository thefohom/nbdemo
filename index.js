define(["jquery", "jquery-cookie"], function($) {
    
    function hover1(){
        $('.cplist+li').hover(function(){
            
             $('.cplist .cpli_1 ul').stop(true).slideDown(500)

        },function(){
           
             $('.cplist .cpli_1 ul').stop(true).slideUp(500)
        })
    }


    //ajax 下载数据
    function download(){
        // sc_num();-------------------------注意-
        $.ajax({
            type: 'get',
            url: "../data/shoplist.json",
            success: function(arr){
              var str = ``;
              for(var i = 0; i < arr.length; i++){
                str += `<li>
                <h5>11.11狂欢</h5>
                <a href=""><img src="${arr[i].pic}" alt=""></a>
                <section>
                    <aside><span>￥<em>${arr[i].price}</em></span>
                    </aside>
                    <aside><span>评价<em>${arr[i].evaluate}</em></span></aside>
                </section>
                <a href="">${arr[i].text}</a>
                <article>
                    <p>【11月11日】0点火热开抢、到手不高于2799，买到就是赚到、每日前500名赠送小美智能音箱（购物车勾选赠品）、因双11期间销售火爆，预计11月30号左右发货，请以实际发货时间为准
                    </p>
                </article>
                <section>
                    <aside>自营</aside>
                </section>
                <section>
                    <aside>
                        <i>
                         <a href=""><icon href="" class="iconfont">&#xe640;</icon>&nbsp;&nbsp;购物车
                         </a>
                         </i>        
                     </aside>
                     <aside>
                     <input type="checkbox" name="" id="${arr[i].id}">
                     <label for="${arr[i].id}"><span>对比</span></label>
                </section>
            </li>`;
              }
      
              $(".shoplist").html(str);
            },
            error: function(msg){
              console.log(msg);
            }
          })
    }


    
 
    

    return {
    //    hover1,
       download
      }
});