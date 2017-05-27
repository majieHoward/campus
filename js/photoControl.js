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
var imgSource;
var imgSourceSource;

var evaluateImgSource=function(imgSource){
    this.imgSource=imgSource;
    this.imgSourceSource=imgSource;
}

var obtainImgSource=function(){
    return this.imgSource;
}
var loadPhotoControlImg=function(imgSoucre){
    evaluateImgSource(imgSoucre);
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
    var uploadContainer=document.getElementById("upload-container");
    uploadContainer.innerHTML="";
    var canvas = document.createElement('canvas'); 
    canvas.id = "canvas"; 
    uploadContainer.appendChild(canvas);
    window.parent.switchToFeedback(obtainImgSource());
});



mui("#filterProcessingList").on('tap', 'a', function (event) {
    var filterMethod=this.getAttribute("filterMethod");
    var img= document.getElementById("processedPicture");
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    
    var imageData = ctx.getImageData(0,0,canvas.width, canvas.height);
    ctx.putImageData(negativeFilter(imageData),0,0);  
});

