import React, { useState, useEffect, useRef } from 'react';

const FallingObjectsGame = () => {
  const [objects, setObjects] = useState([]);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const gameBoxRef = useRef(null);
  const basketRef = useRef(null);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMouseX(event.clientX);
    };

    if (isRunning) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isRunning]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setObjects((prevObjects) => [
        ...prevObjects,
        { id: Date.now(), x: Math.random() * 90, y: 0 },
      ]);
    }, 1000);

    const gameLoop = setInterval(() => {
      setObjects((prevObjects) => {
        return prevObjects
          .map((obj) => ({ ...obj, y: obj.y + 5 }))
          .filter((obj) => {
            if (obj.y > 90) {
              setMissed((missed) => missed + 1);
              return false;
            }
            return true;
          });
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearInterval(gameLoop);
    };
  }, [isRunning]);

  useEffect(() => {
    if (missed >= 3) {
      setIsRunning(false);
    }
  }, [missed]);

  useEffect(() => {
    const basket = basketRef.current;
    if (!basket) return;

    setObjects((prevObjects) => {
      return prevObjects.filter((obj) => {
        const basketRect = basket.getBoundingClientRect();
        const objRect = {
          top: obj.y,
          bottom: obj.y + 10,
          left: obj.x,
          right: obj.x + 10,
        };

        if (
          objRect.bottom >= basketRect.top &&
          objRect.right >= basketRect.left &&
          objRect.left <= basketRect.right
        ) {
          setScore((score) => score + 1);
          return false;
        }
        return true;
      });
    });
  }, [objects]);

  const handleStart = () => {
    setScore(0);
    setMissed(0);
    setObjects([]);
    setIsRunning(true);
  };

  return (
    <div
      ref={gameBoxRef}
      style={{
        position: 'relative',
        width: '100%',
        height: '400px',
        border: '1px solid lightgray',
        borderRadius: '5px',
        overflow: 'hidden',
        marginTop: '20px',
      }}
    >
      {!isRunning && (
        <button
          onClick={handleStart}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          {missed >= 3 ? 'Play Again' : 'Start Game'}
        </button>
      )}
      <div
        ref={basketRef}
        style={{
          position: 'absolute',
          bottom: '10px',
          left: `${mouseX - 50}px`,
          width: '100px',
          height: '20px',
          backgroundColor: 'blue',
          transition: 'left 0.1s',
        }}
      />
      {objects.map((obj) => (
        <div
          key={obj.id}
          style={{
            position: 'absolute',
            top: `${obj.y}%`,
            left: `${obj.x}%`,
            width: '10px',
            height: '10px',
            backgroundColor: 'red',
          }}
        />
      ))}
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: 'black',
        }}
      >
        Score: {score}
      </div>
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'black',
        }}
      >
        Missed: {missed}
      </div>
    </div>
  );
};

export default FallingObjectsGame;
