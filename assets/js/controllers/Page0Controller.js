$Pj.Page0Controller = (function (exporter) {

    //添加预加载图片
    (function () {
        exporter.AssetsManager.appendImage("assets/images/frames/bai19.png", "bai");
        exporter.AssetsManager.appendImage("assets/images/frames/lan19.png", "lan");
        exporter.AssetsManager.appendImage("assets/images/frames/fen19.png", "fen");
    })();

    var Page0Controller = function (view) {
        var self = this;
        this.view = view;


        var winWid = $(window).width();
        if (winWid <= 350) {
            TweenLite.set($("#bts"), {scale: 0.8});
        } else {
            TweenLite.set($("#bts"), {scale: 1});
        }

        initButtons();
        init360View();

        initBeforeShow();

        this.hide = function (onComplete) {
        	document.getElementById("back_music").pause();
            TweenLite.to(bts, 1, {top: '100%', alpha: 1, ease: Expo.easeInOut});
            TweenLite.to(view360, 0.5, {
                alpha: 0, onComplete: function () {
                    onComplete();
                }
            });
        }

        function initBeforeShow() {
            var bts = self.view.find("#bts");
            TweenLite.to(bts, 0, {top: '100%', alpha: 0, ease: Expo.easeInOut});

            var view360 = self.view.find("#view360");
            TweenLite.to(view360, 0, {alpha: 0});
        }

        this.show = function (onComplete) {
        	document.getElementById("back_music").play();
            var bts = self.view.find("#bts");
            TweenLite.to(bts, 1, {top: '70%', alpha: 1, ease: Expo.easeInOut});

            var view360 = self.view.find("#view360");
            TweenLite.to(view360, 1, {alpha: 1, onComplete: onComplete});
        }

        function initButtons() {
            var bts = self.view.find("#bts .bt");
            for (var i = 0; i < bts.length; i++) {
                var bt = bts.eq(i);
                exporter.ButtonEffectNormar.add(bt);
                exporter.click(bt, new BtClick(i).handler);
            }

            function BtClick(idx) {
                this.handler = function (e) {
                    if (idx == 9) {
                        location.href = "http://55609420.m.weimob.com/vshop/55609420/Goods/GoodsDetailNew1?id=23767";
                    } else {
                        goPageIdx(idx);
                    }
                }
            }
        }

        function init360View() {
            var view360 = self.view.find("#view360");
            var imageSources = [];
            var canvasClip;
            initSources();
            initClip();
            initDots();

            function initSources() {
                var source0 = $Pj.AssetsManager.getImageByName("bai");
                //var source0 = [];
                var source1 = $Pj.AssetsManager.getImageByName("lan");
                var source2 = $Pj.AssetsManager.getImageByName("fen");

                imageSources.push({img: source0, frames: 19});
                imageSources.push({img: source1, frames: 19});
                imageSources.push({img: source2, frames: 19});
            }

            function initClip() {
                var mc = view360.find("#mc");
                canvasClip = new exporter.CanvasClip(mc.get(0), imageSources[0]);
                addControlForClip();
            }

            function initDots() {

                var dots = view360.find(".dot");
                var selectedDot = dots.eq(0);
                for (var i = 0; i < dots.length; i++) {
                    var dot = dots.eq(i);
                    dot.click(new DotClick(i).handler);
                }
                view360.find("#mc").on('swipeup', function (e, data) {
                    var ind = 0;
                    dots.each(function (index) {
                        if ($(this).hasClass("selected")) {
                            ind = (index <= 0) ? index = 2 : index - 1;
                        }
                    });
                    new DotClick(ind).handler();
                });

                view360.find("#mc").on('swipedown', function (e, data) {
                    var ind = 0;
                    dots.each(function (index) {
                        if ($(this).hasClass("selected")) {
                            ind = (index >= 2) ? index = 0 : index + 1;
                        }
                    });
                    new DotClick(ind).handler();
                });
                function DotClick(idx) {
                    this.handler = function (e) {
                        var dot = dots.eq(idx);
                        selectedDot.removeClass("selected");
                        selectedDot = dot;
                        selectedDot.addClass("selected");
                        switchColorToIdx(idx);
                    }
                }
            }

            //切换颜色
            function switchColorToIdx(idx) {
                canvasClip.setSourceImages(imageSources[idx]);
                canvasClip.gotoAndStop(canvasClip.currentFrame);
            }

            //添加控制
            function addControlForClip() {
                var tf = 0;
                var cf = 0;
                enterFrame();
                function enterFrame() {
                    cf += (tf - cf) * 0.02;
                    var frame = Math.floor(cf % 360 / 360 * canvasClip.totalFrame);
                    if (frame < 0)frame += canvasClip.totalFrame;
                    canvasClip.gotoAndStop(frame);

                    setTimeout(function () {
                        window.requestAnimationFrame(enterFrame);
                    }, 1000 / 60);

                }

                $(view360.find("#mc")).bind("touchstart", function (e) {
                    e.preventDefault();
                    $(document).bind("touchmove", moveHandler);
                    $(document).bind("touchend", endHandler);
                    var ax;

                    function moveHandler(e) {
                        var touch = e.originalEvent.touches[0];
                        var tx = touch.clientX;
                        if (ax == undefined) {
                            ax = tx;
                        }
                        else {
                            var dis = tx - ax;
                            ax = tx;
                            tf += dis * 5;
                        }
                    }

                    function endHandler(e) {
                        $(document).unbind("touchmove", moveHandler);
                        $(document).unbind("touchend", endHandler);
                    }
                });
            }
        }

        //跳到
        function goPageIdx(idx) {
            var pageMap = [
                {
                    id: "location",
                    controllerClass: exporter.LocationController
                },
                {
                    id: "helpPage",
                    controllerClass: exporter.HelpPageController
                },
                {
                    id: "communiPage",
                    controllerClass: exporter.CommuniPageController
                },
                {
                    id: "remindPage",
                    controllerClass: exporter.RemindPageController
                },
                {
                    id: "longlifePage",
                    controllerClass: exporter.LonglifePageController
                },
                {
                    id: "lightingPage",
                    controllerClass: exporter.LightingPageController
                },
                {
                    id: "fencePage",
                    controllerClass: exporter.FencePageController
                },
                {
                    id: "findPage",
                    controllerClass: exporter.FindPageController
                },
                {
                    id: "introducePage",
                    controllerClass: exporter.IntroducePageController
                }];
            var pageId = pageMap[idx].id;
            var pageController = pageMap[idx].controllerClass;
            exporter.GeneralManager.switchToPage(pageId, pageController, function (fromPageController, toPageController, onComplete) {
                fromPageController.hide(function () {
                    toPageController.show(onComplete);
                });

            });
        }
    }
    return Page0Controller;
})($Pj);