var $Pj = {};

$Pj.mouseChildren = function (_view, value, changeAlpha) {
    if (value) {
        _view.get(0).style.pointerEvents = "";
    }
    else {
        _view.css("pointer-events", "none");
    }
    if (changeAlpha)_view.css("opacity", value ? 1 : 0.5);
}

$Pj.click = function (bt, handler) {
    bt.bind("tap", function (e) {
        handler(e);
    });

}
