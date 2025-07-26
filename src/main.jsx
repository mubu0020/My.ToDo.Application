import React from 'react';
import ReactDOM from 'react-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));

function ToDoApplication() {
    return <h1>Hei Jeg er ToDo-appen din</h1>;
}

root.render(<ToDoApplication/>);