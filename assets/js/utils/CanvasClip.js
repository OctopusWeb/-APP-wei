$Pj.CanvasClip = (function () {
    var CanvasClip = function (canvas, sourceImages) {
        this.canvas = canvas;
        this.sourceImages = sourceImages.img;
        this.currentFrame = 0;
        this.totalFrame = sourceImages.frames;

        this.setSourceImages = function (images) {

            this.sourceImages = images.img;
            this.totalFrame = images.frames;
        }

        this.gotoAndStop = function (frame) {
            this.clear();
            var img = this.sourceImages;


            var context = this.canvas.getContext("2d");
            var sw = this.sourceImages.width / this.totalFrame;
            var sh = this.sourceImages.height;
            var sx = sw * frame;
            var sy = 0;
            var ts = this.canvas.width / sw < this.canvas.height / sh ? this.canvas.width / sw : this.canvas.height / sh;
            var tw = sw * ts;
            var th = sh * ts;
            var tx = (this.canvas.width - tw) * 0.5;
            var ty = (this.canvas.height - th) * 0.5;
            context.drawImage(img, sx, sy, sw, sh, tx, ty, tw, th);
            this.currentFrame = frame;
        }

        this.clear = function () {
            this.canvas.width = this.canvas.width;
        }


        this.gotoAndStop(this.currentFrame);
    }
    return CanvasClip;
})();
