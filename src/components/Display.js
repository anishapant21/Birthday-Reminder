import React, { useEffect, useState } from 'react';
import data from '../data/data';
import Remain from './Remain';
import AddNew from './AddNew';



const Display = ({dataNew}) =>{
    console.log(dataNew);
    const [dataNewMe, setDataNewMe]=useState({});

    

    useEffect(()=>{
        dataNew? setDataCall() : console.log("error");
        function setDataCall(){
                console.log("yeahhhh baby")
                setDataNewMe(dataNew)

        }

    })
    console.log("I am new data",dataNewMe)

   
  

    const [people, setPeople]=useState(data);
    const [all, setAll] =useState(false);
    const [buttonExist, setButtonExist] = useState(true)
    const [addNew, setAddNew] = useState(false);
    const [button, setButton] = useState('all');
    const [addNewButton, setAddNewButton] = useState('true');



    const dataToSend={
        id: people.length +1,
        name: `${dataNewMe.firstName} ${dataNewMe.lastName}`,
        dob: `${dataNewMe.year}/${dataNewMe.month}/${dataNewMe.day}`,
        image: dataNewMe.image
    }

    console.log(dataToSend)
    console.log(people)

    people.push(dataToSend)
    console.log(people)


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
                
                </div>  
            </div>  
        </main>
        
    );
};

export default Display;
