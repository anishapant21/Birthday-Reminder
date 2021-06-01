import React from 'react';
import ListItem from './ListItem'


const ListFilter = ({people})=>{
    let count=0;
    const renderedList= people.map((person) => {
    let dateMy = new Date(person.dob);
    let dateToday= new Date();
       if (dateMy.getMonth()>dateToday.getMonth()){
           count+=1;
        const {id, name, dayRem, image, wishOn} = person;
        return <ListItem id={id} name={name} dayRem={dayRem} image={image} wishOn={wishOn} />

       }
    
    })

    return (
        <div>
             <div>
                <h3>{count} birthdays left</h3>
            </div>
            {renderedList}

        </div>
        
       
    );

};

export default ListFilter;

