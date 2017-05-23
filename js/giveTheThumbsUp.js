var giveTheThumbsUp={};

var str = "";  

(function(giveTheThumbsUp,window) {
	mui.init();
	var element={};
    window.selfErgodicElement(document.body,element);
	var createFragment = function(count) {
		var fragment = document.createDocumentFragment();
		var li;
		for (var i = 0; i < count; i++) {
			li = document.createElement('li');
			li.className = 'mui-table-view-cell mui-media';
			li.innerHTML = '<a class="mui-navigate-right">'
			+'<img class="mui-media-object mui-pull-left" '
			+'data-lazyload="http://127.0.0.1:8080/images/' + (i % 5 + 1) + '.jpg?version=' + Math.random() * 1000 + '">'
			+'<div class="mui-media-body">主标题<p class="mui-ellipsis">列表二级标题</p></div></a>';
			fragment.appendChild(li);
		}
		return fragment;
	};
	element.list.appendChild(createFragment(50));
	mui(document).imageLazyload({
		placeholder: 'images/60x60.gif'
	});
	giveTheThumbsUp.subPageProcessing=function(){

	}
})(giveTheThumbsUp,window);

var subPageProcessing=function(){
	giveTheThumbsUp.subPageProcessing();
};