window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        var ovrl = id("loading"),
            prog = id("progress"),
            img = document.images,
            bg = id("background"),
            c = 0;
        tot = img.length;
        if (tot == 0) return doneLoading();

        function imgLoaded() {
            c += 1;
            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            setTimeout(function () {
                document.getElementById('drawer-toggle-label').classList.add('scene_element--fadeinup');
                document.getElementById('main-title').classList.add('scene_element--fadeinup');
                document.getElementById('start').classList.add('scene_element--fadeinup-lazy');
                ovrl.style.display = "none";
            }, 4000);
        }
        for (var i = 0; i < tot; i++) {
            var tImg = new Image();
            tImg.onload = imgLoaded;
            tImg.onerror = imgLoaded;
            tImg.src = img[i].src;
        }
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());
