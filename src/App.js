import { useState } from 'react';
import './App.css';

function CalcDisplay({display}) {
  return (
    <div className="calcDisplay">
      {display}
    </div>
  );
}

function CalcButton({value, onClick}) {
  return (
    <button className="calcButton" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {

  const [pin, setPin] = useState("1234567890");
  const [num, setNum] = useState(0);
  const [disp, setDisp] = useState("ENTER CODE");
  const [changePinState, setChangePinState] = useState(0);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
      if (num === 0) {
        setNum(value)
        setDisp(value);
      } else {
        setNum(num+value)
        setDisp(num+value);
      }
    console.log(num.length);
    console.log(num +'|'+ disp);
  };

  const enterClickHandler = () => {    
    if (changePinState === 0) {
      if(num === pin) {
        setDisp("OPEN");
      } else {
        setDisp("LOCKED");
      }
    } else if (changePinState === 1) {
      if(num === pin) {
        setDisp("ENTER NEW CODE");
        setChangePinState(2);
      } else {
        setDisp("INVALID CODE");
      }
    } else if (changePinState === 2) {
      if(num.length >= 8) {
        setPin(num);
        setDisp("CHANGE CODE SUCCESSFUL");
        setNum(0);
        setChangePinState(0);
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS");
        setNum(0);
      }
    }
    setNum(0);
    console.log(num +'|'+ disp);    
  };

  const clearClickHandler = () => {
    setNum(0);
    setDisp("ENTER CODE");

    console.log(num +'|'+ disp);
  };

  const nameClickHandler = () => {
    setNum(0);
    setDisp("MARK YASHER P. SANTOS");
  };

  const subjClickHandler = () => {
    setNum(0);
    setDisp("C-PEITEL3");
  };

  const pinClickHandler = () => {
    setNum(0);
    setDisp("ENTER CURRENT CODE");
    setChangePinState(1);
    console.log(num +'|'+ disp);
  };

  return ( 
    <div className="calcContainer">
      <CalcDisplay display={disp}/>
      <div className="calcButtonsContainer">
        <CalcButton value="7" onClick={numberClickHandler}/>
        <CalcButton value="8" onClick={numberClickHandler}/>
        <CalcButton value="9" onClick={numberClickHandler}/>
        <CalcButton value="4" onClick={numberClickHandler}/>
        <CalcButton value="5" onClick={numberClickHandler}/>
        <CalcButton value="6" onClick={numberClickHandler}/>
        <CalcButton value="1" onClick={numberClickHandler}/>
        <CalcButton value="2" onClick={numberClickHandler}/>
        <CalcButton value="3" onClick={numberClickHandler}/>
        <CalcButton value="RESET" onClick={clearClickHandler}/>
        <CalcButton value="0" onClick={numberClickHandler}/>
        <CalcButton value="ENTER" onClick={enterClickHandler}/>
        <CalcButton value="NAME" onClick={nameClickHandler}/>
        <CalcButton value="SUBJ" onClick={subjClickHandler}/>
        <CalcButton value="PIN" onClick={pinClickHandler}/>
      </div>  
    </div>  
  );
}

export default App;