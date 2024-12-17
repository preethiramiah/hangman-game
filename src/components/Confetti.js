/* Source: https://lexingtonthemes.com/tutorials/how-to-create-a-confetti-animation-with-tailwind-css-and-javascript/ */
const confettis = [];
   
  export const createConfettis = () => {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const confettiColors = [
      "#5cffe4",
      "#a9ff03",
      "#fd02d1",
      "#1e1e59",
      "#9645f6",
    ];
    const confettiCount = 300;

    class Confetti {
      constructor(color) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.w = Math.random() * 10 + 5;
        this.h = Math.random() * 5 + 5;
        this.color = color;
        this.dx = Math.random() * 5 - 2.5;
        this.dy = Math.random() * -5 - 5;
      }
      update() {
        this.dy += 0.5;
        this.x += this.dx;
        this.y += this.dy;
        if (this.y + this.h > canvas.height) {
          this.dy *= -0.075;
          this.y = canvas.height - this.h;
        }
        if (this.x + this.w > canvas.width || this.x < 0) {
          this.dx *= -1;
        }
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
      }
    }

    for (let i = 0; i < confettiCount; i++) {
      confettis.push(
        new Confetti(
          confettiColors[Math.floor(Math.random() * confettiColors.length)]
        )
      );
    }
  }
  export const animate = () => {
    const canvas = document.getElementById("confettiCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettis.forEach((confetti, index) => {
      confetti.update();
      confetti.draw();
    });
    if (confettis.length > 0) {
      requestAnimationFrame(animate);
    }
  }