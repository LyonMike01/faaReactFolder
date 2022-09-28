
import { useState, useEffect } from "react";

import "../styles.css";

export default function App() {

    let [presentState, setPresentState] = useState(false); // useState{false};

    let [time, setTime] = useState("00:00:00");

//State COmponent

    function toggleState() {
        setPresentState(!presentState);

        //OR

        setPresentState((prevState) => !prevState);   //Arrow function

        setPresentState( function (prevState) {  // Norm FUnction
            return !prevState;
        });

        // console.log("Upadting UI.......");
        // presentState = !presentState;
        // console.log("New present state", presentState);
    }

    function getTime () {
        return new Date().getTime();
    }

    //Life Cycle 

    useEffect (() => {
       const interval = setInterval( () => {setTime(getTime())}, 1000);
    return () => { 
        clearInterval(interval);
    }

    }, [presentState]);

    return (
        <div className = "app"> 
        <button onClick = {toggleState} className = "btn"> {presentState ? "on" : "off"} </button>
        {
            // we use this tinary operator cus there is no other "else condition", otherwise,            
            //the tinary operator methnod on line 49 would have been used

            presentState && <div> {time} </div> //If presentState is true (on), display the time
            // OR
            // presentState ? <div> {time} </div> : {"else condition"}
        
        }
        </div>
    );

};