import React from 'react';
import SelectedDoctor from '../SelectedDoctor/SelectedDoctor';
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

                    <div>
                        {
                            selectedDoctors.map(selectedDoctor => <SelectedDoctor
                                key={selectedDoctor.id}
                                doctorName={selectedDoctor.name}
                                doctorImg={selectedDoctor.img}
                            ></SelectedDoctor>)

                        }
                    </div>


                    <button onClick={headleConfirm} className='confirm-btn'>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;