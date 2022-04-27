
window.onscroll = () => {
    if(document.documentElement.scrollTop > 20){
        // document.getElementById("slide").style.top = "0";
        document.getElementById("slide").style.top = "-50px";
    }else{
        // document.getElementById("slide").style.top = "-50px";
        document.getElementById("slide").style.top = "0";
    }
}