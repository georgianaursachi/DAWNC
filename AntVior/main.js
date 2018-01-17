window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});

(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        var ovrl = id("loading"),
            video = document.getElementsByTagName("video"),
            c = 0;
        var tot = video.length;
        if (tot === 0) return doneLoading();

        function vidLoaded() {
            c += 1;
            if (c === tot) return doneLoading();
        }

        function doneLoading() {
            setTimeout(function () {
                document.getElementById('main-title').classList.add('scene_element--fadeinup');
                document.getElementById('start').classList.add('scene_element--fadeinup-lazy');
                ovrl.style.display = "none";
            }, 4000);
        }
        
        window.onload = vidLoaded;
    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());
