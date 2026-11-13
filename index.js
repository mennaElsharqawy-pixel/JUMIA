$(document).ready(function () {
    console.log("Jumia App Loaded with jQuery & Bootstrap!");

    // التحكم في السلايدر عبر jQuery
    const $carousel = $('#mainJumiaCarousel');

    // تشغيل السلايدر تلقائياً مع التبديل كل 3 ثوانٍ
    $carousel.carousel({
        interval: 3000,
        ride: 'carousel'
    });

    // إيقاف الحركة التلقائية عند إشارة الماوس فوق السلايدر وإعادتها عند الابتعاد
    $carousel.on('mouseenter', function () {
        $(this).carousel('pause');
    }).on('mouseleave', function () {
        $(this).carousel('cycle');
    });
});