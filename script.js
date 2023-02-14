window.onload = () => {
  const balls = document.getElementsByClassName('ball');
  const generateRandomColor = () => {
    const rRandom = Math.floor(Math.random() * (255 - 0) + 0);
    const gRandom = Math.floor(Math.random() * (255 - 0) + 0);
    const bRandom = Math.floor(Math.random() * (255 - 0) + 0);
    return `rgb(${rRandom}, ${gRandom}, ${bRandom})`;
  };
  for (let i = 0; i < balls.length; i += 1) {
    balls[i].style.backgroundColor = generateRandomColor();
  }
};
