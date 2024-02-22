const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

/**
 * Hàm tải template
 *
 * Cách dùng:
 * <div id="parent"></div>
 * <script>
 *  load("#parent", "./path-to-template.html");
 * </script>
 */
function load(selector, path) {
    const cached = localStorage.getItem(path);
    if (cached) {
        $(selector).innerHTML = cached;
    }

    fetch(path)
        .then((res) => res.text())
        .then((html) => {
            if (html !== cached) {
                $(selector).innerHTML = html;
                localStorage.setItem(path, html);
            }
        })
        .finally(() => {
            window.dispatchEvent(new Event("template-loaded"));
        });
}
// Xuất hiện nút cuộn
window.addEventListener("scroll",()=>{
    const scrollTop = document.querySelector(".scrollTop");
    if (window.scrollY > 360){
        scrollTop.classList.add("show-scroll");
    }else {
        scrollTop.classList.remove("show-scroll");
    }
});

// Thêm video intro
document.addEventListener('DOMContentLoaded', function() {
    // Tạo một phần tử video
    var video = document.createElement('video');
    video.setAttribute('width', '100%');
    
    // Thêm source cho video
    var source = document.createElement('source');
    source.setAttribute('src', '/frontend/assets/video/intro.mp4');
    source.setAttribute('type', 'video/mp4');
    video.appendChild(source);
    
    // Thêm thuộc tính autoplay
    video.setAttribute('autoplay', true);

    // Thêm sự kiện 'ended' để xóa phần tử video sau khi video đã phát xong
    video.addEventListener('ended', function() {
        // Xóa phần tử video
        video.parentNode.removeChild(video);
    });
    video.addEventListener('click', function() {
        // Xóa phần tử video
        video.remove();
    });
    
    // Thêm video vào trong phần tử có ID là "introVideo"
    var app = document.getElementById('introVideo');
    app.appendChild(video);


});