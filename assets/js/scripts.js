var videoOverlays = document.getElementsByClassName('video-overlay');

for (element of videoOverlays)
    element.addEventListener("click", function (event) {
        videoContainer = event.target.closest('.video-container')
        video = videoContainer.getElementsByTagName("video")[0]
        video.controls = "true";
        video.play();
        videoContainer.getElementsByClassName('video-overlay')[0].style.display = "none";
    });


window.addEventListener("scroll", function () {
    if (window.scrollY <= 10) {
        document.getElementById("navbar-logo").classList.remove('collapsed');
        document.getElementById("header").classList.remove('shadow-sm');
    } else {
        document.getElementById("navbar-logo").classList.add('collapsed');
        document.getElementById("header").classList.add('shadow-sm');
    }
});