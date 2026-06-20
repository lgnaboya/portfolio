import { useEffect, useRef } from "react";

export function CodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    // Resize
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Symbols
    const symbols = [
      "{ }",
      "< >",
      "( )",
      "[ ]",
      "/>",
      "::",
      "Grid",
      "8px",
      "16px",
      "UI",
      "UX",
      "Aa",
      "#FFFFFF",
      "↔",
      "↕",
      "⌘K",
      "████",
      "▒▒▒▒",
    ];

    // ===== MATRIX RAIN =====
    class Rain {
      x: number;
      y: number;
      speed: number;
      length: number;
      chars: string[];

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * -canvas!.height;
        this.speed = Math.random() * 1 + 0.5;
        this.length = Math.floor(Math.random() * 10) + 5;
        this.chars = Array.from(
          { length: this.length },
          () => symbols[Math.floor(Math.random() * symbols.length)],
        );
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas!.height + 100) {
          this.y = -100;
          this.x = Math.random() * canvas!.width;
        }
      }

      draw() {
        ctx.font = '12px "JetBrains Mono", monospace';

        this.chars.forEach((c, i) => {
          const opacity = (1 - i / this.length) * 0.5;
          ctx.fillStyle = `rgba(140, 120, 255, ${opacity * 0.08})`;
          ctx.fillText(c, this.x, this.y - i * 18);
        });
      }
    }

    // ===== FLOATING TAGS =====
    class Tag {
      x: number;
      y: number;
      vx: number;
      vy: number;
      text: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = Math.random() * 0.4 - 0.2;
        this.vy = Math.random() * 0.4 - 0.2;
        this.text = symbols[Math.floor(Math.random() * symbols.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > canvas!.width + 50) this.x = -50;
        if (this.x < -50) this.x = canvas!.width + 50;
        if (this.y > canvas!.height + 50) this.y = -50;
        if (this.y < -50) this.y = canvas!.height + 50;
      }

      draw() {
        ctx.font = '14px "JetBrains Mono", monospace';
        ctx.fillStyle = "rgba(140, 120, 255, 0.08)";
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    // ===== BINARY =====
    class Binary {
      x: number;
      y: number;
      speed: number;
      val: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.speed = Math.random() * 0.3 + 0.1;
        this.val = Math.random() > 0.5 ? "1" : "0";
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas!.height) {
          this.y = 0;
          this.x = Math.random() * canvas!.width;
        }
      }

      draw() {
        ctx.font = "10px monospace";
        ctx.fillStyle = "rgba(120, 130, 255, 0.08)";
        ctx.fillText(this.val, this.x, this.y);
      }
    }

    // ===== GRID (kept from your original) =====
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(160, 140, 255, 0.02)";
      ctx.lineWidth = 1;

      const size = 60;

      for (let x = 0; x < canvas.width; x += size) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += size) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    // Create elements
    const rains = Array.from({ length: 5 }, () => new Rain());
    const tags = Array.from({ length: 15 }, () => new Tag());
    const binaries = Array.from({ length: 25 }, () => new Binary());

    // Animation
    let raf: number;
    const animate = () => {
      ctx.fillStyle = "rgba(8,6,18,0.35)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      // background layer
      binaries.forEach((b) => {
        b.update();
        b.draw();
      });

      // connections
      for (let i = 0; i < tags.length; i++) {
        for (let j = i + 1; j < tags.length; j++) {
          const dx = tags[i].x - tags[j].x;
          const dy = tags[i].y - tags[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);

          if (d < 140) {
            ctx.strokeStyle = `rgba(150,120,255,${0.04 * (1 - d / 140)})`;
            ctx.beginPath();
            ctx.moveTo(tags[i].x, tags[i].y);
            ctx.lineTo(tags[j].x, tags[j].y);
            ctx.stroke();
          }
        }
      }

      // tags
      tags.forEach((t) => {
        t.update();
        t.draw();
      });

      // rain (top layer)
      rains.forEach((r) => {
        r.update();
        r.draw();
      });

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-0 bg-[oklch(0.09_0.02_270)]" />

      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
    </>
  );
}
