import React,{useState,useEffect} from 'react'

function App() {
  const [isCompleteScreen,setIsCompleteScreen]= useState(false);
  const [allTodos,setTodos]=useState([]);
  const[newTitle,setNewtitle]=useState("");
  const [newDescription,setNewDescription]= useState("");
  const [completedTodos,setCompleteTodos]= useState([]);


  const handleAddTodo= ()=>{
    let newTodoItem ={
      title:newTitle,
      description: newDescription
    }


    let updatedTodoArr =[...allTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem("todolist",JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo=(index)=>{
    let reducedTodo =[...allTodos];
    reducedTodo.splice(index);

    localStorage.setItem('todolist',JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  };

  const handleComplete=(index)=>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth();
    let yy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let CompletedOn = dd +"-"+mm +"-"+ yy+ 'at'+h +':'+m+':'+s;

    let filteredItem = {
      ...allTodos[index],
      CompletedOn:CompletedOn
    }

    let updatedCompletedArr=[...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompleteTodos(updatedCompletedArr);
  }


  useEffect(()=>{
    let savedTodo=JSON.parse(localStorage.getItem('todolist'));
    if(savedTodo){
      setTodos(savedTodo);
    }

  },[])
  return (
    <div className='App'>
      <h1>My Todo</h1>
      <div className="todo-wrapper">
        <div className='todo-input'>
          <div className='todo-input-item'>
            <label >Todo Title</label>
            <input type="text" value={newTitle} onChange={(e)=> setNewtitle(e.target.value)} placeholder='Name' />
          </div>
          <div className='todo-input-item'>
            <label >Todo Description</label>
            <input type="text" value={newDescription} onChange={(e)=> setNewDescription(e.target.value)} placeholder='Description' />
          </div>
          <div className='todo-input-item'>
          <button type='button' onClick={handleAddTodo} className='primaryBtn'>Add Todo</button>
          </div>
          </div>
          <div className='btn-area'>
            <button className={` secondaryBtn isCompleteScreen ${isCompleteScreen===false && "active"}`} onClick={()=>setIsCompleteScreen(false)}>Todo</button>
            <button className={` secondaryBtn isCompleteScreen ${isCompleteScreen===true && "active"}`}onClick={()=>setIsCompleteScreen(true)}>Completed</button>
            {/* <button className='secondary-Btn'>Not Completed</button> */}

          </div>
          <div className='todo-list'>
            {isCompleteScreen ==false && allTodos.map((items,index)=>{
              return <>
              <div className='todo-list-item' key={index}>
                <div>
              <h3>Name: {items.title}</h3>
              <p>Description: {items.description}</p>
              </div>
              <div>
              <button className='edit' onClick={()=>handleComplete(index)} >Completed</button>
              <button className='delete' onClick={()=>handleDeleteTodo(index)}>Delete</button>
            </div>
            </div> </>
            })}

          

          <div className='todo-list'>
            {isCompleteScreen ==true && allTodos.map((items,index)=>{
              return <>
              <div className='todo-list-item' key={index}>
                <div>
              <h3>Name: {items.title}</h3>
              <p>Description: {items.description}</p>
              <p><small>Completed on:{items.completedOn}</small></p>
              </div>
              <div>
              <button className='delete' onClick={()=>handleDeleteTodo(index)}>Delete</button>
            </div>
           </div> </>
            })}

          </div>


       </div>
      </div>
      
    </div>
  );
}

export default App
