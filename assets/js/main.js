$(document).ready(function () {
    var navbar = $("#navbar");

    // Lắng nghe sự kiện cuộn trang
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // Thay đổi 100 thành vị trí bạn muốn hiển thị navbar
            navbar.show(); // Hiển thị navbar
            navbar.css("opacity", 1); // Hiển thị navbar với opacity 1
        } else {
            navbar.css("opacity", 0); // Ẩn navbar bằng cách đặt opacity thành 0
        }
    });
});
