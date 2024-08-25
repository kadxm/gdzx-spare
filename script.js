$(document).ready(function() {
    // 添加动画效果
    $('.navbar ul li a').hover(function() {
        $(this).animate({ fontSize: '20px' }, 300);
    }, function() {
        $(this).animate({ fontSize: '16px' }, 300);
    });
});
