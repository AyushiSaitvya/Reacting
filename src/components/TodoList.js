import React,{useState,useEffect} from 'react'
import AddTodo from './AddTodo'

const TodoList=()=>{
     const[todos,setTodo]=useState(
         [
             {text:'Do your HomeWork',id:1},
             {text:'Go to shopping',id:2},
             {text:'Have Fun',id:3}
         ]
     );

     const [count,setCount]=useState(0);

    const addTodo=(text)=>{
        setTodo([
            ...todos,{text ,id:Math.random()}
        ]);
    };

    useEffect(()=>{
        console.log('useEffect',todos)
    },[todos]);

    useEffect(()=>{
        console.log('useEffect',count)
    },[count]);

    return(
        <div>
            <ul>
              { todos.map((todo) => {
                     return(
                         <li key={todo.id}>{todo.text}</li>
                     )
               })}
            </ul>
            <AddTodo addTodo={addTodo}/>
            <button  onClick={()=>setCount(count+1)} >Score:{count}</button>
        </div>
    )
}
export default TodoList;