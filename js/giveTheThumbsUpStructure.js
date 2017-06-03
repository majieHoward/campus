var giveTheThumbsUpObjectCellElement=function(giveTheThumbsUpObject){
    this.giveTheThumbsUpObject=giveTheThumbsUpObject;
}

giveTheThumbsUpObjectCellElement.prototype.muiMediaObject=function(){
    var img = document.createElement('img');
    img.className="mui-media-object";
    img.setAttribute("data-lazyload","http://wx.qlogo.cn/mmopen/RKeLNKp2313cLN64s6wykw53icHyZE0rnp3oJewticgVMCKGwlhvelYXHY2kibfAOmyj7aBMEKxnuiaX0NOK7TKibicWFFcKohPrfQ/0");
    return img;
}

giveTheThumbsUpObjectCellElement.prototype.selfPullLeft=function(){
 	var div = document.createElement('div');
    div.className = "self-pull-left";
    div.appendChild(this.muiMediaObject());
    return div;
}

campusCircleCellElement.prototype.reviewer=function(){
    var span = document.createElement('span');
    span.className = "self-giveTheThumbsUp-reviewer";
    span.appendChild(document.createTextNode('overcast'));
    return span;
}

campusCircleCellElement.prototype.commentTime=function(){
    var span = document.createElement('span');
    span.className = "self-giveTheThumbsUp-comment-time";
    span.appendChild(document.createTextNode('16小时前'));
    return span;
}

giveTheThumbsUpObjectCellElement.prototype.muiMediaBody=function(){
	var div = document.createElement('div');
    div.className = "mui-media-body";
    div.appendChild(reviewer());
    div.appendChild(commentTime());
    return div;
}

giveTheThumbsUpObjectCellElement.prototype.muiMedia=function(){
	var li= document.createElement('li');
    li.className = 'mui-table-view-cell mui-media';
    li.appendChild(this.selfPullLeft());
    li.appendChild(this.muiMediaBody());
    return li;
}