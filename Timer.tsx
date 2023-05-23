import React from 'react';

const Timer: React.FC<{ time: number }> = ({
  time,
}) => {
  return (
    <span style={{ fontSize: '5em', color: '#61afef' }}>
      {Math.floor(time / 60)}:
      {(time % 60).toString().padStart(2, '0')}
    </span>
  );
};

export default Timer;
