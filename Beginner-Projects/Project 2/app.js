const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF", "#33FFF5", "#F5FF33",
  "#FF8C33", "#8CFF33", "#33FF8C", "#FF3333", "#33FF33", "#3333FF", "#FF33FF",
  "#33FFFF", "#FFFF33", "#BADA55", "#C0FFEE", "#F08080", "#20B2AA", "#87CEEB",
  "#6A5ACD", "#FFD700", "#ADFF2F", "#FF69B4", "#FFA07A", "#00FA9A", "#40E0D0",
  "#FFB6C1", "#6495ED", "#7B68EE", "#DC143C", "#8FBC8F", "#00CED1", "#FF4500",
  "#2E8B57", "#DA70D6", "#F0E68C", "#E6E6FA", "#708090", "#D2691E", "#9ACD32",
  "#FFDEAD", "#BA55D3", "#FF6347", "#5F9EA0", "#00FFFF", "#FF1493", "#A52A2A",
  "#F5DEB3"
];

let bgc = document.body;
let headText = document.querySelector("h1");
let btn = document.querySelector("button");

setInterval(()=>{
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
  bgc.style.backgroundColor = randomColor;
  headText.textContent = `Color: ${randomColor}`;
},1000)