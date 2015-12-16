$Pj.GeneralManager = (function(exporter){
	var GeneralManager = {};
	GeneralManager.pageControllers = {
		loadingPage:new exporter.LoadingPageController($("#loadingPage"))
	};
	GeneralManager.currentPageController = GeneralManager.pageControllers.loadingPage;
	
	GeneralManager.switchToPage = function(pageId,PageController,trasition)
	{
		var app = $(".app");
		var mainPageView = GeneralManager.currentPageController.view;
		
		var pageController,pageView;
		pageController = GeneralManager.pageControllers[pageId];
		if(pageController == undefined)
		{
			pageView = $("#"+pageId);
			pageView.removeClass("hidden");
			$("<script src='assets/js/utils/ScaleBg.js'></script>").appendTo(pageView);
			pageController = new PageController(pageView);
			GeneralManager.pageControllers[pageId] = pageController;
		}
		else
		{
			pageView = pageController.view;
		}
		pageView.insertBefore(mainPageView);
		
		function completeHandler()
		{
			mainPageView.detach();
			GeneralManager.currentPageController = pageController;
			$Pj.mouseChildren(app,true);
		}
		
		$Pj.mouseChildren(app,false);
		if(trasition!=undefined)
		{
			trasition(GeneralManager.currentPageController,pageController,completeHandler);
		}
		else
		{
			completeHandler();
		}
	}
	
	return GeneralManager;
})($Pj);

