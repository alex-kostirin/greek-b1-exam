import React, { useRef, useState } from 'react';

interface SwipeGestureHandlers {
  offsetX: number;
  isDragging: boolean;
  onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: () => void;
}

export function useSwipeGesture(
  onSwipeGrade: (isKnown: boolean) => void
): SwipeGestureHandlers {
  const startXRef = useRef<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.touches.length !== 1) return;
    startXRef.current = event.touches[0].clientX;
    setIsDragging(true);
  };

  const onTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const deltaX = event.touches[0].clientX - startXRef.current;
    if (Math.abs(deltaX) > 10) {
      setOffsetX(deltaX);
    }
  };

  const onTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (offsetX > 85) {
      setOffsetX(420);
      window.setTimeout(() => {
        setOffsetX(0);
        onSwipeGrade(true);
      }, 150);
    } else if (offsetX < -85) {
      setOffsetX(-420);
      window.setTimeout(() => {
        setOffsetX(0);
        onSwipeGrade(false);
      }, 150);
    } else {
      setOffsetX(0);
    }
  };

  return {
    offsetX,
    isDragging,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
}
