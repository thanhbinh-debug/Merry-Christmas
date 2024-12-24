let container = document.getElementById("container");
if (container) {
  let count = 50;
  for (var i = 0; i < count; i++) {
    let leftSnow = Math.floor(Math.random() * container.clientWidth);
    let topSnow = Math.floor(Math.random() * -100); // Bắt đầu từ ngoài khung nhìn
    let widthSnow = Math.floor(Math.random() * 40 + 10); // Đảm bảo kích thước tối thiểu
    let timeSnow = Math.floor(Math.random() * 5 + 5); // Tối thiểu 5 giây
    let blurSnow = Math.floor(Math.random() * 20);

    let div = document.createElement("div");
    div.classList.add("snow");
    div.style.left = leftSnow + "px";
    div.style.top = topSnow + "px";
    div.style.width = widthSnow + "px";
    div.style.height = widthSnow + "px";
    div.style.animationDuration = timeSnow + "s";
    div.style.filter = "blur(" + blurSnow + "px)";
    container.appendChild(div);
  }
} else {
  console.error(
    "Container không tồn tại. Vui lòng kiểm tra id='container' trong HTML."
  );
}
