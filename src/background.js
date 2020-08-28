

function MyGenericClick(info, tab){
    console.log("Cliced on page");
    console.log(info, tab);

}

function MyImageClick(info, tab){
    console.log("Cliked image", info, tab)
}

chrome.contextMenus.create({
    "title" : "Share",
    "contexts" : ["page"],
    "onclick" : MyGenericClick
})
chrome.contextMenus.create({
    "title" : "Share image",
    "contexts" : ["image"],
    "onclick" : MyImageClick
})