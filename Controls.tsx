import React from 'react';

const Controls: React.FC<{
  running: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}> = ({ running, startTimer, stopTimer }) => {
  if (running) {
    return <button onClick={stopTimer}>Reset</button>;
  } else {
    return <button onClick={startTimer}>Start</button>;
  }
};

export default Controls;
