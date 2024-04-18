import React, { useState } from 'react';


const TrafficLightsLooks = () => {
    const [activeColor, setActiveColor] = useState('');
    const [showSelf, setShowSelf] = useState(false);

    const changeColor = (color) => {
        setActiveColor(color);
    };

    const randomColor = () => {
        const colors = ['red', 'green', 'yellow'];
        const aleatoryColor = colors[Math.floor(Math.random() * colors.length)];
        changeColor(aleatoryColor);
    };

    const activateDementia = () => {
        setShowSelf(!showSelf);
        // Si activamos "dementia", también cambiamos el color a "purple"
        if (!showSelf) {
            changeColor('purple');
        }
    };

    return (
        <div>
            <div className="semaforo text-center mt-5">
                <div className="mb-3">
                    <div className="bg-black rounded-3 p-3">
                        <div
                            className={`rounded-circle border border-2 mb-2 ${activeColor === 'red' ? 'bg-danger' : 'bg-secondary'}`}
                            style={{ width: '60px', height: '60px', margin: '0 auto' }}
                            onClick={() => changeColor('red')}
                        ></div>

                        <div
                            className={`rounded-circle border border-2 mb-2 ${activeColor === 'yellow' ? 'bg-warning' : 'bg-secondary'}`}
                            style={{ width: '60px', height: '60px', margin: '0 auto' }}
                            onClick={() => changeColor('yellow')}
                        ></div>

                        <div
                            className={`rounded-circle border border-2 ${activeColor === 'green' ? 'bg-success' : 'bg-secondary'}`}
                            style={{ width: '60px', height: '60px', margin: '0 auto' }}
                            onClick={() => changeColor('green')}
                        ></div>
                        {/* Cuarto div que se mostrará solo cuando el color activo sea "purple" y showSelf sea true */}
                        {activeColor === 'purple' && showSelf && (
                            <div
                                className="rounded-circle border border-2 bg-purple"
                                style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: 'purple' }}
                            >
                                
                            </div>
                        )}
                    </div>
                </div>
                <button onClick={randomColor}>Partying lights</button>
                <button onClick={activateDementia}>Purple haze</button>
            </div>
        </div>
    );
};

export default TrafficLightsLooks;