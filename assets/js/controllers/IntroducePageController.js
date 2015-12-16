$Pj.IntroducePageController = (function(exporter){
	var IntroducePageController = function(view)	
	{
		this.view = view;		
		var backBtn = this.view.find("#back");
		var product = this.view.find("#product");
		var icon = this.view.find("#icon1 img");
		var introduce=this.view.find(".introduce0");
		var scaleBg=this.view.find(".scaleBg");
		var productImg=this.view.find("#productImg")
		var introduce1=this.view.find("#introduce1");
		var introduce8=this.view.find("#introduce8");
		var introduce4=this.view.find("#introduce4");
		var introduce5=this.view.find("#introduce5");
		var introduce7=this.view.find("#introduce7");
		var introduce6=this.view.find("#introduce6");
		var introduce1_show=this.view.find("#introduce1_show");
		var introduce2_show=this.view.find("#introduce2_show");
		var introduce6_show=this.view.find("#introduce6_show");
		var shandong1=this.view.find("#shandong1");
		var shandong2=this.view.find("#shandong2");
		var shandong3=this.view.find("#shandong3");
		var introduce_show=this.view.find(".introduce_show");
		var shandong=this.view.find(".shandong");
		exporter.ButtonEffectNormar.add(icon);
		exporter.ButtonEffectNormar.add(backBtn);
		
		exporter.click(backBtn,function(e){
			exporter.GeneralManager.switchToPage("page0",exporter.Page0Controller,function(fromPageController,toPageController,onComplete){
				fromPageController.hide(function(){
					toPageController.show(onComplete);
				});
			});
		});
		
		exporter.click(introduce1,function(e){
			introduce1_show.show();
			introduce2_show.hide();
			introduce6_show.hide();
			shandong.hide();
		});
		exporter.click(introduce8,function(e){
			introduce1_show.hide();
			introduce2_show.show();
			introduce6_show.hide();
			shandong.hide();
		});
		exporter.click(introduce6,function(e){
			introduce1_show.hide();
			introduce2_show.hide();
			introduce6_show.show();
			shandong.hide();
		});
		exporter.click(introduce4,function(e){
			introduce_show.hide();
			shandong1.show();
			shandong2.hide();
			shandong3.hide();
		});
		exporter.click(introduce5,function(e){
			introduce_show.hide();
			shandong1.hide();
			shandong2.show();
			shandong3.hide();
		});
		exporter.click(introduce7,function(e){
			introduce_show.hide();
			shandong1.hide();
			shandong2.hide();
			shandong3.show();
		});
		exporter.click(productImg,function(e){
			introduce_show.hide();
			shandong.hide();
		});
		
		
		TweenLite.set(content, {visibility:"visible"})
		var tl = new TimelineLite();
		
		this.show = function(onComplete)
		{	
			tl.to(scaleBg, 0.2, {opacity:1,onComplete:function(){
				onComplete();
			}});
			tl.to(product,0,{scale:0.65});
			tl.to(product,0.3,{opacity:1});
			tl.to(backBtn, 0.3, {right:"0%", opacity:1});
			tl.staggerTo(introduce, 0.3, {opacity:1}, 0.1);
			tl.play();
		}
		
		this.hide = function(onComplete)
		{
			introduce1_show.hide();
			introduce2_show.hide();
			introduce6_show.hide();
			tl.to(backBtn, 0.3, {right:"-20%", opacity:0});
			tl.staggerTo(introduce, 0.2, {opacity:0}, 0.1);
			tl.to(product,0.3,{opacity:0});
			tl.to(scaleBg, 0.2, {opacity:0,onComplete:function(){
				onComplete();
			}});
			tl.play();
		}
	}
	return IntroducePageController;
})($Pj);