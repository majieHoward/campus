var list = document.getElementById("list");
var lazyLoadApi = mui('#pullrefresh .mui-scroll').imageLazyload({
    autoDestroy: false,
    placeholder: 'data:image/png;base64,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58xxFTNBB/bGpy8vL6OiogIVFRVhbxhLTk7GxYsXIzYRh6IrnEXjWBex7jUiih52vBIJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnAoBMJwKATCcCgEwnwf3l9Q0N31ArFAAAAAElFTkSuQmCC'
});
mui.init({
    pullRefresh: {
        container: '#pullrefresh',
        down: {
            callback: function() {
                setTimeout(function() {
                    var elements = createFragment(5);
                    list.insertBefore(elements, list.firstElementChild);
                    lazyLoadApi.refresh(true);
                    mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
                }, 2000);
            }
        },
        up: {
            auto: true,
            callback: function() {
                setTimeout(function() {
                    var elements = createFragment(5);
                    list.appendChild(elements);
                    lazyLoadApi.refresh(true);
                    mui('#pullrefresh').pullRefresh().endPullupToRefresh(); //refresh completed
                }, 2000);
            }
        }
    }
});

var structureCardElementString=function(campusCircleObject){
    var campusCircleString=''
        +'<div class="mui-card-header mui-card-media">'
        +'<img src="http://wx.qlogo.cn/mmopen/RKeLNKp2313cLN64s6wykw53icHyZE0rnp3oJewticgVMCKGwlhvelYXHY2kibfAOmyj7aBMEKxnuiaX0NOK7TKibicWFFcKohPrfQ/0" />'
        +'<div class="mui-media-body">'
        +'overcast'
        +'<span class="mui-icons-self icon-self-weizhi">成都市</span>'
        +'<p>22 小时前(10:35) · 晴 4 &#8451; · 15千米</p>' 
        +'</div>'
        +'</div>'
        +'<div class="mui-card-content" >'
        +'<img width="100%" data-lazyload="http://127.0.0.1:8080/images/1.jpg?version=' + Math.random() * 1000 + '">'
        +'<div class="mui-card-content-inner">'
        +'<p style="color: #333;">'
        +'<a href="buttons.html">'
        +campusCircleObject
        +'</a>' 
        +'</p>' 
        +'</div>' 
        +'</div>' 
        +'<div class="mui-card-footer">'
        /**点赞**/
        +'<a class="campusCircle-praise"><span class="mui-icons-feedback-self icon-feedback-aixin"></span></a>'
        /**评论**/
        +'<a class="campusCircle-commentary"><span class="mui-icons-feedback-self icon-feedback-duihuakuang"></span></a>' 
        /**分享**/
        +'<a ><span class="mui-icon-extra mui-icon-extra-share"></span></a>' 
        +'</div>';
    return campusCircleString;
}

var structureLiElementString=function(campusCircleObject){
    var li= document.createElement('li');
    li.className = 'mui-card';
    li.innerHTML =structureCardElementString(campusCircleObject);
    return li;
}

var createFragment = function(count) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < count; i++) {
        fragment.appendChild(structureLiElementString("这里显示文章摘要，让读者对文章内容有个粗略的概念..."));
    }
    return fragment;
};

mui("#list").on('tap', 'a', function (event) {
    var campusCircleClassList=this.classList;
    if (campusCircleClassList.contains('campusCircle-commentary')){
        /**评论**/
        window.parent.controlSenseOfParticipationShow("commentary");
    }else if(campusCircleClassList.contains('campusCircle-praise')){
        /**点赞**/
        var praiseCampusCircles=this.getElementsByTagName("span");
        if(praiseCampusCircles.length>0){
            var praiseCampusCircle=praiseCampusCircles[0];
            var praiseCampusCircleClassList=praiseCampusCircle.classList;
            if(praiseCampusCircleClassList.contains('icon-feedback-aixin')){
                /**点赞**/
                praiseCampusCircle.className="mui-icons-feedback-self icon-feedback-aixin1 praise-active";
            }else if(praiseCampusCircleClassList.contains('icon-feedback-aixin1')){
                /**取消点赞**/
                praiseCampusCircle.className="mui-icons-feedback-self icon-feedback-aixin"
            }
        }
        
    }
    //window.parent.openDetailPager("/detailPage.html");
});
/**回到顶部**/
//mui('.mui-scroll-wrapper').pullRefresh().refresh(true);
//mui('.mui-scroll-wrapper').pullRefresh().scrollTo(0, 0, 1000);//滚动到顶部
//window.scrollTo(0, 0);
/**获取页面滚动距离**/
var scroll = mui('.mui-scroll-wrapper').scroll();

document.querySelector('.mui-scroll-wrapper').addEventListener('scroll',function (e) {
    /**TODO**/
    //console.log(scroll.y);
});

var subPageProcessing=function(){

};

var releaseCampusCircleShot=function(campusCircleObject){
    var campusCircleElement=structureLiElementString(campusCircleObject);
    //node.insertBefore(newnode,existingnode)
    //newnode     Node 对象     必需。需要插入的节点对象。
    //existingnode    Node object     可选。在其之前插入新节点的子节点。如果未规定，则 insertBefore 方法会在结尾插入 newnode。
    list.insertBefore(campusCircleElement, list.firstElementChild);
    lazyLoadApi.refresh(true);
    scroll.scrollTo(0,0,100);
}