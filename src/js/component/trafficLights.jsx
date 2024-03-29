import React, { useState } from 'react';

const trafficLights = () => {
  // Estado para manejar el color activo
  const [activeColor, setActiveColor] = useState('');


  const changeColor = (color) => {
    setActiveColor(color);
  };


  const randomColor = () => {
    const colors = ['red', 'green', 'yellow'];
    const aleatoryColor = colors[Math.floor(Math.random() * colors.length)];
    changeColor(aleatoryColor);
  };


  const activateDementia = () => {
    changeColor('purpura');
  };

  return (
    <div>
      <div className="semaforo">
        <div
          className="redLight"
          style={{ backgroundColor: activeColor === 'red' ? 'red' : 'grey' }}
          onClick={() => changeColor('red')}
        />
        <div
          className="yellowLight"
          style={{ backgroundColor: activeColor === 'yellow' ? 'yellow' : 'grey' }}
          onClick={() => changeColor('yellow')}
        />
        <div
          className="greenLight"
          style={{ backgroundColor: activeColor === 'green' ? 'green' : 'grey' }}
          onClick={() => changeColor('green')}
        />
        {activeColor === 'purple' && (
          <div
            className="purpleLight"
            style={{ backgroundColor: 'purple' }}
          />
        )}
      </div>
      <button onClick={randomColor}>Partying lights</button>
      <button onClick={activateDementia}>Purple haze</button>
    </div>
  );
};

export default trafficLights;