import React from 'react';

const AddNew = () => {
    return (
            <div>
                <div className="ui form">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                        <div className="field">
                        <label>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name">
                        </input>
                    </div>

                        </div>
                        <div className="column">
                        <div className="field">
                        <label>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name">
                        </input>
                    </div>

                    </div>
                   

                    
                        
                    
                    
                    
                    

                    </div>
                    
                   

                </div>
                <br />
                <div className="ui form">
                <div className="ui three column grid">
                            <div className="column">
                            <div className="field">
                            <label>Year</label>
                            <input type="number" name="year" placeholder="year"></input>
                        </div>

                            </div>
                            <div className="column">
                            <div className="field">
                            <label>Month</label>
                            <select class="ui fluid search dropdown" name="card[expire-month]">
                        
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
                            <label>Day</label>
                            <input type="number" name="year" placeholder="day"></input>
                        </div>
                

                        </div>
                        </div>
                </div>
                <br />
                <div className="ui form">
                    <div className="field">
                        <label>Image</label>
                        <input type="text" name="image" placeholder="image link"></input>
                    </div>
                </div>
                <button className='button'>
                    Submit
                </button>
    

            </div>
                
    );
};

export default AddNew;