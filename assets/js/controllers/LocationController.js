$Pj.LocationController = (function (exporter) {

    (function () {
        var src = "assets/images/frames/lp8.png";
        exporter.AssetsManager.appendImage(src, "lp8");
    })();

    var LocationController = function (view) {


        var self = this;
        this.view = view;
        var mc = this.view.find("#mc");
        var playAnamate = null;
        var i = 0;


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
        var productImg = this.view.find("#productImg");
        var longPress = this.view.find("#longPress");
        var icon = this.view.find("#icon1 h3");
        var productShow = this.view.find("#productShow")
        var iconBtn = this.view.find("#iconBtn");
        var locationShow1 = this.view.find(".locationShow1");
        var locationShow2 = this.view.find(".locationShow2");
        var btn1 = this.view.find("#btn_1");
        var btn2 = this.view.find("#btn_2");
        var btn1Img = this.view.find("#btn_1 img");
        var btn2Img = this.view.find("#btn_2 img");
        var scaleBg = this.view.find(".scaleBg");
        exporter.ButtonEffectNormar.add(icon);
        exporter.ButtonEffectNormar.add(backBtn);
        var boot = this.view.find("#boot");
        var myAuto1 = this.view.find('#myaudio1');
        var myAuto2 = this.view.find('#myaudio2');


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

        mc.bind("touchstart", function (e) {
            e.preventDefault();
        });

        mc.bind("longtap", function (e) {
            myAuto1.get(0).play();
            setTimeout(function () {
                btn1Img.show();
                TweenLite.to(product, 0.5, {opacity: 0});
                TweenLite.to(productShow, 0.5, {opacity: 1});
                iconBtn.show();
            }, 3500)
        })


        exporter.click(iconBtn, function () {
            TweenLite.to(product, 0.5, {opacity: 1});
            TweenLite.to(productShow, 0.5, {opacity: 0});
            iconBtn.hide();
        })

        exporter.click(btn2, function () {
            btn1Img.hide();
            btn2Img.show();
            locationShow1.show();
            locationShow2.hide();
        })
        exporter.click(btn1, function () {
            btn2Img.hide();
            btn1Img.show();
            locationShow2.show();
            locationShow1.hide();
        })
        this.show = function (onComplete) {
            btn2Img.hide();
            btn1Img.hide();
            playAnamate = setInterval(animateData, 70);
            locationShow1.show();
            locationShow2.hide();
            tl.to(scaleBg, 0.2, {
                opacity: 1, onComplete: function () {
                    onComplete();
                }
            });
            tl.to(backBtn, 0.4, {right: "0%", opacity: 1});
            tl.to(product, 0.5, {left: "5%", opacity: 1});
            tl.to(icon, 0.5, {
                bottom: "30px", opacity: 1, onComplete: function () {
                }
            });
            tl.play();
        }

        this.hide = function (onComplete) {
            btn2Img.hide();
            btn1Img.hide();
            clearInterval(playAnamate)
            TweenLite.to(product, 0.5, {opacity: 1});
            TweenLite.to(productShow, 0.5, {opacity: 0});
            iconBtn.hide();
            tl.to(backBtn, 0.2, {right: "-20%", opacity: 0});
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
    return LocationController;
})($Pj);