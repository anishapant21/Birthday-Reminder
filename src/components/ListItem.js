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