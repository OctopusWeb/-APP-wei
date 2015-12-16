$Pj.CommuniPageController = (function (exporter) {

    (function () {

        var src = "assets/images/frames/sp8.png";
        exporter.AssetsManager.appendImage(src, "sp8");
        src = "assets/images/frames/lp8.png";
        exporter.AssetsManager.appendImage(src, "lp8");

    })();


    var CommuniPageController = function (view) {
        var self = this;
        this.view = view;
        var mc1 = this.view.find("#mc1");
        var mc2 = this.view.find("#mc2");
        var playAnamate1 = null;
        var playAnamate2 = null;
        var i = 0;
        var myaudio0 = this.view.find("#myaudio0")        
        var myaudio1 = this.view.find("#myaudio1")
        var myaudio2 = this.view.find("#myaudio2")


        function animateData1() {
            var imageSources = [];
            var canvasClip;
            initSources();
            initClip();

            function initSources() {
                var source0 = $Pj.AssetsManager.getImageByName("sp8");
                imageSources.push({img: source0, frames: 8});
            }

            function initClip() {
                var mc = self.view.find("#mc1");
                canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
            }

            canvasClip.gotoAndStop(i >= 8 ? i = 0 : i++);
        }

        function animateData2() {

            var imageSources = [];
            var canvasClip;
            initSources();
            initClip();


            function initSources() {
                var source0 = $Pj.AssetsManager.getImageByName("lp8");
                imageSources.push({img: source0, frames: 8});
            }

            function initClip() {
                var mc = self.view.find("#mc2");
                canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
            }

            canvasClip.gotoAndStop(i >= 8 ? i = 0 : i++);
        }

        var backBtn = this.view.find("#back");
        var scaleBg = this.view.find(".scaleBg");
        var product = this.view.find("#product");
        var mc2 = this.view.find("#mc2");
        var icon = this.view.find("#icon1 h3");
        var productShow = this.view.find("#productShow")
        var iconBtn = this.view.find("#iconBtn");
        var line = this.view.find("#line");
        var wifi = this.view.find("#wifi");
        var hshow = this.view.find("#hshow");
        var h1 = this.view.find("h1");
        var h2 = this.view.find("h2");
        var eating=this.view.find("#message");
        var message = this.view.find("#message #messages");
        var light = this.view.find("#light");
        var message_autio=this.view.find("#message_autio");
        exporter.ButtonEffectNormar.add(icon);
        exporter.ButtonEffectNormar.add(backBtn);

        exporter.click(backBtn, function (e) {
            exporter.GeneralManager.switchToPage("page0", exporter.Page0Controller, function (fromPageController, toPageController, onComplete) {
                fromPageController.hide(function () {
                    toPageController.show(onComplete);
                });
            });
        });

        TweenLite.set(content, {visibility: "visible"})
        var tl = new TimelineLite();

        exporter.click(mc1, function () {
            myaudio1.get(0).play();
            setTimeout(function () {
            	playAnamate2 = setInterval(animateData2, 70);
                mc1.hide();
                mc2.show();
                tl.to(wifi, 0.3, {opacity: 1});
                tl.to(hshow, 0.3, {opacity: 1});
                tl.to(hshow, 0.5, {opacity: 1});
                tl.to(wifi, 0.2, {opacity: 0});
                tl.to(hshow, 0.2, {opacity: 0});
                h1.html("发送语音消息");
                h2.html("(长按)");
                iconBtn.show();
            }, 3000)

        });

        mc2.bind("touchstart", function (e) {
            e.preventDefault();
        });
		mc2.bind("longtap", function (e) {
            mc2.hide();
            myaudio0.get(0).play();
            message_autio.show();
            tl.to(product, 0.2, {opacity: 0});
            tl.to(productShow, 0.5, {opacity: 1});
            tl.to(line, 0.5, {opacity: 0.8});
            tl.to(message, 0.5, {left: 0});
            tl.to(message, 0.5, {left: 0,onComplete: function () {
		            	light.show();
		            	setTimeout(function(){
		            		myaudio2.get(0).play();
		            	},1500) ;
                }});
            
        });
		
		exporter.click(message_autio,function()
		{
			myaudio2.get(0).play();
			light.show();
			message_autio.hide();
		})
        
        function reduction() {
            TweenLite.to(product, 0.5, {opacity: 1});
            TweenLite.to(line, 0.3, {opacity: 0});
            TweenLite.to(message, 0.5, {left: "100px"});
            TweenLite.to(productShow, 0.3, {opacity: 0});
            iconBtn.hide();
        }

        this.show = function (onComplete) {
        	var timeDanger;
        	clearInterval(playAnamate1);
            clearInterval(playAnamate2);
        	mc1.hide();
        	mc2.hide();
            playAnamate1 = setInterval(animateData1, 70);
            mc1.show();
            tl.to(scaleBg, 0.2, {
                opacity: 1, onComplete: function () {
                    onComplete();
                }
            });
            tl.to(backBtn, 0.3, {right: "0%", opacity: 1});
            tl.to(product, 0.3, {left: "5%", opacity: 1});
            tl.to(icon, 0.3, {bottom: "30px", opacity: 1});
            tl.play();
            myaudio0.get(0).play();
        }
        this.hide = function (onComplete) {
            light.hide();
            message_autio.hide();
            clearInterval(playAnamate1);
            clearInterval(playAnamate2);
            h1.html("收听播音播报");
            h2.html("(短按)");
            mc1.hide();
            TweenLite.to(product, 0.2, {opacity: 1});
            TweenLite.to(line, 0.2, {opacity: 0});
            TweenLite.to(message, 0.5, {left: "100px"});
            TweenLite.to(productShow, 0.2, {opacity: 0});
            iconBtn.hide();
            tl.to(wifi, 0.3, {opacity: 0});
            tl.to(backBtn, 0.3, {right: "-20%", opacity: 0});
            tl.to(product, 0.3, {left: "0%", opacity: 0});
            tl.to(icon, 0.3, {bottom: "-100px", opacity: 0});
            tl.to(scaleBg, 0.2, {
                opacity: 0, onComplete: function () {
                    onComplete();
                }
            });
            tl.play();

        }

    }
    return CommuniPageController;
})($Pj);