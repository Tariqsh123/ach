"use client";

import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { Signika } from "next/font/google";

const signika = Signika({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function GameSection() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [running, setRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const keys = useRef({ left: false, right: false });
  const ballRef = useRef({ x: 150, y: 150, dx: 3, dy: 3, radius: 10 });
  const paddleRef = useRef({ x: 120, y: 270, width: 60, height: 10 });

  // --- MAIN GAME LOOP ---
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const draw = () => {
      // Clear canvas (transparent)
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const ball = ballRef.current;
      const paddle = paddleRef.current;

      // Paddle movement
      const speed = 6;
      if (keys.current.left) paddle.x = Math.max(paddle.x - speed, 0);
      if (keys.current.right)
        paddle.x = Math.min(paddle.x + speed, canvas.width - paddle.width);

      // Ball movement
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall collision
      if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
        ball.dx = -ball.dx;
      if (ball.y - ball.radius < 0) ball.dy = -ball.dy;

      // Paddle collision
      if (
        ball.y + ball.radius > paddle.y &&
        ball.x > paddle.x &&
        ball.x < paddle.x + paddle.width
      ) {
        ball.dy = -ball.dy;
        setScore((prev) => prev + 1);
      }

      // Game over
      if (ball.y + ball.radius > canvas.height) {
        setGameOver(true);
        setStarted(false);
        setRunning(false);
        return;
      }

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#7ae1d6";
      ctx.fill();
      ctx.closePath();

      // Draw paddle
      ctx.fillStyle = "#7ae1d6";
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);

      // Score
      if (started) {
        ctx.font = "16px sans-serif";
        ctx.fillStyle = "#7ae1d6";
        ctx.fillText(`Score: ${score}`, 10, 25);
      }

      if (running) animationRef.current = requestAnimationFrame(draw);
    };

    if (running) animationRef.current = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animationRef.current);
  }, [running, started, score]);

  // --- KEYBOARD CONTROLS ---
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") keys.current.left = true;
      if (e.key === "ArrowRight") keys.current.right = true;
    };
    const handleKeyUp = (e) => {
      if (e.key === "ArrowLeft") keys.current.left = false;
      if (e.key === "ArrowRight") keys.current.right = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // --- TOUCH MOVEMENT (MOBILE) ---
  const handleTouchMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const touchX = e.touches[0].clientX - rect.left;
    const paddle = paddleRef.current;
    let newX = touchX - paddle.width / 2;
    if (newX < 0) newX = 0;
    if (newX + paddle.width > canvasRef.current.width)
      newX = canvasRef.current.width - paddle.width;
    paddle.x = newX;
  };

  // --- RANDOM BALL DIRECTION ---
  const resetBall = () => {
    const speed = 3;
    const angle = Math.random() * (Math.PI / 3) + Math.PI / 6; // 30°–60°
    const directionX = Math.random() < 0.5 ? -1 : 1;
    const directionY = Math.random() < 0.5 ? -1 : 1;

    ballRef.current = {
      x: 150,
      y: 150,
      dx: Math.cos(angle) * speed * directionX,
      dy: Math.sin(angle) * speed * directionY,
      radius: 10,
    };

    paddleRef.current = { x: 120, y: 270, width: 60, height: 10 };
  };

  const startGame = () => {
    resetBall();
    setScore(0);
    setGameOver(false);
    setStarted(true);
    setRunning(true);
  };

  const togglePause = () => setRunning((prev) => !prev);

  return (
    <section className="w-full flex justify-center py-16 px-6 md:px-10 text-white">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center justify-between">
        {/* LEFT SIDE */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 text-center md:text-left">
          <h2
            className={`${signika.className} text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-white text-center md:text-left`}
          >
            Code, Play, Learn
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-md mx-auto md:mx-0">
            Take a coding break and test your reflexes with the{" "}
            <span className="text-[#7ae1d6] font-semibold">
              Super Deluxe Ball Game
            </span>
            . Keep the ball bouncing, earn points, and see how far your focus
            can go.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:w-1/2 w-full flex flex-col items-center relative">
          <div className="relative">
            <canvas
              ref={canvasRef}
              width={320}
              height={300}
              className="border-2 border-[#7ae1d6] rounded-xl bg-transparent !bg-transparent"
              onTouchMove={handleTouchMove}
            />

            {/* Start Overlay */}
            {!started && !gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent rounded-xl border-2 border-[#7ae1d6]">
                <h3 className="text-2xl font-bold mb-4 text-[#7ae1d6]">
                  Ready to Play?
                </h3>
                <button
                  onClick={startGame}
                  className="bg-[#7ae1d6] text-white font-semibold px-8 py-2 rounded-full hover:opacity-90 transition"
                >
                  Start Game
                </button>
              </div>
            )}

            {/* Game Over */}
            {gameOver && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent rounded-xl border-2 border-[#7ae1d6]">
                <h3 className="text-3xl font-bold mb-3 text-[#7ae1d6]">
                  Game Over
                </h3>
                <p className="text-white mb-4">Final Score: {score}</p>
                <button
                  onClick={startGame}
                  className="bg-[#7ae1d6] text-white font-semibold px-8 py-2 rounded-full hover:opacity-90 transition"
                >
                  Try Again
                </button>
              </div>
            )}

            {/* Pause / Play Button */}
            {started && !gameOver && (
              <button
                onClick={togglePause}
                className="absolute top-2 right-3 bg-[#7ae1d6]/20 hover:bg-[#7ae1d6]/30 p-2 rounded-full transition"
              >
                {running ? <FaPause size={18} /> : <FaPlay size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
