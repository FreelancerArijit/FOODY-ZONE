import React from 'react';
import Cards from './Cards';
import Button from './Button';

function Herosection(){
    return(
       <main>
        <div className="hero-section">
            <div className="hero-section-row">
            <Cards icon={"./images/boiled-eggs.png"} title="BOILED EGGS" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$10.00" />} />
            <Cards icon={"./images/ramen.png"} title="RAMEN" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$25.00" /> } />
            <Cards icon={"./images/grilled-chiken.png"} title="GRILLED CHIKEN" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$45.00" /> } />
        

            </div>

            <div className="hero-section-row">
            <Cards icon={"./images/cake.png"} title="CAKE" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$18.00" /> } />
            <Cards icon={"./images/burger.png"} title="BURGER" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$23.00" /> } />
            <Cards icon={"./images/pancake.png"} title="PANCAKE" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perspiciatis totam ducimus doloribus?" button={<Button text="$25.00" /> } />
        

            </div>
        </div>
       </main>
    )
}
export default Herosection;
