import React, { useState } from 'react';
import List from './components/List';
import data from './data/data';

const App = () =>{
    const [people, setPeople]=useState(data);
    return (
        <main>
            <div className="ui container">
            <div className="ui raised link blue centered card">
                <div className="content">
                <h3><u>{people.length} birthdays left </u></h3>
                <List people={people} />
                <button className="ui button" onClick={()=>setPeople([])}> Clear all </button>

                </div>
                
            </div>

        </div>
            
        </main>
        
    );
};

export default App;