import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));

function ToDoApplication() {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    function handleClick(){
        setTasks(prevTasks => [...prevTasks, input]);
        setInput("");
    }

    return <>
        <h1>Hei Jeg er ToDo-appen din</h1>

        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={handleClick}>Registrer</button>
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </div>
    </>;
}

root.render(<ToDoApplication/>);