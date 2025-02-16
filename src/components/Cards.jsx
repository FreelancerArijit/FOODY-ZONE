import React from 'react';
import Button from './Button';

function Cards({icon, title,description, button}){
    return(
        <main>
          <div className="card">
            <div className="card-top">
                <div className="card-top-right">
                    <img src={icon} alt="logo" className="src" />
                </div>
                <div className="card-top-left">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="card-bottom">
              {button}
            </div>

          </div>
        </main>
    );
}
export default Cards;