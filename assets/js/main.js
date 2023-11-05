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


// Huynh Anh

$(document).click(function (e)
{
    // Đối tượng container chứa popup
    var container = $(".modal");
 
    // Nếu click bên ngoài đối tượng container thì ẩn nó đi
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});