$Pj.LonglifePageController = (function (exporter) {

    (function () {
        var src = "assets/images/frames/rl28.png";
        exporter.AssetsManager.appendImage(src, "rl28");
    })();

    var LonglifePageController = function (view) {
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
                var source0 = $Pj.AssetsManager.getImageByName("rl28");
                imageSources.push({img: source0, frames: 28});
            }

            function initClip() {
                var mc = self.view.find("#mc");
                canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
            }


            canvasClip.gotoAndStop(i >= 24 ? i = 24 : i++);


        }


        this.view = view;
        var backBtn = this.view.find("#back");
        var scaleBg = this.view.find(".scaleBg");
        var dayImg = this.view.find("#day #rili")
        var product = this.view.find("#product");
        var icon = this.view.find("#icon1 h3");
        var source = [];
        TweenLite.set(content, {visibility: "visible"})
        var tl = new TimelineLite();
        exporter.ButtonEffectNormar.add(backBtn);

        exporter.click(backBtn, function (e) {
            exporter.GeneralManager.switchToPage("page0", exporter.Page0Controller, function (fromPageController, toPageController, onComplete) {
                fromPageController.hide(function () {
                    toPageController.show(onComplete);
                });
            });
        })
        this.hide = function (onComplete) {
            clearInterval(playAnamate);
            tl.to(backBtn, 0.3, {right: "-20%", opacity: 0});
            tl.to(mc, 0.3, {opacity: 0});
            tl.to(product, 0.3, {left: "0%", opacity: 0});
            tl.to(icon, 0.3, {bottom: "-100px", opacity: 0});
            tl.to(scaleBg, 0.2, {
                opacity: 0, onComplete: function () {
                    onComplete();
                }
            });
            tl.play();
        }

        this.show = function (onComplete) {
            i = 0;
            tl.to(scaleBg, 0.2, {
                opacity: 1, onComplete: function () {
                    onComplete();
                }
            });
            tl.to(backBtn, 0.3, {right: "0%", opacity: 1});
            tl.to(dayImg, 0.3, {left: "50%", opacity: 1});
            tl.to(product, 0.3, {
                left: "5%", opacity: 1, opacity: 1, onComplete: function () {
                    playAnamate = setInterval(animateData, 150);
                }
            });
            tl.to(icon, 0.3, {bottom: "30px", opacity: 1});
            tl.to(mc, 0.3, {opacity: 1});
            tl.play();
        }
    }
    return LonglifePageController;
})($Pj);