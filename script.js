const circles = document.getElementById('circles');
const balls = document.getElementsByClassName('ball');
const rgbP = document.querySelector('p');
const pAnswer = document.getElementById('answer');
const pScore = document.getElementById('score');
const resetBtn = document.getElementById('reset-game');

const generateRandomColor = () => {
  const rRandom = Math.floor(Math.random() * 255);
  const gRandom = Math.floor(Math.random() * 255);
  const bRandom = Math.floor(Math.random() * 255);
  return `rgb(${rRandom}, ${gRandom}, ${bRandom})`;
};

const getBgColorToP = (ballArray) => {
  const randomBall = Math.floor(Math.random() * ballArray.length);
  const rgbFromRandomBall = ballArray[randomBall].style.backgroundColor;
  let excludesRgb = '';
  for (let i = 3; i < rgbFromRandomBall.length; i += 1) {
    excludesRgb += rgbFromRandomBall[i];
  }
  return excludesRgb;
};

let score = Number(localStorage.getItem('placar')) || 0;

window.onload = () => {
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColor();
  }
  rgbP.innerText = getBgColorToP(balls);
  pScore.innerText = `Placar: ${score}`;
};

circles.addEventListener('click', async (event) => {
  if (event.target.style.backgroundColor.includes(rgbP.innerText)) {
    pAnswer.innerText = 'Acertou!';
    score += 3;
    pScore.innerText = `Placar: ${score}`;
    localStorage.setItem('placar', score);
    await setInterval(() => window.location.reload(), 300);

  } else {
    pAnswer.innerText = 'Errou! Tente novamente!';
  }
});

resetBtn.addEventListener('click', () => {
  window.location.reload();
  localStorage.clear();
});
