(function(){
	var scaleBgs = document.getElementsByClassName("scaleBg");
	window.onresize = resizeHandler;
	resizeHandler(null);
	
	function resizeHandler(e)
	{
		for(var i=0;i<scaleBgs.length;i++)
		{
			var scaleBg = scaleBgs[i];
			var img = scaleBg.getElementsByTagName("img")[0];
			if(img.width == 0 || scaleBg.clientWidth == 0)
			{
				img.onload = function(e){
					resizeHandler(null);
				}
			}
			else
			{
				var initSize = {width:img.width,height:img.height};
				var ts = scaleBg.clientWidth/initSize.width>scaleBg.clientHeight/initSize.height?scaleBg.clientWidth/initSize.width:scaleBg.clientHeight/initSize.height;
				img.width = ts*initSize.width;
				img.height = ts*initSize.height;
				img.style.marginLeft = (scaleBg.clientWidth - img.clientWidth)*0.5 + "px";
				img.style.marginTop = (scaleBg.clientHeight - img.clientHeight)*0.5 + "px";
			}
		}
	}
})();
