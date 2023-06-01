import React, { useState } from 'react';
import { render } from 'react-dom';
import PageWrapper from './PageWrapper';
import Timer from './Timer';
import Controls from './Controls';

import './style.css';

// should be const
var initialTime = 60;

const App: React.FC = () => {
  const [time, setTime] = useState(initialTime);
  //use intervalReference
  const [timer, setTimer] = useState<number | null>(null);

  const startTimer = () => {
    //maybe improve (so it is not too deep)
    // return after if statement, keeps it less deep
    if (!timer) {
      setTimer(
        // this is not trustworthy for "actual time", should be changed to use date functions
        // request animation framefor proper performance (might not make sense in this case)
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
