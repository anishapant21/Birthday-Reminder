import React from 'react';

const List = ({people})=>{
    return (
        <>
        {people.map((person)=>{
            const {id, name, age, image} = person;

            return (
                <div key={id} className="ui content person">
                        <img src={image} alt="name"></img>
                    
                    <div>
                        <h4 className="left float">{name}</h4>
                        <p>{age} years </p>
            
                    </div>
                </div>
            
        );

        })}
        </>
    );

};

export default List;