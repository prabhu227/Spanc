
const canvas = document.getElementById("particles-bg");
const ctx = canvas.getContext("2d");
let particles = [];

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", resize);
resize();

function getRandomShape() {
  const shapes = ['circle', 'triangle', 'hollowTriangle', 'rectangle', 'hollowRectangle'];
  return shapes[Math.floor(Math.random() * shapes.length)];
}

function createParticles() {
  particles = [];
  for (let i = 0; i < 15; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      size: Math.random() * 100 + 80,
      shape: getRandomShape()
    });
  }
}

function drawShape(p) {
  const { x, y, size, shape } = p;
  const half = size / 2;

  const gradient = ctx.createLinearGradient(x - half, y, x + half, y);
  gradient.addColorStop(0, "rgba(31, 15, 7, 0.25)");
  gradient.addColorStop(0.5, "rgba(110, 55, 30, 0.25)");
  gradient.addColorStop(1, "rgba(180, 140, 100, 0.25)");
  
  ctx.shadowBlur = 10;
  ctx.shadowColor = "rgba(100, 50, 30, 0.2)";
  

  if (shape.includes('hollow')) {
    ctx.strokeStyle = gradient;
  } else {
    ctx.fillStyle = gradient;
  }

  ctx.beginPath();

  switch (shape) {
    case 'circle':
      ctx.arc(x, y, half, 0, Math.PI * 2);
      ctx.fill();
      break;

    case 'triangle': {
      const height = size * Math.sqrt(3) / 2;
      ctx.moveTo(x, y - height / 2);
      ctx.lineTo(x - half, y + height / 2);
      ctx.lineTo(x + half, y + height / 2);
      ctx.closePath();
      ctx.fill();
      break;
    }

    case 'hollowTriangle': {
      const height = size * Math.sqrt(3) / 2;
      ctx.moveTo(x, y - height / 2);
      ctx.lineTo(x - half, y + height / 2);
      ctx.lineTo(x + half, y + height / 2);
      ctx.closePath();
      ctx.stroke();
      break;
    }

    case 'rectangle':
      ctx.fillRect(x - half, y - half, size, size);
      break;

    case 'hollowRectangle':
      ctx.strokeRect(x - half, y - half, size, size);
      break;
  }

  ctx.shadowBlur = 0;
  ctx.shadowColor = "transparent";
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let p of particles) {
    drawShape(p);

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < -200 || p.x > canvas.width + 200) p.vx *= -1;
    if (p.y < -200 || p.y > canvas.height + 200) p.vy *= -1;
  }

  requestAnimationFrame(drawParticles);
}

createParticles();
drawParticles();
