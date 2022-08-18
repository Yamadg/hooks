import logo from './logo.svg';
import './App.css';
import {useCallback, useState} from "react";
import ItemsList from "./ItemsList";


function App() {

    const [number, setNumber] = useState(1)
    const [colored, setColored] = useState(false)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsAPI = useCallback( () => {
        return new Array(number).fill('').map((_, i) => `Элемент ${i + 1}`)
    },[number])

    return (
        <div>
            <h1 style={styles}>Svoistvo: {number} </h1>
            <button onClick={() => setNumber(prev => prev + 1)}>ADD</button>
            <button onClick={() => setColored(prev => !prev)}>Change</button>

            <ItemsList getItems={generateItemsAPI}/>
        </div>
    );
}

export default App;
