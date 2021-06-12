import React, { useState } from 'react';
import data from './data/data';
import Remain from './components/Remain';
import AddNew from './components/AddNew';


const App = () =>{
    const [people, setPeople]=useState(data);
    const [all, setAll] =useState(false);
    const [buttonExist, setButtonExist] = useState(true)
    const [addNew, setAddNew] = useState(false);
    const [button, setButton] = useState('all');
    const [addNewButton, setAddNewButton] = useState('true');
    const changedIam = () => {
        setAll(!all);
        if (all){
            setButton('all')
        } else {
            setButton('upcoming')
        }
        <Remain people={people} all={all} />
        
    }
    const buttonMe=()=>{
        changedIam();
        setAddNew(false);
    }
    
    const removeButton = () => {
        if (buttonExist){
            return (
                <button className="ui red right floated basic button" onClick={()=>buttonMe()}> 
                    Show {button} Birthdays </button>

            );
        }
    };

    const addButton = () => {
        if(!addNew){
            return(
                <button className='button' onClick={()=>setAddNew(true)}>
                    Add New
                </button>

            )
        }
    }

    if (addNew === true){
        var renderElement = <AddNew />
    } else{
        var renderElement= <Remain people={people} all={all} />
    }

    const addNewBirthday = () => {
        console.log("add new");
        <AddNew />
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
                
        
                {renderElement}
                {addButton()}
                
            
                
                {/*<button className="button"
                 onClick={()=> {
                     setButtonExist(false)
                     setPeople([])
                     } }> Clear all </button> */}
                </div>  
            </div>  
        </main>
        
    );
};

export default App;


