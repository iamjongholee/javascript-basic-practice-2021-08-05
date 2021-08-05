const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const body = document.querySelector("body");
const button = document.querySelector("button");

function changeColors() {
  //랜덤한 색을 불러오는 것을 각각 두개 만들어 linear-gradient 기능을 사용한다
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  // 'linear-gradient(방향, ${변수}, ${변수})`
  document.body.style.background = `linear-gradient(45deg, ${randomColor1} , ${randomColor2})`;
}

//클릭을 받으면 색을 바꾼다
button.addEventListener("click", changeColors);
