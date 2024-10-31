import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const CelebrationComponent = ({ x, y }) => {
  const starPathOne = "⭐";
  const scalar = 1.5;
  const starOne = confetti.shapeFromText({ text: starPathOne });

  useEffect(() => {
    const launchConfetti = () => {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
        startVelocity: 20,
        shapes: [starOne],
        scalar,
      });
    };

    launchConfetti();
  }, [x, y, starOne]);

  return null; // لا حاجة لعرض أي شيء
};

export default CelebrationComponent;
