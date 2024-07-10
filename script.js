function playVideo(videoSrc) {
    var homePage = document.getElementById('home-page');
    var videoPage = document.getElementById('video-page');
    var video = document.getElementById('main-video');

    homePage.style.display = 'none';
    videoPage.style.display = 'flex';

    video.src = videoSrc;
    video.play();
}

function showHomePage() {
    var homePage = document.getElementById('home-page');
    var videoPage = document.getElementById('video-page');
    var video = document.getElementById('main-video');

    homePage.style.display = 'flex';
    videoPage.style.display = 'none';

    video.pause();
    video.src = '';
}
