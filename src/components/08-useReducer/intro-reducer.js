const initialState = [{
    id:1,
    todo:'Comparar Pan',
    done: false
}];

const todosReducer = ( state = initialState, action ) => {

    if(action?.type === 'agregar'){
        return [ ...state, action.payload ]

    }

    return state;
}

let todos = todosReducer();

const newTodo = {
    id:1,
    todo:'Comparar Pan',
    done: false
}

const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo

}

todos = todosReducer( todos, agregarTodoAction );


console.log(todos);