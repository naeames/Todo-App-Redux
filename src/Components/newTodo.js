

import React , {useState} from 'react';
import { connect } from 'react-redux';
import {addtask} from '../Action/action'


 function NewTodo(props) {
    const [newItem, setNewItem] = useState('')
    const addNewItem = () =>{
        props.addtask({
            id: Math.random(),
            text: newItem,
            isCompleted: false,
            isEditable:false
        })
        setNewItem('')
    }

     return (
       <header className="main-header">
       <h1>To-Do App!</h1>
       
           <label >
               <span> Add new To-Do </span>
               <input className="input-text" type="text" placeholder="Entrer new Task"
               value={newItem}
               onChange={(event)=> setNewItem(event.target.value)}
               id="newTask"   />
               <button className="btn-add " id="addbtn" onClick = {() => addNewItem()} > add</button>
 
           </label>
         
   </header>
     );
   }
   
   export default connect (null,{addtask})(NewTodo)