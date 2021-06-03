import React, { useState } from 'react';
import data from './data/data';
import Remain from './components/Remain';


const App = () =>{
    const [people, setPeople]=useState(data);
    const [all, setAll] =useState(false);
    const [buttonExist, setButtonExist] = useState(true)
    const [button, setButton] = useState('all')
    const changedIam = () => {
        setAll(!all);
        if (all){
            setButton('all')
        } else {
            setButton('upcoming')
        }
        <Remain people={people} all={all} />
    }
    
    const removeButton = () => {
        if (buttonExist){
            return (
                <button className="ui red right floated basic button" onClick={()=>changedIam()}> Show {button} Birthdays </button>

            );
        }
    }
    
    return (
        <main style={{paddingTop:'25px'}}>
            <div className="ui raised padded text fluid container segment">
                <div className="ui grid content">
                    <div className="ui two column row">
                        <div className="column">
                        </div>
                        <div className="column">
                            {removeButton()}
                        </div>
                    </div>
                
                    
                <Remain people={people} all={all} />
            

                <button className="button"
                 onClick={()=> {
                     setButtonExist(false)
                     setPeople([])
                     } }> Clear all </button>
                </div>  
            </div>  
        </main>
        
    );
};

export default App;


