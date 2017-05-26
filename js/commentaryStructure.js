/**
Function.prorotype.new = function() {
  //以prototype属性值作为原型对象来克隆出一个新对象
  var that = Object.create(this.prorotype);
   
  //改变函数中this关键指向这个新克隆的对象
  var other = this.apply(that, arguments);
   
  //如果返回值不是一个对象，则返回这个新克隆对象
  return (other && typeof other === 'object') ? other : that;
}
**/
var commentaryCellElement=function(commentaryObject){
	this.commentaryObject=commentaryObject;
}

commentaryCellElement.prototype.muiMediaObject=function(){
	var img = document.createElement('img');
    img.className="mui-media-object"
    img.setAttribute("data-lazyload","http://wx.qlogo.cn/mmopen/RKeLNKp2313cLN64s6wykw53icHyZE0rnp3oJewticgVMCKGwlhvelYXHY2kibfAOmyj7aBMEKxnuiaX0NOK7TKibicWFFcKohPrfQ/0");
	return img;
}

commentaryCellElement.prototype.selfPullLeft=function(){
	var div = document.createElement('div');
	div.className = 'self-pull-left';
	div.appendChild(this.muiMediaObject());
	return div;
}

commentaryCellElement.prototype.selfCommentaryReviewer=function(){
	var span = document.createElement('span');
	span.className="self-commentary-reviewer";
	span.appendChild(document.createTextNode("overcast"));
	return span;
}

	commentaryCellElement.prototype.selfCommentaryCommentTime=function(){
		var span = document.createElement('span');
		span.className="self-commentary-comment-time";
		span.appendChild(document.createTextNode("16小时前"));
		return span;
}

commentaryCellElement.prototype.selfCommentaryEllipsis=function(){
	var p = document.createElement('p');
	p.className="self-commentary-ellipsis";
	p.appendChild(document.createTextNode(this.commentaryObject));
	return p;
}

commentaryCellElement.prototype.muiMediaBody=function(){
	var div = document.createElement('div');
	div.className = 'mui-media-body';
	div.appendChild(this.selfCommentaryReviewer());
	div.appendChild(this.selfCommentaryCommentTime());
	div.appendChild(this.selfCommentaryEllipsis());
	return div;
}

commentaryCellElement.prototype.muiTableViewCell=function(){
	var li = document.createElement('li');
	li.className = 'mui-table-view-cell mui-media';
	li.appendChild(this.selfPullLeft());
	li.appendChild(this.muiMediaBody());
	return li;
}