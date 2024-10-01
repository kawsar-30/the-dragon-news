import React from 'react';

const BaComponents = ({category}) => {
    return (
        <div>
            
            <div className=' text-start ml-8 text-l rounded-md  w-3/4'> 
            {category.name}
           </div>
        </div>
    );
};

export default BaComponents;