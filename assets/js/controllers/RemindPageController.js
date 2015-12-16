$Pj.RemindPageController = (function(exporter){
	var RemindPageController = function(view)	
	{
		this.view = view;
		var backBtn = this.view.find("#back");
		var product = this.view.find("#product");
		var icon = this.view.find("#icon1 h3");
		var scaleBg=this.view.find(".scaleBg");
		var round=this.view.find("#round");
		var wifi=this.view.find("#wifi");
		var h1=this.view.find("#h1");
		var h2=this.view.find("#h2");
		var h3=this.view.find("#h3");
		var time1=this.view.find("#time1");
		var time2=this.view.find("#time2");
		var time3=this.view.find("#time3");
		var myaudio1=this.view.find("#myaudio1");
		var myaudio2=this.view.find("#myaudio2");
		var myaudio3=this.view.find("#myaudio3");
		exporter.ButtonEffectNormar.add(icon);
		exporter.ButtonEffectNormar.add(backBtn);
		
		backBtn.click(function(e){
			tl.clear();
			exporter.GeneralManager.switchToPage("page0",exporter.Page0Controller,function(fromPageController,toPageController,onComplete){
				fromPageController.hide(function(){
					toPageController.show(onComplete);
				});
			});
		});
		
		TweenLite.set(content, {visibility:"visible"})
		var tl = new TimelineLite();
		
		
		this.show = function(onComplete)
		{	
			tl.to(scaleBg, 0.2, {opacity:1,onComplete:function(){
				myaudio1.get(0).play();
				onComplete();
			}});
			tl.to(backBtn, 0.3, {right:"0%", opacity:1});
			tl.to(product, 0.3, {left:"50%", opacity:1});
			tl.to(icon, 0.3, {bottom:"30px", opacity:1});
			tl.to(wifi, 0.5, {opacity:1});
			tl.to([h1,time1], 0.5, {opacity:1});
			tl.to([h1,time1], 1, {opacity:1});
			tl.to(wifi, 0.5, {opacity:0});
			tl.to([h1,time1], 0.5, {opacity:0});
			tl.staggerTo(round, 2, {rotation:120,onComplete:function(){
				myaudio2.get(0).play();
			}});
			tl.to(wifi, 0.5, {opacity:1});
			tl.to([h2,time2], 0.5, {opacity:1});
			tl.to([h2,time2], 1, {opacity:1});
			tl.to(wifi, 0.5, {opacity:0});
			tl.to([h2,time2], 0.5, {opacity:0});
			tl.staggerTo(round, 2, {rotation:240,onComplete:function(){
				myaudio3.get(0).play();
			}});
			tl.to(wifi, 0.5, {opacity:1});
			tl.to([h3,time3], 0.5, {opacity:1});
			tl.to([h3,time3], 1, {opacity:1});
			tl.to(wifi, 0.5, {opacity:0});
			tl.to([h3,time3], 0.5, {opacity:0});
			tl.staggerTo(round, 2, {rotation:360});
			tl.staggerTo(round, 0, {rotation:0});
			tl.play();
		}
		
		this.hide = function(onComplete)
		{	
			tl.to([h1,h2,h3], 0, {opacity:0});
			tl.to([time1,time2,time2], 0, {opacity:0});
			tl.to(wifi, 0, {opacity:0});
			tl.to(backBtn, 0.3, {right:"-20%", opacity:0});
			tl.to(product, 0.3, {left:"10%", opacity:0});
			tl.to(icon, 0.3, {bottom:"-100px", opacity:0});
			tl.to(scaleBg, 0.2, {opacity:0,onComplete:function(){
				onComplete();
			}});
			tl.play();
		}
	}
	return RemindPageController;
})($Pj);