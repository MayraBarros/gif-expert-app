/* eslint-disable react/prop-types */

import { useState } from 'react';
import PropTypes from 'prop-types'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
 
    const onInputChange = (event) =>{
        setInputValue(event.target.value);
    }


    const oSubmitInput = (event)=>{
        //prevenimos que se recargue la pagina la presionar enter
        event.preventDefault();

        //controlamos que la variable de estado almacene un value sin espacios al principio y final y que tenga >2 caracteres
        if(inputValue.trim() <=1) return;

        // onNewCategory va a tener el valor del inputValue ( la variable del estado actualizado) sin espacios
        onNewCategory( inputValue.trim() );

        //limpiamos el input una vez que se ha presionado enter
        setInputValue('');
    }

    
  return (
    <form onSubmit={oSubmitInput} >
        <input 
            type="text"
            placeholder='Buscar Gif'
            value={inputValue}
            onChange={onInputChange}
            />
    </form>
  )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func
}

