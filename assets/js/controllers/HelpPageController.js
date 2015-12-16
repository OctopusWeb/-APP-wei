$Pj.HelpPageController = (function(exporter){
	
	(function(){
		var src = "assets/images/frames/lp8.png";
		exporter.AssetsManager.appendImage(src, "lp8");
	})();
	
	var HelpPageController = function(view)	
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
				var source0 = $Pj.AssetsManager.getImageByName("lp8");
				imageSources.push({img: source0, frames: 8});
			}
			
			function initClip()
			{
				var mc = self.view.find("#mc");
				canvasClip = new exporter.CanvasClip(mc.get(0),imageSources[0]);
			}
			canvasClip.gotoAndStop(i>=8?i=0:i++);
		}
		
			
		var backBtn = this.view.find("#back");
		var scaleBg=this.view.find(".scaleBg");
		var product = this.view.find("#product");
		var mc = this.view.find("#mc");
		var icon = this.view.find("#icon1 h3");
		var productShow = this.view.find("#productShow")
		var iconBtn = this.view.find("#iconBtn");
		var helpMessage=this.view.find("#helpMessage")
		var line=this.view.find("#line1")
		var myaudio1=this.view.find("#myaudio1")
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
		var time=null;

		mc.bind("touchstart", function (e) {
			e.preventDefault();
		});
		mc.bind("longtap",function(e){
			e.preventDefault();
			time=setTimeout(function(){
				TweenLite.to(product, 1.2, {opacity:0});
				TweenLite.to(productShow, 1.2, {opacity:1});
				iconBtn.show();
				myaudio1.get(0).play();
				TweenLite.to(line, 0.5, {opacity:0.7});
				setTimeout("TweenLite.to(helpMessage, 1.2, {top:80,opacity:1});",1500)
			},1000)
		});	
		

		
		exporter.click(iconBtn,function(){
			reduction()
		});
		
		function reduction(){
			TweenLite.to(product, 1.2, {opacity:1});
			TweenLite.to(helpMessage, 2, {top:300,opacity:0})
			TweenLite.to(productShow, 1.2, {opacity:0});
			TweenLite.to(line, 0.5, {opacity:0});
			iconBtn.hide();
		}
		this.show = function(onComplete){
			playAnamate=setInterval(animateData,70);
			tl.to(scaleBg, 0.2, {opacity:1,onComplete:function(){
				onComplete();
			}});
			tl.to(backBtn, 0.3, {right:"0%", opacity:1});
			tl.to(product, 0.3, {left:"5%", opacity:1});
			tl.to(icon, 0.3, {bottom:"30px", opacity:1});
			tl.play();
		}
		this.hide = function(onComplete){
			clearInterval(playAnamate)
			reduction();
			tl.to(backBtn, 0.3, {right:"-20%", opacity:0});
			tl.to(product, 0.3, {left:"0%", opacity:0});
			tl.to(icon, 0.3, {bottom:"-100px", opacity:0});
			tl.to(scaleBg, 0.2, {opacity:0,onComplete:function(){
				onComplete();
			}});
			tl.play();
		}
		
	}
	return HelpPageController;
})($Pj);