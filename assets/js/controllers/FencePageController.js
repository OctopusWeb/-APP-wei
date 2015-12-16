$Pj.FencePageController = (function(exporter){
	var FencePageController = function(view)	
	{
		this.view = view;		
		var backBtn = this.view.find("#back");
		var scaleBg=this.view.find(".scaleBg");
		var product=this.view.find("#phone");
		var fence=this.view.find("#fence");
		var icon = this.view.find("#icon1 h3");
		var iconDanger=this.view.find("#iconDanger");
		var danger=this.view.find("#danger");
		exporter.ButtonEffectNormar.add(icon);
		exporter.ButtonEffectNormar.add(backBtn);
		
		TweenLite.set(content, {visibility:"visible"})
		var tl = new TimelineLite();
			
		exporter.click(backBtn,function(e){
			tl.clear();
			exporter.GeneralManager.switchToPage("page0",exporter.Page0Controller,function(fromPageController,toPageController,onComplete){
				fromPageController.hide(function(){
					toPageController.show(onComplete);
				});
			});
		})
		this.hide = function(onComplete)
		{
			tl.to(danger,0,{opacity:0});
			tl.to(backBtn, 0.3, {right:"-20%", opacity:0});
			tl.to(fence, 0.3, {left:"10%", opacity:0});
			tl.to(product, 0.3, {left:"10%", opacity:0});
			tl.to(icon, 0.3, {bottom:"-100px", opacity:0});
			tl.to(scaleBg, 0.2, {opacity:0,onComplete:function(){
				onComplete();
			}});
			tl.to(iconDanger, 0, {x:"0px",y:"0px"});
			tl.play();
		}
		
		this.show = function(onComplete)
		{
			var newDate=new Date();
			var str="老爸于"+newDate.getFullYear()+"-"+(newDate.getMonth()+1)+"-"+newDate.getDate()+" "+newDate.getHours()+" : "+newDate.getMinutes()+"超出了活动范围";
			danger.text(str);
			tl.to(scaleBg, 0.2, {opacity:1,onComplete:function(){
				onComplete();
			}});
			tl.to(backBtn, 0.3, {right:"0%", opacity:1});
			tl.to(product, 0.3, {left:"50%", opacity:1});
			tl.to(fence, 0.3, {left:"50%", opacity:1});
			tl.to(icon, 0.3, {bottom:"30px", opacity:1});
			tl.to(iconDanger, 3, {x:"40px",y:"-60px"});
			tl.to(danger,0,{opacity:0.5,onComplete:function(){
				danger1();
				}
			})
			
			tl.play();
			function danger1(){
					clearTimeout(timeDanger);
					danger.show();
					danger.animate({"left":"-325px"},6000);
					var timeDanger=setTimeout(function(){
						danger2();
					},6000)			
			}
			function danger2(){
				clearTimeout(timeDanger);
				danger.animate({"left":"65px"},0);
					var timeDanger=setTimeout(function(){
						danger1();
					},0)	
			}
		}
	}
	return FencePageController;
})($Pj);