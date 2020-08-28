
window.onload = function() {

    
    var videoUrls = window.ytplayer.config.args.loaderUrl
    console.log("Ex loaded", videoUrls)
}
console.log("Ex loaded");
alert("loaded");

var links = document.getElementsByTagName("a");


for(let i = 0; i < links.length; i++){
    let title = links[i].innerHTML;
    console.log("link is", title)
}