import React,{useState,useRef} from 'react';


function helpPadTime(time) {
    return time.toString().padStart(2, '0');

}
function App() {

    const [title,settitle] = useState("Start The Timer!");


    const [timeleft,setTimeleft] = useState(25 * 60);

    const intervalRef =useRef(null);

    const minutes = helpPadTime(Math.floor(timeleft/60));
    const seconds = helpPadTime(timeleft - minutes * 60);

    function startTimer() {
        settitle('Timer Started');
        intervalRef.current =  setInterval(
           () => setTimeleft( (timeleft) => {
                   if (timeleft >= 1) return timeleft - 1;

                   return 0;
               }
           ),1000
       )
    }

    function stopTimer() {
        clearInterval(intervalRef.current);
        settitle('Timer Stopped');
    }

    function retsetTimer() {
        settitle("Resetting Timer");
        setTimeleft(25 * 60);
        clearInterval(intervalRef.current);
        settitle("Start The Timer");
        intervalRef.current=null;
    }

    return (
    <div className="App">
        <nav>
            <p className="app-description">App <span className="app-number">#1</span> Simple Timer.</p>
        </nav>

        <main className="main">
            <h1 className="main-h1"> <span>{title}</span> </h1>


          <div className="timer">
            <div className="timerSection">
                <span>{minutes}</span>
                <span>:</span>
                <span>{seconds}</span>
            </div>

            <div className="timerButtons">
               <button className="startButton" onClick={startTimer}>START</button>
                <button className="resetStop" onClick={stopTimer}>STOP</button>
                <button className="resetButton" onClick={retsetTimer}>RESET</button>
            </div>
          </div>

        </main>
    </div>
  );
}

export default App;
