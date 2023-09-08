window.addEventListener("load", startAni);
const container = document.querySelector("#container");
const sprite = document.querySelector("#sprite");

function startAni() {
  sprite.classList.add("ani");
}

sprite.addEventListener("animationend", changeColor);
container.addEventListener("click", changeColor);
document.addEventListener("pointerenter", endAni);

function changeColor() {
  console.log("change color");
    document.body.style.backgroundColor = "darkblue";
    sprite.classList.remove("ani");
}

function endAni() {
  console.log("animation end");
  sprite.style.animationDuration = "1s";
  sprite.classList.remove("ani");
}