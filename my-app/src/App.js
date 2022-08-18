import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })
    const mouseMoveHandler = event =>{
        setPos({
            x: event.clientX,
            y: event.clientY,
        })
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('delete ')
        }
    }, [type])

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        return () =>{
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>{type}</h1>
            <button onClick={() => setType('users')}>users</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>posts</button>

            {/*<pre>{JSON.stringify(data,null,2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    );
}

export default App;
