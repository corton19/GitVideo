// Debug -- skriver i Chromes konsol, når programmet kører.
console.log("Chrome Extension Ready");


var video = document.getElementsByClassName("html5-video-container")[0];

if (video == null) {
    console.log("Nothing found");
}
else {
    console.log(video);
    var source = document.getElementsByClassName("video-stream html5-main-video")[0];
    console.log(source.src);

    console.log("Creating...");
    source.src = window.URL.createObjectURL(vid)
}


console.log("Chrome Extension Finished");