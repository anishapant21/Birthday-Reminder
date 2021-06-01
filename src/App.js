import React, { useState } from 'react';
import data from './data/data';
import Remain from './components/Remain';

const App = () =>{
    const [people, setPeople]=useState(data);
    return (
        <main style={{paddingTop:'25px'}}>
            <div className="ui raised padded text fluid container segment">
                <div className="ui grid content">
                    <div class="ui two column row">
                        <div className="column">
                        <h3>{people.length} birthdays left </h3>
                        </div>
                        <div className="column">
                        <button className="ui red right floated basic button" onClick={()=>console.log('All Birthdays')}> All Birthdays </button>
                        </div>

                    </div>
                
                    
                <Remain people={people} />
            

                <button className="button" onClick={()=>setPeople([])}> Clear all </button>
                
                

                </div>
                
            </div>

        
            
        </main>
        
    );
};

export default App;


// {
//     id: 6,
//     name: 'Riya Joshi',
//     age: 24,
//     dob: '1994/04/05',
//     image:
//       'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
//   },
//   {
//     id: 7,
//     name: 'Ann Array',
//     age: 23,
//     dob: '1994/06/03',
//     image:
//       'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
//   },
//   {
//     id: 8,
//     name: 'Ryan Leigh',
//     age: 30,
//     dob: '1994/10/06',
//     image:
//       'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
//   },
//   {
//     id: 9,
//     name: 'Chris Evans',
//     age: 11,
//     dob: '1994/12/06',
//     image:
//       'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
//   },
  


