import React, { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import './styles.css';
import { TodoAdd } from './TodoAdd';

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

    // return [{
    //     id:new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];

}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    //se pasa por referencia el array de todos por que cambiaron y se envia la peticion al Reducer y al localStorage
    useEffect( () => {

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos]);

    const handleDelete = ( todoId ) => {        
        console.log(todoId);

        //crear la action
        const action = {
            type: 'delete',
            payload: todoId
            //payload: {id}
        }
        //dispatch
        dispatch( action );
    }

    const handleToggle = ( todoId ) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        })

    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload : newTodo
        })

    }
    
    
    

  return (
    <div>
        <h1>TodoApp ( { todos.length } )</h1>
        <hr />

        <div className="row">

            <div className="col-7">
            {/* TodoList, todos, handleDelete, handleToggle */}
            <TodoList

                todos={ todos }
                handleDelete={ handleDelete }
                handleToggle={ handleToggle }
            
            />


            </div>

            <div className="col-5">
                <TodoAdd

                    handleAddTodo = { handleAddTodo }

                
                />
            </div>

        </div>

    </div>
  )
}
