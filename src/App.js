import React, {useState, useEffect} from 'react';
import {Button, TextField } from '@material-ui/core';
import ToDo from './ToDo';
import './App.css';
import { collection , addDoc, doc, onSnapshot, getDocs} from 'firebase/firestore';
import db from './Firebase.js';
import SignUpIn from './signupin';


function App() {
  const [todos, setTodos] = useState([]);
  const [input, SetInput] = useState('')
 
  //when the app loads, we need to listen to the database and fetch new todos as the get added/removed
  useEffect(() => {
    /* console.log(db.collection('todos').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc=>doc.data().text))
    })) */
   

  }, []) // if blank run once,

  const addTodo = async (event) => { 
       
      event.preventDefault();

      /* db.collection('todos').add({
        text:input
      }) */
      const docRef = await addDoc(collection(db, 'todos'),{
        text:input
      })

      console.log('button clicked');
      setTodos([...todos, input]);
      
      
      SetInput('');
  }


  return (
    <div className="App">
      <h1>hello Clever Programmers ..</h1>

      <form>
        <TextField value={input} required id="standard-required" label="Write a Todo"  onChange={e => SetInput(e.target.value)}/>
        
        <Button disabled= {!input} variant="contained" color="primary" type="submit" onClick={addTodo}>
          Add Todo
        </Button>
        
      </form>

      <ul>
        {todos.map((todo) =>(
          <ToDo text={todo} />
        )
          
        )}
        
        
      </ul>
      
    </div>
  );
}
export default App;
