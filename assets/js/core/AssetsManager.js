$Pj.AssetsManager = (function(){
	var AssetsManager = {};
	AssetsManager.imgs = {};
	
	AssetsManager.appendImage = function(src,name)
	{
		AssetsManager.imgs[name] = {name:name,src:src};
	}
	
	AssetsManager.getImageByName = function(name)
	{
		return AssetsManager.imgs[name].image;
	}
	
	AssetsManager.start = function(onComplete)
	{
		var imgNames = [];
		for(var src in AssetsManager.imgs)
		{
			imgNames.push(src);
		}
		var idx = 0;
		loadImage(idx);
		
		function loadImage(idx)
		{
			var img = new Image();
			img.src = AssetsManager.imgs[imgNames[idx]].src;
			img.onload = function(e)
			{
				AssetsManager.imgs[imgNames[idx]].image = img;
				idx++;
				if(idx<imgNames.length)
				{
					loadImage(idx);
				}
				else
				{
					allDone();
				}
			}
		}
		
		function allDone()
		{
			onComplete();
		}
	}
	
	return AssetsManager;
})();
