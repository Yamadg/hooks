import logo from './logo.svg';
import './App.css';
import {useEffect, useMemo, useRef, useState} from "react";


function App() {

    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)



    const styles = useMemo(() =>({
            color : colored ? ' darkred' : 'black'

    }),[colored])

    function complexCompute(num) {
        let i = 0
        while (i < 1000000000) i++
        return num * 2
    }

    const computed = useMemo(() => {
        return complexCompute(number)
    },[number])

    useEffect(() =>{
        console.log('Styles changed')
    },[styles])

    return (
        <div>
            <h1 style={styles}>Svoistvo: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)}>ADD</button>
            <button onClick={() => setNumber(prev => prev - 1)}>REMOVE</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>
        </div>
    );
}

export default App;
