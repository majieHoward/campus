var campusCircleCellElement=function(campusCircleObject){
    this.campusCircleObject=campusCircleObject;
}

campusCircleCellElement.prototype.headImg=function(){
    var img = document.createElement('img');
    img.className="mui-media-object"
    img.setAttribute("data-lazyload","http://wx.qlogo.cn/mmopen/RKeLNKp2313cLN64s6wykw53icHyZE0rnp3oJewticgVMCKGwlhvelYXHY2kibfAOmyj7aBMEKxnuiaX0NOK7TKibicWFFcKohPrfQ/0");
    return img;
}

campusCircleCellElement.prototype.detailOfArea=function(){
    var p = document.createElement('p');
    p.appendChild(document.createTextNode("22 小时前(10:35) · 晴 4 度 · 15千米"));
    return p;
}

campusCircleCellElement.prototype.iconSelfWeizhi=function(){
    var span = document.createElement('span');
    span.className = "mui-icons-self icon-self-weizhi";
    span.appendChild(document.createTextNode("成都市"));
    return span;
}

campusCircleCellElement.prototype.muiMediaBody=function(){
    var div = document.createElement('div');
    div.className = "mui-media-body";
    div.appendChild(document.createTextNode("overcast"));
    div.appendChild(this.iconSelfWeizhi());
    div.appendChild(this.detailOfArea());
    return div;
}

campusCircleCellElement.prototype.muiCardHeader=function(){
    var div = document.createElement('div');
    div.className = "mui-card-header mui-card-media";
    div.appendChild(this.headImg());
    div.appendChild(this.muiMediaBody());
    return div;
}

campusCircleCellElement.prototype.participateInOperationItem=function(aClassName,spanClassName){
    var a = document.createElement('a');
    a.className=aClassName;
    var span = document.createElement('span');
    span.className = spanClassName;
    a.appendChild(span);
    return a;
}

campusCircleCellElement.prototype.participateInOperation=function(){
    var p = document.createElement('p');
    p.className="mui-self-card-footer";
    p.appendChild(this.participateInOperationItem("campusCircle-praise","mui-icons-feedback-self icon-feedback-aixin"));
    p.appendChild(this.participateInOperationItem("ampusCircle-commentary","mui-icons-feedback-self icon-feedback-pinglun"));
    return p;
}

campusCircleCellElement.prototype.circleOfFriends=function(){
    var p = document.createElement('p');
    p.style="color: #000000;";
    p.appendChild(document.createTextNode(this.campusCircleObject));
    return p;
}

campusCircleCellElement.prototype.muiSelfCardContentInner=function(){
    var div = document.createElement('div');
    div.className = "mui-card-content-inner mui-self-card-content-inner"
    div.appendChild(this.circleOfFriends());
    div.appendChild(this.participateInOperation());
    return div;
}

campusCircleCellElement.prototype.muiCardContentImage=function(){
    var img = document.createElement('img');
    img.style="width:100%;"
    img.setAttribute("data-lazyload","http://127.0.0.1:8080/images/1.jpg");
    return img;
}

campusCircleCellElement.prototype.muiCardContent=function(){
    var div = document.createElement('div');
    div.className = "mui-card-content";
    div.appendChild(this.muiCardContentImage());
    div.appendChild(this.muiSelfCardContentInner());
    return div;
}

campusCircleCellElement.prototype.totalNumberPraise=function(){
    var span = document.createElement('span');
    span.className = "campusCircle-total-number-praise";
    span.appendChild(document.createTextNode(19));
    return span;
}

campusCircleCellElement.prototype.footerGiveTheThumbsUpList=function(){
    var div = document.createElement('div');
    div.className = "mui-icons-feedback-self mui-icons-partake-self icon-feedback-aixin1 campusCircle-giveTheThumbsUp-list"
    div.appendChild(this.totalNumberPraise());
    div.appendChild(document.createTextNode("个赞"));
    return div;
}

campusCircleCellElement.prototype.muiCircleViewCellListSelfPullLeft=function(){
    var div = document.createElement('div');
    div.className = "self-pull-left";
    var span = document.createElement('span');
    span.className = "mui-icons-feedback-self mui-icons-partake-self icon-feedback-comment campusCircle-commentary-list";
    div.appendChild(span);
    return div;
}

campusCircleCellElement.prototype.viewAllCommentatorEllipsis=function(){
    var p = document.createElement('p');
    p.className = "view-all-commentator-ellipsis";
    var span = document.createElement('span');
    span.className = "view-all-commentator";
    span.appendChild(document.createTextNode("查看所有10条评论"));
    p.appendChild(span);
    return p;
}

campusCircleCellElement.prototype.viewCommentatorEllipsis=function(){
    var p = document.createElement('p');
    p.className = "self-commentary-ellipsis";
    var span = document.createElement('span');
    span.className = "ellipsis-commentator";
    span.appendChild(document.createTextNode("马一杰:"));
    p.appendChild(span);
    p.appendChild(document.createTextNode("你拍风景总是大气又细致,看完你拍的景我把昨天拍的桥都是删了,这就是美的力量"));
    return p;
}

campusCircleCellElement.prototype.muiCircleViewCellListSelfMuiMediaBody=function(){
    var div = document.createElement('div');
    div.className = "mui-media-body";
    div.appendChild(this.viewCommentatorEllipsis());
    div.appendChild(this.viewAllCommentatorEllipsis());
    div.appendChild(this.viewCommentatorEllipsis());
    return div;
}

campusCircleCellElement.prototype.muiCircleViewCellList=function(){
    var div = document.createElement('div');
    div.className = "mui-circles-view-cell mui-media";
    div.appendChild(this.muiCircleViewCellListSelfPullLeft());
    div.appendChild(this.muiCircleViewCellListSelfMuiMediaBody());
    return div;
}

campusCircleCellElement.prototype.muiSelfCardFooter=function(){
    var div = document.createElement('div');
    div.className = "mui-self-partake-footer";
    div.appendChild(this.footerGiveTheThumbsUpList());
    div.appendChild(this.muiCircleViewCellList());
    return div;
}

campusCircleCellElement.prototype.muiCard=function(){
    var li= document.createElement('li');
    li.className = 'mui-card';
    li.appendChild(this.muiCardHeader());
    li.appendChild(this.muiCardContent());
    li.appendChild(this.muiSelfCardFooter());
    return li;
}