import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({selects}) => {
    return (
        <div className='m-4 p-4'>
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {/* {selects.map(select=><p>{select}</p>)} */}
            {selects.map(select=><Cart select={select}></Cart>)}
        </div>
    );
};

export default Carts;