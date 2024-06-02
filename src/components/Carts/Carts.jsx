import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({selects,credits,prices,remaining}) => {
    return (
        <div className='m-4 p-4'>
            <h1 className='font-bold text-blue-600'>Credit Hour remaining:{remaining} </h1>
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {/* {selects.map(select=><p>{select}</p>)} */}
            {selects.map((select,idx)=><Cart select={select} key={idx}></Cart>)}
            <p className='font-bold'>Total Credit Hour: {credits}</p>
            <p className='font-bold'>Total prices: {prices} USD</p>
        </div>
    );
};

export default Carts;