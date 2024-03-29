import React, { useState } from 'react'
import Bootstrap from 'bootstrap'
import trafficLights from './trafficLights' 

const trafficLightsLooks = () => {

    return ( <div></div>
       /*  <div className="semaforo text-center mt-5">

                <div className="mb-3">

                    <div className="bg-black rounded-3 p-3">
                        <div
                        className={`rounded-circle border border-2 mb-2 ${activeColor === 'red' ? 'bg-danger' : 'bg-secondary'}`}
                        style={{ width: '60px', height: '60px', margin: '0 auto' }}
                        onClick={() => changeColor('red')}
                        ></div>

                        <div
                        className={`rounded-circle border border-2 mb-2 ${activeColor === 'yellow' ? 'yellow' : 'grey' }`}
                        style={{ width: '60px', height: '60px', margin: '0 auto' }}
                        onClick={() => changeColor('yellow')}
                        ></div>
                        
                        <div
                        className={`rounded-circle border border-2 ${activeColor === 'green' ? 'green' : 'grey' }`}
                        style={{ width: '60px', height: '60px', margin: '0 auto' }}
                        onClick={() => changeColor('green')}
                        ></div>
                        {colorActivo === 'purple' && (
                        <div
                            className="rounded-circle border border-2 bg-purple"
                            style={{ width: '60px', height: '60px', margin: '0 auto', backgroundColor: 'purple' }}
                        ></div>
                        )}

                    </div>

                </div>
                     <button onClick={randomColor}>Partying lights</button>
                     <button onClick={activateDementia}>Purple haze</button>
            </div> */
            )
}



export default trafficLightsLooks 