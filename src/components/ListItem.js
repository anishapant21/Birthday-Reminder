import React from 'react';

const ListItem= ({id, image, dayRem, name, wishOn}) => {
    return (
        <div style={{paddingLeft: '125px'}}>
            <div  className="ui pink segment">
                <div className="ui two column very relaxed grid">
                    <div className="column">
                    <div key={id} className="ui content person">
                        <img src={image} alt="name"></img>
                    
                    <div>
                        <h4 className="left float">{name}</h4>
                        <p className="meta"> {dayRem} days left</p>
                    </div>
                </div>
                    </div>
                    <div className="content column">
                        Wish on {wishOn}
                    </div>
                    
                </div>
                </div>
        </div>
    );
}

export default ListItem;


{/* <div className="column">
<div class="field">

<select class="ui fluid search dropdown" name="card[expire-month]">
<option value="">Month</option>
<option value="1">January</option>
<option value="2">February</option>
<option value="3">March</option>
<option value="4">April</option>
<option value="5">May</option>
<option value="6">June</option>
<option value="7">July</option>
<option value="8">August</option>
<option value="9">September</option>
<option value="10">October</option>
<option value="11">November</option>
<option value="12">December</option>
</select>
</div>


</div> */}


{/* <div className="column">
                        <div className="ui three column grid">
                            <div className="column">
                            <div className="field">
                            <label>Year</label>
                            <input type="number" name="year" placeholder="year"></input>
                        </div>

                            </div>
                            <div className="column">
                            <div className="field">
                            <label>Year</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                        <option value="">Month</option>
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                        </div>

                            </div>
                            <div className="column">
                            <div className="field">
                            <label>Year</label>
                            <input type="number" name="year" placeholder="year"></input>
                        </div>
                

                        </div>
                        </div>
                        

                        </div> */}
