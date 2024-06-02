import React from 'react';

const Cart = ({select}) => {
    
    return (
        <div >
            <ol>
                <li className='text-gray-400'>{select}</li>
            </ol>
        </div>
    );
};

export default Cart;