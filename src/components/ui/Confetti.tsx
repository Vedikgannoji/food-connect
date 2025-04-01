
import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';

type ConfettiProps = {
  active: boolean;
  onComplete?: () => void;
}

const Confetti = ({ active, onComplete }: ConfettiProps) => {
  const refAnimationInstance = useRef<any>(null);

  const getInstance = useCallback((instance: any) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refAnimationInstance.current && 
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#9b87f5", "#D946EF", "#F97316", "#0EA5E9", "#8B5CF6"],
    });

    makeShot(0.2, {
      spread: 60,
      colors: ["#E5DEFF", "#FFDEE2", "#FDE1D3", "#D3E4FD", "#F2FCE2"],
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#7E69AB", "#6E59A5", "#D6BCFA", "#FEF7CD", "#FEC6A1"],
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#9b87f5", "#D946EF", "#F97316", "#0EA5E9"],
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#FEC6A1", "#E5DEFF", "#FFDEE2", "#FDE1D3", "#D3E4FD"],
    });
  }, [makeShot]);

  useEffect(() => {
    if (active) {
      fire();
      
      const timer = setTimeout(() => {
        onComplete && onComplete();
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, [active, fire, onComplete]);

  return (
    <ReactCanvasConfetti
      refConfetti={getInstance}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    />
  );
};

export default Confetti;
