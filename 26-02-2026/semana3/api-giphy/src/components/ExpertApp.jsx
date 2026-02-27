import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const ExpertApp = () => {
    const [categories, setCategories] = useState([ 'Rango' ]);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    }
    return(
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewCategory={ (value) => onAddCategory(value) }/>
                {
                    categories.map(( category ) => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
        </>
    )
}