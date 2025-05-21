const smallImgs = document.querySelectorAll(".small_gallery img");
const mainImg = document.querySelector("#main_Img");
const info = document.querySelector(".right_info");

function setMainImg(src, text) {
    const newImg = mainImg.src
    mainImg.src = src;
    info.innerHTML = text;
    return newImg;

}

for (let i = 0; i < smallImgs.length; i++) {
    smallImgs[i].addEventListener("click", function () {

        smallImgs[i].src = setMainImg(smallImgs[i].src, smallImgs[i].getAttribute('data-text'));
    })

}
mainImg.ondblclick = function () {
    window.location.reload();
}
