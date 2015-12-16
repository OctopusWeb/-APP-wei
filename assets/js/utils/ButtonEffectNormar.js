$Pj.ButtonEffectNormar = (function(){
	var ButtonEffectNormar = {};
	ButtonEffectNormar.add = function(bt)
	{
		bt.bind("touchstart",touchstartHandler);
		bt.bind("touchend",touchendHandler);
		
		function touchstartHandler(e)
		{
			bt.css("opacity",0.5);
		}
		
		function touchendHandler(e)
		{
			bt.css("opacity",1);
		}
	}
	return ButtonEffectNormar;
})();
