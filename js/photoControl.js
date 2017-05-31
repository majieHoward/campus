/*!
 * ======================================================
 * photoControl (https://github.com/majieHoward)
 * =======================================================
 * @version:1.0.0
 * @author:120234740@qq.com
 */
mui.init();
mui('.mui-scroll-wrapper').scroll({
    bounce: true,
    indicators: true
});
mui('.mui-scroll').on('tap','.mui-control-item:not(.mui-active)',function(){
    
});


var constructionFilter=function(classNameValue,filterMethodValue,filterName){
    var a= document.createElement("a");
    a.className=classNameValue;
    a.setAttribute("filterMethod",filterMethodValue);
    a.appendChild(document.createTextNode(filterName));
    return a;
}

var clearFilterSelect=function(){
    var aItems = document.getElementById('filterProcessingList').getElementsByClassName('mui-control-item');
    var aItemClassList;
    for(var i=0;i<aItems.length;i++){
        //默认勾选第一个滤镜*
        aItemClassList=aItems[i].classList;
        if(aItemClassList.contains("noneFilter")){
            aItemClassList.add("mui-active");
        }else{
            aItemClassList.remove("mui-active");
        }
    } 
   
}

var clearCanvasItems=function(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var canvasBackups = document.getElementById('canvasBackups');
    var ctxBackups = canvasBackups.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);  
    ctxBackups.clearRect(0,0,canvasBackups.width,canvasBackups.height);
}
/**拍摄或者选择一个新的图片调用该方法**/
var loadPhotoControlImg=function(imgSoucre){
    clearFilterSelect();
    clearCanvasItems();
    var img = new Image();
    img.src = imgSoucre;
    img.onload = function () {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width = img.width;//////////重点  
        canvas.height = img.height;//////////重点  
        ctx.clearRect(0,0,canvas.width,canvas.height);  
        ctx.drawImage(img,0,0,canvas.width,canvas.height); 
        //图片以原先尺寸呈现 
        canvas.style.width = '100%';//////////重点  
        //ctx.drawImage(img, 0, 0,width,height,0,0,width,height);
        var canvasBackups = document.getElementById('canvasBackups');
        var ctxBackups = canvasBackups.getContext('2d');
        canvasBackups.width = img.width;//////////重点  
        canvasBackups.height = img.height;//////////重点  
        ctxBackups.clearRect(0,0,canvasBackups.width,canvasBackups.height);  
        ctxBackups.drawImage(img,0,0,canvasBackups.width,canvasBackups.height); 
        //图片以原先尺寸呈现 
        canvasBackups.style.width = '100%';//////////重点  
        //ctx.drawImage(img, 0, 0,width,height,0,0,width,height);
    };     
    //document.getElementById("processedPicture").src=imgSoucre;
}

var subPageProcessing=function(){

};
/**未完成图片改造**/
var gotobackFeedback=document.getElementById("gotobackFeedback");

gotobackFeedback.addEventListener('tap',function(){

    document.getElementById("upload-container").innerHTML="";
    window.parent.switchToFeedback();
});

/**完成了图片的改造**/
var completeFeedback=document.getElementById("completeFeedback");
completeFeedback.addEventListener('tap',function(){
    /*
    var uploadContainer=document.getElementById("upload-container");
    uploadContainer.innerHTML="";
    var canvas = document.createElement('canvas'); 
    canvas.id = "canvas"; 
    uploadContainer.appendChild(canvas);
    var canvasBackups = document.createElement('canvas');
    canvasBackups.id="canvasBackups";
    canvasBackups.style.display="none";
    uploadContainer.appendChild(canvasBackups);
    */
    var canvas = document.getElementById('canvas');
    /**将canvas转换成img**/
    window.parent.switchToFeedback(canvas.toDataURL("image/png"));
});

var imageFilterProcessing=function(filterMethodValue,imageData){
    if("noneFilter"===filterMethodValue){
        return imageData;
    }
    if("negativeFilter"===filterMethodValue){  		//反色
        return negativeFilter(imageData);   		//反色
    } 
    if("BAW_Filter"===filterMethodValue){        		//黑白
        return BAW_Filter(imageData);
    }     		//黑白
    if("embossFilter"===filterMethodValue){ 	 		//浮雕
        return embossFilter(imageData);
    }	 		//浮雕
    if("sunglassFilter"===filterMethodValue){ 	 		//墨镜
        return sunglassFilter(imageData);	
    } 		//墨镜
    if("grayFilter"===filterMethodValue){ 		 		//灰度
        return grayFilter(imageData);
    }		 		//灰度
    if("reminiscenceFilter"===filterMethodValue){ 		//怀旧
        return reminiscenceFilter(imageData);
    }		//怀旧
    if("comicFilter"===filterMethodValue){ 				//连环画
        return comicFilter(imageData);
    }				//连环画
    if("castingFilter"===filterMethodValue){ 			//熔铸
        return castingFilter(imageData);
    }			//熔铸
    if("freezeFilter"===filterMethodValue){ 			//冰冻
        return freezeFilter(imageData);
    }			//冰冻
    if("spreadFilter"===filterMethodValue){ 			//模糊
        return spreadFilter(imageData);
    }			//模糊
    if("mosaicsFilter"===filterMethodValue){ 			//马赛克
        return mosaicsFilter(imageData);
    }			//马赛克
    if("neonFilter"===filterMethodValue){ 				//霓虹
        return neonFilter(imageData);
    }				//霓虹
    if("exposureFilter"===filterMethodValue){ 			//曝光
        return exposureFilter(imageData);
    }			//曝光
    if("pencilDrawing"===filterMethodValue){ 			//铅笔画
        return pencilDrawing(imageData);
    }			//铅笔画
    if("woodCarving	"===filterMethodValue){ 			//木雕
        return woodCarving(imageData);	
    }			//木雕
    if("softenFilter"===filterMethodValue){ 			//柔化
        return softenFilter(imageData);
    }			//柔化
    if("sketchFilter"===filterMethodValue){ 			//素描
        return sketchFilter(3,1,imageData);
    }			//素描
    if("sharpenFilter"===filterMethodValue){ 			//锐化
        return sharpenFilter(imageData);
    }	
    return imageData;		//锐化
}

/**切换不同的滤镜**/
mui("#filterProcessingList").on('tap', 'a', function (event) {
    var filterMethod=this.getAttribute("filterMethod");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var canvasBackups = document.getElementById('canvasBackups');
    var ctxBackups = canvasBackups.getContext('2d');
    var imageData = ctxBackups.getImageData(0,0,canvasBackups.width,canvasBackups.height);
    ctx.putImageData(imageFilterProcessing(filterMethod,imageData),0,0);  
});
