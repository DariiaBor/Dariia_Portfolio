import React, { useEffect, useRef } from "react";

type Direction = "up" | "down" | "left" | "right";
type SparkColorType = "blue" | "lime";

interface Point {
  x: number;
  y: number;
}

interface GridSpark {
  path: Point[];
  speed: number;
  length: number;
  dir: Direction;
  opacity: number;
  targetNode: Point;
  colorType: SparkColorType;
  isLinear: boolean;
  turnsCount: number;
  maxTurns: number;
}

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let gridSize = 120;

    let isLowFrequencyMode = false;
    let isSpawningDelayed = false;
    let spawnTimeoutId: NodeJS.Timeout | null = null;

    // Переход в фоновый режим через 5 секунд
    const phaseTimer = setTimeout(() => {
      isLowFrequencyMode = true;
    }, 5000);

    const handleResize = () => {
      if (!canvas) return;
      const parent = canvas.parentElement;
      if (!parent) return;

      width = canvas.width = parent.clientWidth;
      height = canvas.height = parent.clientHeight;
      gridSize = width < 640 ? 80 : 120;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    let sparks: GridSpark[] = [];

    const getNextTarget = (x: number, y: number, dir: Direction): Point => {
      switch (dir) {
        case "right": return { x: x + gridSize, y };
        case "left":  return { x: x - gridSize, y };
        case "down":  return { x, y: y + gridSize };
        case "up":    return { x, y: y - gridSize };
      }
    };

    // Создание искры с отступом от краев
    const createVisibleSpark = (isLinear = false): GridSpark => {
      const cols = Math.floor(width / gridSize);
      const rows = Math.floor(height / gridSize);

      // Берем с отступом минимум 2 клетки от краев, чтобы искра не вылетала сразу
      const minCol = cols > 4 ? 2 : 1;
      const maxCol = cols > 4 ? cols - 2 : Math.max(1, cols - 1);
      const minRow = rows > 4 ? 2 : 1;
      const maxRow = rows > 4 ? rows - 2 : Math.max(1, rows - 1);

      const col = Math.floor(minCol + Math.random() * (maxCol - minCol + 1));
      const row = Math.floor(minRow + Math.random() * (maxRow - minRow + 1));

      const startX = col * gridSize;
      const startY = row * gridSize;

      // Направляем искры ближе к центру холста
      const centerX = width / 2;
      const centerY = height / 2;
      const possibleDirs: Direction[] = [];

      if (startX < centerX) possibleDirs.push("right");
      else possibleDirs.push("left");

      if (startY < centerY) possibleDirs.push("down");
      else possibleDirs.push("up");

      const dir = possibleDirs[Math.floor(Math.random() * possibleDirs.length)];
      const colorType: SparkColorType = Math.random() < 0.25 ? "lime" : "blue";
      const target = getNextTarget(startX, startY, dir);
      const sparkLength = 120 + Math.random() * 60;

      const path: Point[] = [];
      const steps = 15;
      for (let i = steps; i >= 0; i--) {
        const offset = (sparkLength / steps) * i;
        let px = startX;
        let py = startY;

        if (dir === "right") px -= offset;
        if (dir === "left") px += offset;
        if (dir === "down") py -= offset;
        if (dir === "up") py += offset;

        path.push({ x: px, y: py });
      }

      return {
        path,
        speed: 1.1 + Math.random() * 0.6,
        length: sparkLength,
        dir,
        opacity: colorType === "lime" ? 0.75 + Math.random() * 0.2 : 0.5 + Math.random() * 0.35,
        targetNode: target,
        colorType,
        isLinear,
        turnsCount: 0,
        maxTurns: isLinear ? 0 : Math.floor(Math.random() * 2) + 1,
      };
    };

    // Стартовый спавн 3 гарантированных искр
    for (let i = 0; i < 3; i++) {
      sparks.push(createVisibleSpark(false));
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Сетка
      const gridGradient = ctx.createRadialGradient(
        width / 2, height / 3, width * 0.15,
        width / 2, height / 3, width * 0.8
      );
      gridGradient.addColorStop(0, "rgba(188, 188, 188, 0.30)");
      gridGradient.addColorStop(0.6, "rgba(188, 188, 188, 0.15)");
      gridGradient.addColorStop(1, "rgba(188, 188, 188, 0.05)");

      ctx.strokeStyle = gridGradient;
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      // 2. Крестики на узлах
      const crossGradient = ctx.createRadialGradient(
        width / 2, height / 3, width * 0.15,
        width / 2, height / 3, width * 0.8
      );
      crossGradient.addColorStop(0, "rgba(117, 117, 117, 0.45)");
      crossGradient.addColorStop(1, "rgba(117, 117, 117, 0.12)");

      ctx.strokeStyle = crossGradient;
      ctx.lineWidth = 1.2;
      const crossSize = 4;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);

      for (let col = 0; col <= cols; col++) {
        for (let row = 0; row <= rows; row++) {
          if ((col + row) % 2 === 0) {
            const x = col * gridSize;
            const y = row * gridSize;
            ctx.beginPath();
            ctx.moveTo(x - crossSize + 0.5, y + 0.5);
            ctx.lineTo(x + crossSize + 0.5, y + 0.5);
            ctx.moveTo(x + 0.5, y - crossSize + 0.5);
            ctx.lineTo(x + 0.5, y + crossSize + 0.5);
            ctx.stroke();
          }
        }
      }

      // Поддержание ровно 3 искр в активной фазе
      if (!isLowFrequencyMode && sparks.length < 3) {
        const needToSpawn = 3 - sparks.length;
        for (let i = 0; i < needToSpawn; i++) {
          sparks.push(createVisibleSpark(false));
        }
      }

      // 3. Движение и отрисовка
      for (let index = sparks.length - 1; index >= 0; index--) {
        const spark = sparks[index];
        const head = spark.path[spark.path.length - 1];
        let newX = head.x;
        let newY = head.y;

        if (spark.dir === "right") newX += spark.speed;
        if (spark.dir === "left") newX -= spark.speed;
        if (spark.dir === "down") newY += spark.speed;
        if (spark.dir === "up") newY -= spark.speed;

        let reachedNode = false;
        if (spark.dir === "right" && newX >= spark.targetNode.x) reachedNode = true;
        if (spark.dir === "left" && newX <= spark.targetNode.x) reachedNode = true;
        if (spark.dir === "down" && newY >= spark.targetNode.y) reachedNode = true;
        if (spark.dir === "up" && newY <= spark.targetNode.y) reachedNode = true;

        if (reachedNode) {
          newX = spark.targetNode.x;
          newY = spark.targetNode.y;

          if (!spark.isLinear && spark.turnsCount < spark.maxTurns && Math.random() < 0.4) {
            const isHorizontal = spark.dir === "left" || spark.dir === "right";
            spark.dir = isHorizontal
              ? Math.random() > 0.5 ? "down" : "up"
              : Math.random() > 0.5 ? "right" : "left";

            spark.turnsCount += 1;
          }

          spark.targetNode = getNextTarget(newX, newY, spark.dir);
        }

        const newHead = { x: newX, y: newY };
        spark.path.push(newHead);

        let currentLength = 0;
        let cutIndex = 0;
        for (let i = spark.path.length - 1; i > 0; i--) {
          const p1 = spark.path[i];
          const p2 = spark.path[i - 1];
          currentLength += Math.hypot(p1.x - p2.x, p1.y - p2.y);

          if (currentLength > spark.length) {
            cutIndex = i - 1;
            break;
          }
        }
        if (cutIndex > 0) {
          spark.path = spark.path.slice(cutIndex);
        }

        const isOutOfBounds =
          newX < -gridSize * 2 ||
          newX > width + gridSize * 2 ||
          newY < -gridSize * 2 ||
          newY > height + gridSize * 2;

        if (isOutOfBounds) {
          sparks.splice(index, 1);
          continue;
        }

        if (spark.path.length > 1) {
          ctx.save();
          const isLime = spark.colorType === "lime";

          ctx.shadowBlur = isLime ? 12 : 10;
          ctx.shadowColor = isLime ? "#CDF22B" : "#1E45FB";

          const tail = spark.path[0];
          const headPoint = spark.path[spark.path.length - 1];
          const grad = ctx.createLinearGradient(tail.x, tail.y, headPoint.x, headPoint.y);

          if (isLime) {
            grad.addColorStop(0, "rgba(205, 242, 43, 0)");
            grad.addColorStop(0.7, `rgba(205, 242, 43, ${spark.opacity})`);
            grad.addColorStop(1, "rgba(225, 255, 80, 1)");
          } else {
            grad.addColorStop(0, "rgba(30, 69, 251, 0)");
            grad.addColorStop(0.7, `rgba(30, 69, 251, ${spark.opacity})`);
            grad.addColorStop(1, "rgba(80, 115, 255, 1)");
          }

          ctx.strokeStyle = grad;
          ctx.lineWidth = isLime ? 1.4 : 1.3;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";

          ctx.beginPath();
          ctx.moveTo(spark.path[0].x + 0.5, spark.path[0].y + 0.5);
          for (let i = 1; i < spark.path.length; i++) {
            ctx.lineTo(spark.path[i].x + 0.5, spark.path[i].y + 0.5);
          }
          ctx.stroke();
          ctx.restore();
        }
      }

      // Фоновый режим: 1 линейная искра каждые 8–10 секунд
      if (isLowFrequencyMode && sparks.length === 0 && !isSpawningDelayed) {
        isSpawningDelayed = true;
        const delay = 8000 + Math.random() * 2000;

        spawnTimeoutId = setTimeout(() => {
          sparks.push(createVisibleSpark(true));
          isSpawningDelayed = false;
        }, delay);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      clearTimeout(phaseTimer);
      if (spawnTimeoutId) clearTimeout(spawnTimeoutId);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden bg-[#F8F8F8]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />
      <div 
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(248, 248, 248, 0.88) 0%, rgba(248, 248, 248, 0.5) 50%, transparent 100%)"
        }}
      />
    </div>
  );
}

export default HeroBackground;