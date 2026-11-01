import React, { useRef, useState } from 'react';

interface SwipeGestureHandlers {
  offsetX: number;
  isDragging: boolean;
  swipeProgress: number;
  swipeDirection: 'left' | 'right' | null;
  onTouchStart: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchMove: (event: React.TouchEvent<HTMLDivElement>) => void;
  onTouchEnd: () => void;
  onMouseDown: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp: () => void;
  onMouseLeave: () => void;
  triggerSwipe: (isKnown: boolean) => void;
  consumeTapAllowed: () => boolean;
}

export function useSwipeGesture(
  onSwipeGrade: (isKnown: boolean) => void
): SwipeGestureHandlers {
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const velocityXRef = useRef<number>(0);
  const didSwipeRef = useRef<boolean>(false);
  const isAnimatingOutRef = useRef<boolean>(false);

  const [offsetX, setOffsetX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);

  const animateFlyOut = (isKnown: boolean) => {
    if (isAnimatingOutRef.current) return;
    isAnimatingOutRef.current = true;
    didSwipeRef.current = true;
    setIsDragging(false);
    setSwipeDirection(isKnown ? 'right' : 'left');
    setOffsetX(isKnown ? 380 : -380);

    window.setTimeout(() => {
      setOffsetX(0);
      setSwipeDirection(null);
      isAnimatingOutRef.current = false;
      onSwipeGrade(isKnown);
    }, 140);
  };

  const handleStart = (clientX: number, clientY: number) => {
    if (isAnimatingOutRef.current) return;
    startXRef.current = clientX;
    startYRef.current = clientY;
    lastXRef.current = clientX;
    lastTimeRef.current = performance.now();
    velocityXRef.current = 0;
    didSwipeRef.current = false;
    setIsDragging(true);
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging || isAnimatingOutRef.current) return;

    const now = performance.now();
    const deltaX = clientX - startXRef.current;
    const deltaY = clientY - startYRef.current;
    const deltaTime = Math.max(1, now - lastTimeRef.current);

    if (Math.abs(deltaX) > 3 && Math.abs(deltaX) > Math.abs(deltaY) * 0.65) {
      const instantVelocity = (clientX - lastXRef.current) / deltaTime;
      velocityXRef.current = velocityXRef.current * 0.4 + instantVelocity * 0.6;
      lastXRef.current = clientX;
      lastTimeRef.current = now;

      if (Math.abs(deltaX) > 8) {
        didSwipeRef.current = true;
      }

      setOffsetX(deltaX);
      setSwipeDirection(deltaX > 16 ? 'right' : deltaX < -16 ? 'left' : null);
    }
  };

  const handleEnd = () => {
    if (!isDragging || isAnimatingOutRef.current) return;

    const deltaX = offsetX;
    const velocityX = velocityXRef.current;

    const shouldTriggerSwipe =
      Math.abs(deltaX) >= 44 ||
      (Math.abs(deltaX) >= 18 && Math.abs(velocityX) >= 0.28);

    if (shouldTriggerSwipe) {
      const isKnown = deltaX > 0;
      animateFlyOut(isKnown);
      return;
    }

    setIsDragging(false);
    setOffsetX(0);
    setSwipeDirection(null);
  };

  const triggerSwipe = (isKnown: boolean) => {
    animateFlyOut(isKnown);
  };

  const consumeTapAllowed = () => {
    const allowed = !didSwipeRef.current && !isAnimatingOutRef.current;
    didSwipeRef.current = false;
    return allowed;
  };

  return {
    offsetX,
    isDragging,
    swipeProgress: Math.min(Math.max(offsetX / 44, -1), 1),
    swipeDirection,
    onTouchStart: (e) => {
      if (e.touches.length === 1) {
        handleStart(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    onTouchMove: (e) => {
      if (e.touches.length === 1) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    onTouchEnd: handleEnd,
    onMouseDown: (e) => handleStart(e.clientX, e.clientY),
    onMouseMove: (e) => handleMove(e.clientX, e.clientY),
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd,
    triggerSwipe,
    consumeTapAllowed,
  };
}
