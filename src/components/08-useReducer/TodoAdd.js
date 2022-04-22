import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description:'',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ){
            return;
        }

        const newTodo = {

            id:new Date().getTime(),
            desc: description,
            done: false

        };

        handleAddTodo( newTodo );
        reset();

        // const action = {

        //     type: 'add',
        //     payload : newTodo

        // }

        //dispatch( action );
        //reset();
    }
        console.log(description);

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />
        <form onSubmit={ handleSubmit }>

            <input
                type="text"
                name="description"
                className='form-control'
                placeholder="Aprnder ..."
                autoComplete="off"
                value={ description }
                onChange={ handleInputChange }
            />

                <button
                    className="btn btn-outline-primary mt-1 btn-block"
                > 
                    Agregar
                </button>

        </form>
    </>
  )
}
