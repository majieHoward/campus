wx.config({
    // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    debug: true, 
    // 必填，公众号的唯一标识
	//appId: 'wx6b329d8655332d02',
    appId: 'wx8ab71f9d913fe870',
	// 必填，生成签名的时间戳 
    timestamp: 1496283598, 
	// 必填，生成签名的随机串
    nonceStr: 'Wm3WZYTPz0wzccnW', 
	// 必填，签名，见附录1
    //signature: 'b34ba1399ec0276d0982f1656a6c7250950f16da',
    signature: 'baa59b8f87171a01bdf12ca733f1998ac6175f42',
	// 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    jsApiList: [  
    	'openLocation',//这里不知道你用的地理接口是哪个就两个都写上了
      	'getLocation'
    ] 
});

wx.ready(function(){

    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
});

wx.error(function(res){

    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    //{errMsg: "config:invalid url domain"}
    //{"errMsg":"config:ok"}
    console.log("出错了");
    console.log(res);
});

wx.checkJsApi({

    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,

    success: function(res) {

        console.log(res);

    }

});
