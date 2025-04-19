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
  for (let i = 0; i < 20; i++) {
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

  // Left-to-right gradient with transparency
  const gradient = ctx.createLinearGradient(x - half, y, x + half, y);
  gradient.addColorStop(0, "rgba(62, 31, 15, 0.4)");   // deep brown with 40% opacity
  gradient.addColorStop(0.5, "rgba(160, 82, 45, 0.4)"); // sienna
  gradient.addColorStop(1, "rgba(244, 192, 149, 0.4)"); // light tan

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