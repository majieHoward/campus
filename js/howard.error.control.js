/*!
 * ======================================================
 * photoControl (https://github.com/majieHoward)
 * =======================================================
 * @version:1.0.0
 * @author:120234740@qq.com
 */
(function(control) {
	/**全局错误提示**/
	control.onerror = function (errMsg, scriptURI, lineNumber, columnNumber, errorObj) {
		    setTimeout(function () {
		        var rst = {
		            "错误信息：": errMsg,
		            "出错文件：": scriptURI,
		            "出错行号：": lineNumber,
		            "出错列号：": columnNumber,
		            "错误详情：": errorObj
		        };
		        console.log('出错了，下一步将显示错误信息');
		        console.log(JSON.stringify(rst, null, 10));
		    });
	};

	function selfHumpNaming(str){
 		if(str.indexOf("-")!=-1){
			//包含
            //toLowerCase() 方法用于把字符串转换为小写
	 		var convertToArray=str.toLowerCase().split("-");
	 		if(convertToArray.length>0){
				for(var i=1;i<convertToArray.length;i++){
					var char=convertToArray[i].charAt(0);
					convertToArray[i]=convertToArray[i].replace(char,function replace(char){
						return char.toUpperCase();
					});
		 		}
		 		return convertToArray.join("");
	 		}
		}else{
			//不包含
			return str;
		}
 		
 		
 	};

 	control.selfErgodicElement=function(node,arrayItem) {  
	    //得到当前节点的所有的孩子节点 
	    if (node.nodeType == 1) { //判断是否是  元素节点 
	        if("undefined"!=typeof(node.id)&&node.id.length>0){
		    	//console.log(selfHumpNaming(node.id));
		    	arrayItem[selfHumpNaming(node.id)]=document.getElementById(node.id);
		    
		    }
	        if (node.hasChildNodes()) { //此元素节点是否有孩子节点  
	            var childs = node.childNodes;  
	            for ( var i = 0; i < childs.length; i++) {  
	                var child = childs.item(i);//得到孩子节点  
	                selfErgodicElement(child,arrayItem);  
	            }  
	        }  
	          
	    } else {  
	    	if("undefined"!=typeof(node.id)&&node.id.length>0){
	    		//console.log(selfHumpNaming(node.id));
	    		//console.log(node==document.getElementById(node.id));
		    	arrayItem[selfHumpNaming(node.id)]=document.getElementById(node.id);
		    	
		    	
	    	}
	    }  
	};
    
    var domainUrl="http://127.0.0.1:9999";

    control.networkRequest={
        comment:domainUrl+"/campus/comment.howard"
    };

})(window);