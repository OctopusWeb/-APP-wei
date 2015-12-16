$Pj.LightingPageController = (function(exporter){
	
	(function(){
		var src = "assets/images/frames/sp8.png";
		exporter.AssetsManager.appendImage(src, "sp8");
	})();
	
	var LightingPageController = function(view)	
	{
		
		var self = this;
		this.view = view;
		var mc = this.view.find("#mc");
		var playAnamate=null;
		var i=0;
		function animateData()
		{
			var imageSources = [];
			var canvasClip;
			initSources();
			initClip();
			
			function initSources()
			{
				var source0 = $Pj.AssetsManager.getImageByName("sp8");
				imageSources.push({img: source0, frames: 8});
			}
			
			function initClip()
			{
				var mc = self.view.find("#mc");
				canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
			}
			canvasClip.gotoAndStop(i>=8?i=0:i++);
		}
		
		
		this.view = view;
		var backBtn = this.view.find("#back");
		var product = this.view.find("#product");
		var longPress = this.view.find("#longPress");
		var icon = this.view.find("#icon1 h3");
		var light=this.view.find("#light");
		var black=this.view.find("#black");
		var scaleBg=this.view.find(".scaleBg");
		var iconBtn=this.view.find("#iconBtn");
		exporter.ButtonEffectNormar.add(icon);
		exporter.ButtonEffectNormar.add(backBtn);

		
		exporter.click(backBtn,function(e){
			exporter.GeneralManager.switchToPage("page0",exporter.Page0Controller,function(fromPageController,toPageController,onComplete){
				fromPageController.hide(function(){
					toPageController.show(onComplete);
				});
			});
		});
		
		TweenLite.set(content, {visibility:"visible"})
		var tl = new TimelineLite();
		
		exporter.click(mc,function(){
			TweenLite.to(light, 1.2, {opacity:1});
			TweenLite.to(black, 1.2, {opacity:0.5});
			iconBtn.show();
		})
		exporter.click(iconBtn,function(){
			TweenLite.to(light, 1.2, {opacity:0});
			TweenLite.to(black, 1.2, {opacity:0});
			iconBtn.hide();
		})
		
		this.show = function(onComplete)
		{	
			playAnamate=setInterval(animateData,70);
			tl.to(scaleBg, 0.2, {opacity:1,onComplete:function(){
				onComplete();
			}});
			tl.to(backBtn, 0.3, {right:"0%", opacity:1});
			tl.to(product, 0.3, {left:"5%", opacity:1});
			tl.to(longPress, 0.3, {left:"100px", opacity:1});
			tl.to(icon, 0.3, {bottom:"30px", opacity:1});
			tl.play();
		}
		
		this.hide = function(onComplete)
		{
			clearInterval(playAnamate);
			TweenLite.to(light, 0.2, {opacity:0});
			TweenLite.to(black, 0.2, {opacity:0});
			tl.to(backBtn, 0.3, {right:"-20%", opacity:0});
			tl.to(product, 0.3, {left:"0%", opacity:0});
			tl.to(longPress, 0.3, {left:"10%", opacity:0});
			tl.to(icon, 0.3, {bottom:"-100px", opacity:0});
			tl.to(scaleBg, 0.2, {opacity:0,onComplete:function(){
				onComplete();
			}});
			tl.play();
		}
	}
	return LightingPageController;
})($Pj);