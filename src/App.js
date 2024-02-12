import React from "react";

import './App.css';

import { useState } from "react";

function App() {

    const [weight, setweight] = useState(0);
    const [height, setheight] = useState(0);
    const [bmi, setbmi] = useState('');
    const [message, setmessage] = useState('');
    let calbmi = (e) => {

        e.preventDefault();

        if (weight === 0 || height === 0) {
            alert('please enter valid values');
        }
        else {
            let bmi = (weight / (height * height) * 703);
            setbmi(bmi.toFixed(1));
        }

        if (bmi < 25) {
            setmessage('you are underweight');
        }
        else if (bmi >= 25 && bmi <= 30) {
            setmessage('you have a healthy weight');
        }

        else {
            setmessage('you are overweight');
        }
    }

    let reload = () => {
        window.location.reload();
    }

    return (
        <div className="App">
            <div className="container">
                <h2>BMI CALCULATOR</h2>
                <form onSubmit={calbmi}>
                    <div>
                        <label>Weight</label>
                        <input type="text" placeholder="Enter weight value" value={weight} onChange={(e) => setweight(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Height</label>
                        <input type="text" placeholder="Enter height value" value={height} onChange={(event) => setheight(event.target.value)}></input>
                    </div>

                    <div>
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn btn-outline" type="submit" onClick={reload}>Reload</button>
                    </div>

                    <div className="center">
                        <h3>Your Bmi is : {bmi}</h3>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default App;