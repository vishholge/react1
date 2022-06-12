import React  from 'react';
import GrandChildComponant from './GrandChildComponant1';

const ChildComponant = () => {
    return(
        
        <div className='ChildComponant'>
            <h2>My App</h2>
            <GrandChildComponant title= "Heading1" padding= "40px" borderRadius='5px' width='50%'/>
            <GrandChildComponant title= "Heading2" padding= "40px" borderRadius='20px' width='50%'/>
        </div>
    );
};
export default ChildComponant;
