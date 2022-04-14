function openNav(width){
    document.getElementById("side-nav").style.transition = `.3s`;
    document.getElementById("side-nav").style.width = `${width}`;
}

function closeNav(){
    document.getElementById("content").style.background = "rgba(0, 0, 0, 0)";
    document.getElementById("side-nav").style.width = `0px`;
}

function openNavNoAnimate(width){
    document.getElementById("side-nav").style.transition = `none`;
    document.getElementById("side-nav").style.width = `${width}`;
}

function openNavPush(width){
    document.getElementById("side-nav").style.position = `static`;
    document.getElementById("side-nav").style.width = `${width}`;
}

function openNavPushOpacity(width){
    document.getElementById("content").style.background = "rgba(0, 0, 0, 0.5)";
    document.getElementById("side-nav").style.position = `static`;
    document.getElementById("side-nav").style.width = `${width}`;
}