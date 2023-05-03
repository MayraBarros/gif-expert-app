import { useState } from "react";
import { AddCategory } from "./components/addCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ()=> {

 
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory  = (newCategory) =>{

        //si ya existe un nombre de categoria igual, no se agrega
        if( categories.includes(newCategory)) return;
       
        //Llamamos a la funcion que actualiza el estado de las categorias y le mandamos el nuevo valor que ha establecido el user
        setCategories([newCategory, ...categories])
    }


    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={onAddCategory} 
            />
            
           
                {categories.map( category =>{
                   return <GifGrid 
                        key={category}
                        category={category}
                    />
                })}
            
        </>
    ) 
}

export default GifExpertApp;