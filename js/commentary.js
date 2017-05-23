var commentary={};

var str = "";  

(function(commentary,window) {
	var element={};
    window.selfErgodicElement(document.body,element);
    /**构造<li class="mui-table-view-cell mui-media">中的内容**/
    var structureCellString=function(commentaryObject){
 		var commentaryString='<div class="self-pull-left">'
			+'<img class="mui-media-object"'
			+'data-lazyload="http://wx.qlogo.cn/mmopen/RKeLNKp2313cLN64s6wykw53icHyZE0rnp3oJewticgVMCKGwlhvelYXHY2kibfAOmyj7aBMEKxnuiaX0NOK7TKibicWFFcKohPrfQ/0">'
			+'</div>'
			+'<div class="mui-media-body">'
			+'<span class="self-commentary-reviewer">'
			+'overcast'
			+'</span>'
			+'<span class="self-commentary-comment-time">'
			+'16小时前'
			+"</span>"
			/**ellipsis省略**/
			+'<p class="self-commentary-ellipsis">'
			+ commentaryObject
			+'</p></div>';
		return commentaryString;
    };
    /****/
    var structureLiElementString=function(commentaryObject){
    	var li = document.createElement('li');
		li.className = 'mui-table-view-cell mui-media';
		li.innerHTML = structureCellString(commentaryObject);
    	return li;
    }
    /****/
	var createFragment = function(count) {
		var fragment = document.createDocumentFragment();
		for (var i = 0; i < count; i++) {
			fragment.appendChild(structureLiElementString(i+"xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"));
		}
		return fragment;
	};
	var lazyLoadApi = mui('#pullrefresh .mui-scroll').imageLazyload({
	    autoDestroy: false,
	    placeholder: 'data:image/png;base64,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'
	});

	mui.init({
	    pullRefresh: {
	        container: '#pullrefresh',
	        /*down: {
	            callback: function() {
	                setTimeout(function() {
	                    var elements = createFragment(5);
	                    list.insertBefore(elements, list.firstElementChild);
	                    lazyLoadApi.refresh(true);
	                    mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
	                }, 2000);
	            }
	        },*/
	        up: {
	            callback: function() {
	                setTimeout(function() {
	                    var elements = createFragment(5);
	                    element.list.appendChild(elements);
	                    lazyLoadApi.refresh(true);
	                    mui('#pullrefresh').pullRefresh().endPullupToRefresh(); //refresh completed
	                }, 2000);
	            }
	        }
	    }
	});
	element.list.appendChild(createFragment(15));
	/****/
	lazyLoadApi.refresh(true);
	/****/
	commentary.subPageProcessing=function(){

	};
	/****/
	element.commentaryBackParentPage.addEventListener('tap',function(){
		window.parent.controlSenseOfParticipationHide();
	});
	var scroll = mui('.mui-scroll-wrapper').scroll();
	/****/
	element.sendCommentary.addEventListener('tap',function(){
		var txt= element.commentaryText.value; 
        var li=structureLiElementString(txt);
        element.list.appendChild(li);
        element.list.insertBefore(li, element.list.firstElementChild);
        mui.toast('发送成功',{ duration:'long', type:'div' }); 
    	scroll.scrollTo(0,0,100);
        lazyLoadApi.refresh(true);
        element.commentaryText.value="";

	});

	

})(commentary,window);



var subPageProcessing=function(){
	commentary.subPageProcessing();
};