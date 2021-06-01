import React from 'react';
import ListItem from './ListItem'


const List = ({people})=>{
    console.log(people);
   const renderedList= people.map((person) => {
    const {id, name, dayRem, image, wishOn} = person;

        return <ListItem id={id} name={name} dayRem={dayRem} image={image} wishOn={wishOn} />
    })

    return (
        <div>
            {renderedList}

        </div>
        
       
    );

};

export default List;



