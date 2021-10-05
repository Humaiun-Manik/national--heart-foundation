import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const selectedDoctors = props.cart;

    let total = 0;
    for (const selectedDoctor of selectedDoctors) {
        total = total + parseInt(selectedDoctor.salary);
    }

    const headleConfirm = () => alert('Thanks for Confirmation')

    return (
        <div className='select-doctor'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title"><span className='added-dctr'>Doctors added: </span>{selectedDoctors.length}</h5>
                    <h5 className="card-title"><span className='added-dctr'>Total Cost: </span>{total}</h5>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="..." className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={headleConfirm} className='confirm-btn'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;