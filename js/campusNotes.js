﻿/*!
 * ======================================================
 * photoControl (https://github.com/majieHoward)
 * =======================================================
 * @version:1.0.0
 * @author:120234740@qq.com
 */
/*浏览器的兼容处理方法*/
/**在DIV中创建iframe**/
var createIframe = function (el, opt) {
	var elContainer = document.querySelector('.'+el);
	/**e.g. mui-iframe-wrapper-flashShot**/
	var wrapper = document.querySelector(".mui-iframe-wrapper-"+el);
	if(!wrapper){
	    // 创建wrapper 和 iframe
	    wrapper = document.createElement('div');
	    wrapper.className = 'mui-iframe-wrapper '+'mui-iframe-wrapper-'+el;
	    for(var i in opt.style){
	        wrapper.style[i] = opt.style[i];
	    }
	    var iframe = document.createElement('iframe');
	    iframe.src = opt.url;
	    iframe.id = opt.id || opt.url;
	    iframe.name = opt.id;
	    wrapper.appendChild(iframe);
	    elContainer.appendChild(wrapper);
	}else{
	    var iframe = wrapper.querySelector('iframe');
	    iframe.src = opt.url;
	    iframe.id = opt.id || opt.url;
	    iframe.name = iframe.id;
	}
}
// mui初始化
mui.init({
	swipeBack: false,
});
/**子页面**/
var subpages = [
	'tab-webview-subpage-about.html', 
	'campusCircles.html',
	'tab-webview-subpage-setting.html'
];
var subpagescontents=[
	"about",
	"campusCircles",
	"setting"
];
var subpagescontentsIFrameIds=[
	"aboutIFrame",
	"campusCirclesIFrame",
	"settingIFrame"
];
/****/
var openFeedback_photo={
	top: '0px',
	//important
	bottom: '0px'
};
var subpage_style = {
	top: '45px',
	bottom: '51px'
};
var openDetailPager_style = {
	top: '45px',
	//important
	bottom: '0px'
};
/**点赞和评论页面**/
var senseOfParticipationPage=[
	"giveTheThumbsUp.html",
	"commentary.html"
];
var senseOfParticipations=[
	"giveTheThumbsUp",
	"commentary"
];
var senseOfParticipationsIFrameIds=[
	"giveTheThumbsUpIFrame",
	"commentaryIFrame"
];
var senseOfParticipations_style={
	top: '0px',
	//important
	bottom: '0px'
};

// 当前激活选项
var activeTab;
var activeTabTitle;
var afteractiveTab;
var afteractiveTabTitle;
var title = document.getElementById("title");
var subpage;
var subpagescontent;

for(var i=0;i<subpages.length;i++){
	subpage=subpages[i];
	subpagescontent=subpagescontents[i];
	//console.log(subpage+"      "+subpagescontent);
	// 创建iframe代替子页面
	createIframe(subpagescontent,{
	    url: subpage,
	    style: subpage_style,
	    id : subpagescontentsIFrameIds[i]
	});
}

createIframe("flashShot",{
    url: 'flashShot.html',
    style: openDetailPager_style,
    id : "flashShotIFrame"
});

// 创建iframe代替子页面
createIframe("photocontrol",{
	url: 'photoControl.html',
	style: openFeedback_photo,
	id : "photocontrolIFrame"
});

var activationPager=function(container,titleValue){
	//更换标题
	title.innerHTML=titleValue;
	var all=document.getElementsByClassName("child-content-self");
	for(var i=0;i<all.length;i++){
		all[i].style.display="none";
	}
	afteractiveTab=activeTab;
	afteractiveTabTitle=activeTabTitle;
	////更改当前活跃的选项卡  
	activeTab=container;
    activeTabTitle=titleValue;
    var contentWindowEntity=document.getElementById(container+"IFrame").contentWindow;
	contentWindowEntity.subPageProcessing;
	try {
        if(typeof contentWindowEntity.subPageProcessing === "function") { //是函数    其中 FunName 为函数名称
            contentWindowEntity.subPageProcessing();
            console.log("是函数");
        } else { //不是函数
            console.log("不是函数");
        }
    } catch(e) {

    }
	document.getElementById(container).style.display="block";

}


for(var i=0;i<senseOfParticipationPage.length;i++){
	subpage=senseOfParticipationPage[i];
	subpagescontent=senseOfParticipations[i];
	//console.log(subpage+"      "+subpagescontent);
	// 创建iframe代替子页面
	createIframe(subpagescontent,{
	    url: subpage,
	    style: senseOfParticipations_style,
	    id : senseOfParticipationsIFrameIds[i]
	});
}

/**初始化展示页面**/
var initDisplayPage=function(){
	activeTab="campusCircles";
	activeTabTitle="校yuan记";
	activationPager("campusCircles","校yuan记");
}

initDisplayPage();
// 监听tap事件，解决 a标签 不能跳转页面问题
/**add by mayijie for 侧滑出详情内容页面**/
//侧滑容器父节点body元素下的第一个节点
//<div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
var offCanvasWrapper = mui('#offCanvasWrapper');
//菜单容器
//<aside id="offCanvasSide" class="mui-off-canvas-right">
var offCanvasSide = document.getElementById("offCanvasSide");
//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果
//["mui-off-canvas-wrap","mui-draggable"]
var classList = offCanvasWrapper[0].classList;
//变换侧滑动画移动效果；
offCanvasSide.classList.remove('mui-transitioning');
offCanvasSide.setAttribute('style', '');
classList.remove('mui-slide-in');
classList.remove('mui-scalable');
classList.add('mui-slide-in');
offCanvasWrapper.offCanvas().refresh();
// 侧滑菜单界面均支持区域滚动
//mui('#offCanvasSideScroll').scroll();
/**以iframe的方式创建侧滑页面**/
//在子页面中通过window.parent.openDetailPager(pageUrl);调用
/**展示内容详情页面**/
var openDetailPager=function(pageUrl){
	//TODO
	createIframe('openDetailPager',{
	    url: pageUrl,
	    style: openDetailPager_style,
	    id : 'openDetailPager'
	});
	offCanvasWrapper.offCanvas('show');	
};
/**显示隐藏tab-iframe-main页面的header和nav**/
var controlDisplayHeaderAndNav=function(idOfControl,valueOfProperty){
	/**none隐藏 block显示**/
	/****/
	//document.getElementById("tabIframeMainHeader").style.display=valueOfProperty;
    /****/
	//document.getElementById("tabIframeMainNav").style.display=valueOfProperty;
	document.getElementById(idOfControl).style.display=valueOfProperty;
}

var evaluateIframeTopValue=function(idOfIframe,topValue){
	//.mui-iframe-wrapper-flashShot
	var iframeItem = document.querySelector('.mui-iframe-wrapper-'+idOfIframe);
	iframeItem.style.top=topValue+"px";
}

var showSelfMuiActionBack=function(isDisplay){
	document.getElementById("showSelfMuiActionBack").style.display=isDisplay;
}

var showSelfMuiActionBackElement=document.getElementById("showSelfMuiActionBack");

/**控制a标签选中状态**/
var settingMenuItemActive=function(afteractiveTab){
	var muiTabItems=document.getElementById("tabIframeMainNav").getElementsByClassName("mui-tab-item");
	for(var i=0;i<muiTabItems.length;i++){
		muiTabItems[i].classList.remove('mui-active');
	}
	document.getElementById(afteractiveTab+"MenuItem").classList.add('mui-active');
}

/**photoControl**/
var switchToFeedback=function(imgSource){
	var all=document.getElementsByClassName("child-content-self");
	for(var i=0;i<all.length;i++){
		all[i].style.display="none";
	}
	//
	controlDisplayHeaderAndNav("tabIframeMainHeader","block");
	document.getElementById("flashShotIFrame").contentWindow.swithToShowImage(imgSource);
    document.getElementById("flashShot").style.display="block";
}

/**展示图片处理页面 feedback页面中调用photoControl页面**/
var photocontrolPager=function(imgSource){

	var all=document.getElementsByClassName("child-content-self");
	for(var i=0;i<all.length;i++){
		all[i].style.display="none";
	}
	//
	document.getElementById("photocontrolIFrame").contentWindow.loadPhotoControlImg(imgSource);
	controlDisplayHeaderAndNav("tabIframeMainHeader","none");
	controlDisplayHeaderAndNav("tabIframeMainNav","none");
	document.getElementById("photocontrol").style.display="block"; 
}
// 底部菜单切换现实事件处理
mui('.mui-bar-tab').on('tap', 'a', function(e) {
	var container=this.getAttribute('container');
	if (container == activeTab) {return;}
	//显示目标选项卡
	activationPager(container,this.querySelector('.mui-tab-label').getAttribute("selfHeaderShowValue"));
	
});
/**回退按钮**/
showSelfMuiActionBackElement.addEventListener('tap',function(){
	controlDisplayHeaderAndNav("tabIframeMainNav","block");
	settingMenuItemActive(afteractiveTab);
	activationPager(afteractiveTab,afteractiveTabTitle);
	showSelfMuiActionBack("none");
});
/**控制展现点赞和评论列表**/

var controlSenseOfParticipationShow=function(iframeId){
	controlDisplayHeaderAndNav("tabIframeMainNav","none");
	controlDisplayHeaderAndNav("tabIframeMainHeader","none");
	activationPager(iframeId,"");
}

var controlSenseOfParticipationHide=function(){
	controlDisplayHeaderAndNav("tabIframeMainNav","block");
	controlDisplayHeaderAndNav("tabIframeMainHeader","block");
	settingMenuItemActive(afteractiveTab);
	activationPager(afteractiveTab,afteractiveTabTitle);
}

/****/
var releaseANewCampusCircles=function(campusCirclesObject){
	document.getElementById("campusCirclesIFrame").contentWindow.releaseCampusCircleShot(campusCirclesObject);
    controlDisplayHeaderAndNav("tabIframeMainNav","block");
	controlDisplayHeaderAndNav("tabIframeMainHeader","block");
    activationPager("campusCircles","校yuan记");
    settingMenuItemActive("campusCircles");
}