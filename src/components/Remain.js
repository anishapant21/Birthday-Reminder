import React from 'react';
import List from './List';

const Remain = ({people}) => {
    people.map((person)=>{
        
        let dateMy = new Date(person.dob);
        const dateToday= new Date();
        const yearToday= dateToday.getFullYear();
        const miliSecDay= 24*60*60*1000;
        
        if (dateToday.getMonth() > dateMy.getMonth()){
            dateMy= new Date(yearToday+1, dateMy.getMonth(), dateMy.getDate())
        }else if (dateToday.getMonth()=== dateMy.getMonth() && dateToday.getDate()> dateMy.getDate()){
            dateMy= new Date(yearToday+1, dateMy.getMonth(), dateMy.getDate())
        } else {
            dateMy= new Date(yearToday, dateMy.getMonth(), dateMy.getDate())
        }
        const milRem= dateMy.getTime() - dateToday.getTime();
        const dayRem= parseInt(milRem/miliSecDay);
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
        ];
        const wishOn=`${monthNames[dateMy.getMonth()]} ${dateMy.getDate()}`
    
        
    
        person['dayRem'] = dayRem;
        person['wishOn']= wishOn;
       
    });
    const updatedData= people;



    return (
        <div>
           <List people={updatedData} /> 
        </div>
    );
}

export default Remain;


