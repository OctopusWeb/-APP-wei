$Pj.LoadingPageController = (function(){
	var LoadingPageController = function(view)	
	{
		this.view = view;
		this.appProduct = this.view.find("#app_product")
		this.logo = this.view.find("#logo");
		this.t0 = this.view.find("#t0");
		this.t1 = this.view.find("#t1");
		this.loading = this.view.find("#loading");
		this.bg = this.view.find(".scaleBg");


		this.hide = function(onComplete)
		{
			TweenMax.staggerTo([this.appProduct,this.logo,this.t0,this.t1,this.loading], 1, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
			TweenLite.to(this.bg,0.5,{alpha:0,delay:1.5,onComplete:function(){
				onComplete();
			}});
		}
	}
	return LoadingPageController;
})();
