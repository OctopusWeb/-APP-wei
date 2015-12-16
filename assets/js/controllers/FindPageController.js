$Pj.FindPageController = (function (exporter) {

    (function () {
        var src = "assets/images/frames/lp8.png";
        exporter.AssetsManager.appendImage(src, "lp8");
    })();

    var FindPageController = function (view) {


        var self = this;
        this.view = view;
        var mc = this.view.find("#mc");
        var playAnamate = null;
        var i = 0;
        var newDate=new Date();
        var newDay=["日","一","二","三","四","五","六"]
        var newMinutes=newDate.getMinutes()>9?newDate.getMinutes():"0"+newDate.getMinutes();
        $("#dateTime h1").text(newDate.getHours()+":"+newMinutes);
        $("#dateTime h4").text((newDate.getMonth()+1)+"月"+newDate.getDate()+"日 星期"+newDay[newDate.getDay()]);


        function animateData() {
            var imageSources = [];
            var canvasClip;
            initSources();
            initClip();

            function initSources() {

                var source0 = $Pj.AssetsManager.getImageByName("lp8");
                imageSources.push({img: source0, frames: 8});


            }

            function initClip() {
                var mc = self.view.find("#mc");
                canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
            }

            canvasClip.gotoAndStop(i >= 8 ? i = 0 : i++);
        }


        this.view = view;
        var backBtn = this.view.find("#back");
        var product = this.view.find("#product");
        var dateTime = this.view.find("#dateTime");
        var longPress = this.view.find("#longPress");
        var icon = this.view.find("#icon1 h3");
        var iconBtn = this.view.find("#iconBtn");
        var scaleBg = this.view.find(".scaleBg");
		var myaudio0 = this.view.find("#myaudio0")  
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
        var time = null;
        var touchNum=0;
        exporter.click(mc, function (e) {
        		touchNum++;
        		if(touchNum>=5){
        			TweenLite.to(product, 0.5, {opacity: 0});
		            TweenLite.to(productShow, 0.5, {opacity: 1});
		            myaudio0.get(0).play();
		            touchNum=0;
        		}
        })
        this.show = function (onComplete) {
            playAnamate = setInterval(animateData, 70);
            tl.to(scaleBg, 0.2, {
                opacity: 1, onComplete: function () {
                    onComplete();
                }
            });
            tl.to(backBtn, 0.4, {right: "0%", opacity: 1});
            tl.to(product, 0.5, {left: "5%", opacity: 1});
            tl.to(dateTime, 0.3, {opacity: 1});
            tl.to(icon, 0.5, {
                bottom: "30px", opacity: 1, onComplete: function () {
                }
            });
            tl.play();
        }

        this.hide = function (onComplete) {
        	touchNum=0;
            clearInterval(playAnamate)
            TweenLite.to(product, 0.5, {opacity: 1});
            TweenLite.to(productShow, 0.5, {opacity: 0});
            iconBtn.hide();
            tl.to(backBtn, 0.2, {right: "-20%", opacity: 0});
            tl.to(dateTime, 0.3, {opacity: 0});
            tl.to(product, 0.2, {left: "10%", opacity: 0});
            tl.to(icon, 0.2, {bottom: "-100px", opacity: 0});
            tl.to(scaleBg, 0.2, {
                opacity: 0, onComplete: function () {
                    onComplete();
                }
            });
            tl.play();
        }
    }
    return FindPageController;
})($Pj);