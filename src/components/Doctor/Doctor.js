import React from 'react';
import './Doctor.css'

const Doctor = (props) => {
    const { name, age, address, email, salary, img } = props.doctor;
    return (
        // doctor info
        <div className="col">
            <div className="card pt-4">
                <div className='doctor-img'>
                    <img src={img} className="card-img-top shadow-lg mb-3 bg-body" alt="..." />
                </div>
                <div className="card-body doctor-info">
                    <h4>{name}</h4>
                    <h6>Age: <span>{age}</span></h6>
                    <h6>E-mail: <span>{email}</span></h6>
                    <h6>Address: <span>{address}</span></h6>
                    <h6>Salary: <span>{salary}</span></h6>
                    <button onClick={() => props.handleAddToCart(props.doctor)} className='select-btn'><i class="fas fa-cart-plus"></i> Select To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Doctor;