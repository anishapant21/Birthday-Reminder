import React, { useEffect, useState } from 'react';
import data from '../data/data';
import Remain from './Remain';
import AddNew from './AddNew';
import { useHistory } from 'react-router-dom';
import { useLocation } from "react-router-dom";


const Display = () =>{
    const location= useLocation();
    
    const [people, setPeople] = useState(data);
    const [all, setAll] =useState(false);
    const [buttonExist, setButtonExist] = useState(true)
    const [addNew, setAddNew] = useState(false);
    const [button, setButton] = useState('all');
    const [dataToSendLog, setDataToSendLog] = useState({});

    // console.log(location.state)
    // !!!location.state.detail? console.log(location.state) : console.log("no data")
    useEffect(()=>{
        if (location.state){
            if (!location.state.detail){
                return;
            } else {
                console.log(location.state.detail)
                const dataToSend={
                                name: `${location.state.detail.firstName} ${location.state.detail.lastName}`,
                                dob: `${location.state.detail.year}/${location.state.detail.month}/${location.state.detail.day}`,
                                image: location.state.detail.image
                            }
                            console.log(dataToSend)
                            people.push(dataToSend)
                            setPeople(people)

                            
            }

        }
        

    })
    

    // useEffect(()=>{
    //     console.log("yes baby")
    //     !!!location? console.log(location.state.detail) : console.log("no data")
    //     function callMeOkay(){
    //         console.log("here I am")
    //         console.log(location.state.detail);
    //         

    //     }
        
    // })
    




    const history=useHistory();
    const callMeMaybe = () =>{
        history.push({
            pathname: "/addnew"
        })
    };


    const changedIam = () => {
        setAll(!all);
        if (all){
            setButton('all')
        } else {
            setButton('upcoming')
        }
        
    }
    const buttonMe=()=>{
        changedIam();
        setAddNew(false);
    }
    
  
    return (
        <main style={{paddingTop:'25px'}}>
            <div className="ui raised padded text fluid container segment">
                <div className="ui grid content">
                    <div className="ui two column row">
                        <div className="column">
                        </div>
                        <div className="column">
                        <button className="ui red right floated basic button" onClick={()=>buttonMe()}> 
                    Show {button} Birthdays </button>
                        </div>
                    </div>
                
        
                    <Remain dataGo={dataToSendLog} people={people} all={all} />
                <button onClick={callMeMaybe} className='button'>
                    Add New
                </button>
                
                </div>  
            </div>  
        </main>
        
    );
};

export default Display;
