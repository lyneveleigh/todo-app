import React from "react";

const Todo = ({text, todos,todo, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id))
        
    }
       
      
    // const editHandler = (text,key) => {
    //   items.map(item=>{      
    //     if(item.key===key){
    //       item.text= text;
    //     }
    //   })
    //   this.setState({
    //     items: items
    //   })        
        
          

    const completeHandler = () => {
        setTodos(todos.map(item => {
            
            if(item.id === todo.id){                  
                return {
                    ...item, completed: !item.completed
                };
            }
            return item;
        }))
            
            
    } 
    

  return(
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className='complete-btn'>
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className="fas fa-trash"></i>
      </button>
      {/* <button onClick={editHandler} className='trash-btn'>
        <i className="far fa-edit"></i>
      </button>  */}
    </div> 
    );
};

export default Todo ;
