import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='select-doctor'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><span className='added-dctr'>Doctors added:</span> 0</h5>
                    <h5 className="card-title"><span className='added-dctr'>Total Cost:</span> 0</h5>
                    <button className='confirm-btn'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;