(function(){
	window.onload = loadedHandler;
	document.getElementById("back_music").play();
	function loadedHandler(e)
	{
		$Pj.AssetsManager.start(function(){
			$Pj.GeneralManager.switchToPage("page0",$Pj.Page0Controller,function(fromPageController,toPageController,onComplete){
				fromPageController.hide(function(){
					toPageController.show(onComplete);
				});
				//onComplete();
			});
		});
	}
})();


