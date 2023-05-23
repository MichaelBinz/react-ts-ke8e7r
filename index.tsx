import React, { useState } from 'react';
import { render } from 'react-dom';
import PageWrapper from './PageWrapper';
import Timer from './Timer';
import Controls from './Controls';

import './style.css';

var initialTime = 60;

const App: React.FC = () => {
  const [time, setTime] = useState(initialTime);
  const [timer, setTimer] = useState<number | null>(null);

  const startTimer = () => {
    if (!timer) {
      setTimer(
        setInterval(() => {
          setTime((time) => time - 1);
        }, 1000)
      );
    }
  };

  const stopTimer = () => {
    clearInterval(timer);
    setTime(initialTime);
    setTimer(null);
  };

  return (
    <PageWrapper>
      <Timer time={time} />
      <Controls
        running={timer != null}
        startTimer={startTimer}
        stopTimer={stopTimer}
      />
    </PageWrapper>
  );
};

render(<App />, document.getElementById('root'));
