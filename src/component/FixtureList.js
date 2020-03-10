import React from 'react'
import Fixture from './Fixture'



const FixtureList = ({fixtures}) => {
    
    return(
        <div>
            {
                fixtures.map((data,i) => 
                (
                     <Fixture fixture={data} key={i}/>
                )
                )
            }
        </div>
    )
}

export default FixtureList