
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dotube</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<div class="header">
    <h1 onclick="showHomePage()">Dotube</h1>
    <input type="text" placeholder="Suche..." id="search-bar">
</div>
<div class="main-content" id="home-page">
    <h2>Empfohlene Videos</h2>
    <div class="video-list">
        <div class="video-item" onclick="playVideo('sample-video.mp4')">
            <img src="thumbnail1.jpg" alt="Video Thumbnail">
            <p>Sample Video 1</p>
        </div>
        <div class="video-item" onclick="playVideo('sample-video2.mp4')">
            <img src="thumbnail2.jpg" alt="Video Thumbnail">
            <p>Sample Video 2</p>
        </div>
        <!-- Weitere Videoelemente hier -->
    </div>
</div>
<div class="main-content" id="video-page" style="display: none;">
    <div class="video-player">
        <video id="main-video" controls>
            <source src="sample-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    </div>
    <div class="video-list">
        <div class="video-item" onclick="playVideo('sample-video.mp4')">
            <img src="thumbnail1.jpg" alt="Video Thumbnail">
            <p>Sample Video 1</p>
        </div>
        <div class="video-item" onclick="playVideo('sample-video2.mp4')">
            <img src="thumbnail2.jpg" alt="Video Thumbnail">
            <p>Sample Video 2</p>
        </div>
        <!-- Weitere Videoelemente hier -->
    </div>
</div>
<script src="script.js"></script>
</body>
</html>
