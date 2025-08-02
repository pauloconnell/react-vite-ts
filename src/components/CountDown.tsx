// React 16.x code​​​​​​‌‌​‌‌‌​​‌‌​​​​​​​‌‌‌​‌‌‌​ below
import React, { Fragment, useState, useEffect } from 'react';

// Create the React component here
function Solution() {

  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [inputSeconds, setInputSeconds] = useState(0);
  const [inputMinutes, setInputMinutes] = useState(0);

  const [time, setTime] = useState(0);  // total time in seconds

  const [isRunning, setIsRunning] = useState(false);      // isRunning is failing....

  // timer will work with interval to decrement # seconds left
  useEffect(()=>{
    let intervalId;
    if(isRunning && time>0){
      intervalId = setInterval(()=>{
        setTime(prevTime=>prevTime-1);
        formatTime();                 // update display
      }, 1000);
      
    }else if(time==0){      // stop timer when time is up
      setIsRunning(false);
    }
    return ()=> clearInterval(intervalId);  // clean up
  }, [isRunning, time])

  const formatTime = () =>{
    setMinutes(Math.floor(time / 60));
     setSeconds(time %60);
  }

  const handleStartToggle = () =>{
    alert({isRunning})
    if( !isRunning ){
      const totalSeconds = minutes*60 + seconds;
      if(totalSeconds>0){
        setTime(totalSeconds);
      }


    }else{
  setIsRunning(!isRunning)
    }
    
    
  }


    return (
      <Fragment>
        <label>
          <input type="number" value={inputMinutes} onChange={(e)=>{setInputMinutes(e.target.value)}} />
          Minutes
        </label>
        <label>
          <input type="number" value={inputSeconds} onChange={(e)=>{setInputSeconds(e.target.value)}} />
          Seconds
        </label>
  
        <button onClick={handleStartToggle}>START</button>
        <button>PAUSE / RESUME</button>
        <button>RESET</button>
  
        <h1 data-testid="running-clock">{minutes}:{seconds}</h1>
        isRunning {isRunning}
        total seconds = {time}
      </Fragment>
    );
  }

// DO NOT CHANGE THIS FUNCTION
export function Preview() {
    return <Solution />;
}

// DO NOT CHANGE
export default Solution;