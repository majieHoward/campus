/*!
 * ======================================================
 * photoControl (https://github.com/majieHoward)
 * =======================================================
 * @version:1.0.0
 * @author:120234740@qq.com
 */
var flashNote={};

var str = "";  


(function(flashNote,window) {

	var pictureStatusValue = 0;

	//var currentPhotoObject;

	mui.init();

	mui('.mui-scroll-wrapper').scroll({
	    bounce: true,
	    indicators: true
	});

	mui('.mui-scroll').on('tap','.mui-control-item:not(.mui-active)',function(){
	    
	});
 	
 	var maxSayDescribelen = 140;

 	
	var element={};
    window.selfErgodicElement(document.body,element);
	var controlDescribeElement=function(headId,displayValue,iframeName,topVlaue,contentTopValue){
		window.parent.controlDisplayHeaderAndNav(headId,displayValue);
		window.parent.evaluateIframeTopValue(iframeName,topVlaue);
		document.getElementById("tab-feedback-content").style.paddingTop=contentTopValue+"px";
	}
	//下沉菜单中的点击事件
	var busying = false;
	var toggleOfDescribe=function() {
		if (busying) {
			return;
		}
		busying = true;
		/**
			展开menu-wrapper时,menuWrapperClassList的值为(menu-wrapper fade-in-down animated mui-active)
			关闭menu-wrapper时,menuWrapperClassList的值为(menu-wrapper fade-out-up animated hidden)
		**/
		var menuWrapperClassList = element.menuWrapper.classList;
		if (menuWrapperClassList.contains('mui-active')) {
			/**收起输入框**/
			document.body.classList.remove('menu-open');
			element.menuWrapper.className = 'menu-wrapper fade-out-up animated';
			element.sayDescribe.className = 'menu bounce-out-up animated';
			setTimeout(function() {
				/**opacity 从 0.0 （完全透明）到 1.0（完全不透明）**/
				element.menuBackdrop.style.opacity = 0;
				document.getElementById("textareaOfDescribe").focus();
				controlDescribeElement("tabIframeMainHeader","block","flashShot",45,0);
				element.menuWrapper.classList.add('hidden');
			}, 1);
		} else {
			/**展开输入框**/
			document.body.classList.add('menu-open');
			element.menuWrapper.className = 'menu-wrapper fade-in-down animated mui-active';
			element.sayDescribe.className = 'menu bounce-in-down animated';
			/**opacity 从 0.0 （完全透明）到 1.0（完全不透明）**/
			element.menuBackdrop.style.opacity = 0.5;
			
			controlDescribeElement("tabIframeMainHeader","none","flashShot",0,45);
	 		document.getElementById("textareaOfDescribe").blur();
		}
		setTimeout(function() {
			busying = false;
		}, 1);
	}

	
	var synchronousSaydata=function(){
		//同步数据
		if(element.textareaOfDescribe.value.length==0){
			element.showSayDescribeValue.value="";
		}else{
			element.showSayDescribeValue.value=element.textareaOfDescribe.value;
		}
	}

	/**匹配输入的字数不超过限制数字**/
	var checkLength=function() {    
		if (element.textareaOfDescribe.value.length > maxSayDescribelen){    
			element.textareaOfDescribe.value = element.textareaOfDescribe.value.substring(0,maxSayDescribelen);  
		}
		var curr = maxSayDescribelen - element.textareaOfDescribe.value.length;    
		document.getElementById("countFontNumber").innerHTML = curr.toString();    
		synchronousSaydata();
	}    

    var isSelfSee=function(){
    	/**
		mui-table-view-cell self-locked-say
		mui-table-view-cell self-locked-say-active
		**/
		var selfSeeContentClassList = element.selfSeeContent.classList;

		if (selfSeeContentClassList.contains('self-locked-say-active')) {
			/**当前为激活状态改为非激活状态**/
			//element.selfSeeContent.className="mui-table-view-cell self-locked-say";
			return "active";
		} else if(selfSeeContentClassList.contains('self-locked-say')) {
			
			/**当前为非激活状态改为激活状态**/
			//element.selfSeeContent.className="mui-table-view-cell self-locked-say-active";
			return "locked"
		}
    }
	var controlSelfSeeContent=function(){
		/**
		mui-table-view-cell self-locked-say
		mui-table-view-cell self-locked-say-active
		**/
		//var selfSeeContentClassList = element.selfSeeContent.classList;

		//if (selfSeeContentClassList.contains('self-locked-say-active')) {
			/**当前为激活状态改为非激活状态**/
			
			//element.selfSeeContent.className="mui-table-view-cell self-locked-say";
			
		//} else if(selfSeeContentClassList.contains('self-locked-say')) {
			
			/**当前为非激活状态改为激活状态**/
		//	element.selfSeeContent.className="mui-table-view-cell self-locked-say-active";
		//}
		if("active"===isSelfSee()){
			/**当前为激活状态改为非激活状态**/
			element.selfSeeContent.className="mui-table-view-cell self-locked-say";
		}else if("locked"===isSelfSee()){
			/**当前为非激活状态改为激活状态**/
			element.selfSeeContent.className="mui-table-view-cell self-locked-say-active";
		}
	}
	/**
	 * 通过随机数模拟业务进度，真实业务中需根据实际进度修改
	 * @param {Object} container
	 * @param {Object} progress
	 */
	var simulateLoading=function(container, progress) {
		if (typeof container === 'number') {
			progress = container;
			container = 'body';
		}
		setTimeout(function() {
			progress += Math.random() * 20;
			mui(container).progressbar().setProgress(progress);
			if (progress < 100) {
				simulateLoading(container, progress);
			} else {
				//mui(container).progressbar().hide();
			}
		}, Math.random() * 200 + 200);
	}

    /**还原页面**/
    var restorePage=function(){
        /**清空图片**/
		element.takeAPictureElement.style.display="block";
		element.showAPictureElement.style.display="none";
        /**清空留言**/
        element.textareaOfDescribe.value=""
        element.showSayDescribeValue.value="";
        document.getElementById("countFontNumber").innerHTML = 140;
        /**清空地区选择**/

        /**取消仅自己可见**/
        var selfSeeContentClassList = element.selfSeeContent.classList;
		element.selfSeeContent.className="mui-table-view-cell self-locked-say";
    }

    /**构造校园圈内容**/
    var structureParameterObj=function(){
 		var publishMessageObject={};
        /**article文字**/
        publishMessageObject.a=element.textareaOfDescribe.value;
        /**picture图片**/
        publishMessageObject.b=document.getElementById("showImageEntity").src;
        /**secrecy仅自己可看**/
        if("active"===isSelfSee()){
			/**当前为激活状态**/
			publishMessageObject.c="0";
		}else if("locked"===isSelfSee()){
			/**当前为非激活状态**/
			publishMessageObject.c="1";
		}
 		return publishMessageObject;
    }

    /**发布校园圈**/
 	var publishItemMessage=function(){
 		/**判断**/
		/**可以只发图片或者只发文字**/
		//var container = mui("#publishMessageBar");
		//因为本页面既有顶部准确进度的进度条，也有顶部无限循环的进度条，因此这里需要强制定义progress: undefined覆盖；
					//一般使用时，mui(container).progress()构造方法中不传入参数，就表示无限循环；
		/*container.progressbar({
			progress: undefined
		}).show();*/
		//超时后隐藏
		/*setTimeout(function() {
			mui('#publishMessageBar').progressbar().hide();
		}, 5000);*/
		/**发布后清空所有的内容**/
		/**判断是否有内容**/
		mui.ajax(window.networkRequest.comment,{
			data:structureParameterObj(),
			dataType:'json',//服务器返回json格式数据
			type:'post',//HTTP请求类型
			//processData:false,
			timeout:10000,//超时时间设置为10秒;
			//application/x-www-form-urlencoded
			//headers:{'Content-Type':'application/json'},
			headers:{'Content-Type':'application/x-www-form-urlencoded'},	              
			success:function(data){
				//服务器返回响应，根据响应结果，分析是否登录成功；
				console.log(data);
			},
			error:function(xhr,type,errorThrown){
				//异常处理；
				console.log(type);
			}
		});
		restorePage();
		//window.parent.releaseANewCampusCircles(element.textareaOfDescribe.value);
	}

	flashNote.swithToShowImage=function(imgSource){
		document.getElementById("showImageEntity").src=imgSource;
		element.takeAPictureElement.style.display="none";
		element.showAPictureElement.style.display="block";
	}
	
	flashNote.subPageProcessing=function(){
		window.parent.showSelfMuiActionBack("block");
		window.parent.controlDisplayHeaderAndNav("tabIframeMainNav","none");
	};

	flashNote.loadPhotoControlImg=function(imgSoucre){
	    var img = new Image(),
	    div = document.createElement('div');
	    div.appendChild(img);
	    img.onload = function () {
	        document.querySelector('#upload-container').appendChild(div);
	    }; 
	    //currentPhotoObject=imgSoucre;    
	    img.src = imgSoucre;
	}
	/**删除当前图片重新拍摄或者选择图片**/
	element.imageShowDeleteItem.addEventListener('tap',function(){
		//pictureStatusValue = 0;
		//currentPhotoObject=undefined;　　
		element.takeAPictureElement.style.display="block";
		element.showAPictureElement.style.display="none";
	});
	/**发布闪记**/
	element.publishMessage.addEventListener('tap',publishItemMessage);
    /**选取控制是否发布的闪记只对自己可见**/
	element.selfSeeContent.addEventListener('tap', controlSelfSeeContent);
	/**重新编辑当前图片**/
	element.imageShowEditItem.addEventListener('tap',function(){
		//pictureStatusValue = 1;
	    /**重新调用photoControl.html页面**/

	    /**重新编辑图片如果点击继续按钮需要显示之前已经修改好的图片滤镜效果**/

        /**记录的状态值**/
         window.parent.showPhotocontrolPager();


	});
	/**拍照或者选择图片**/
	document.querySelector('input').addEventListener('change', function () {
	    var that = this;
	    lrz(that.files[0], {
	        width: 800
	    }).then(function (rst) {
	        window.parent.photocontrolPager(rst.base64);
	        //return rst;
	    });
	});
	element.textareaOfDescribe.addEventListener("keyup",checkLength);
	element.menuBackdrop.addEventListener('tap', toggleOfDescribe);
	element.showSayDescribe.addEventListener('tap', toggleOfDescribe);
	mui('.self-sayinput-header').on('tap', 'a', function(e) {
		toggleOfDescribe();
	});

	/**选择快捷输入的条目**/
	mui('.mui-popover').on('tap','li',function(e){
	  element.showSayDescribeValue.value = element.showSayDescribeValue.value + this.children[0].innerHTML;
	  element.textareaOfDescribe.value=element.showSayDescribeValue.value;
	  mui('.mui-popover').popover('toggle')
	});

})(flashNote,window);

var subPageProcessing=function(){
	flashNote.subPageProcessing();
};

var loadPhotoControlImg=function(imgSoucre){
	flashNote.loadPhotoControlImg(imgSoucre);
};

var swithToShowImage=function(imgSource){
	flashNote.swithToShowImage(imgSource);
}