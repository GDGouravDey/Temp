
var video = document.querySelector('video');

$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
    video.pause();
});

$('#carouselExampleIndicators').on('slid.bs.carousel', function () {
    if ($('.carousel-item.active video').length) {
        video.play();
    }
});





