import React from 'react';

const Controls: React.FC<{
  running: boolean;
  startTimer: () => void;
  stopTimer: () => void;
}> = ({ running, startTimer, stopTimer, resumeTimer, pauseTimer }) => {
  if (running) {
    return <div>
      <button onClick={pauseTimer}>Pause</button><br />
      <button onClick={stopTimer}>Reset</button>
    </div>;
  } else {
    return <div>
      <button onClick={startTimer}>Start/Resume</button><br />
      <button onClick={stopTimer}>Reset</button>
    </div>;
  }
};

export default Controls;
