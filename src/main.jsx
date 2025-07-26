import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));

function ToDoApplication() {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState('');

    function handleClick(){
        setTodo(input);
    }

    return <>
        <h1>Hei Jeg er ToDo-appen din</h1>

        <div>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input} />
            <button onClick={handleClick}>Registrer</button>
            <p>Du har registrert {todo}</p>
        </div>
    </>;
}

root.render(<ToDoApplication/>);