window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

setTimeout(function () {
    document.getElementById('bgvid').style.webkitTransform = 'translateY(-5%)';
    document.getElementById('video-container').style.height = '70vh';
    document.body.style.overflowY = 'scroll';
    document.getElementById('hide').style.display = 'block';
    document.getElementById('hide').style.height = '30vh';
}, 2000);

function myHoverOne(){
    document.getElementById('oneTitle').style.color = '#BDBDBD';
    document.getElementById('oneText').style.color = '#BDBDBD';
}

function myHoverTwo(){
    document.getElementById('twoTitle').style.color = '#BDBDBD';
    document.getElementById('twoText').style.color = '#BDBDBD';
}

function normalOne(){
    document.getElementById('oneTitle').style.color = '#444';
    document.getElementById('oneText').style.color = '#444';
}

function normalTwo(){
    document.getElementById('twoTitle').style.color = '#444';
    document.getElementById('twoText').style.color = '#444';
}