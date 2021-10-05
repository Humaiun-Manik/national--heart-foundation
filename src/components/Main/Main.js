import React, { useEffect, useState } from 'react';
import './Main.css';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';

const Main = () => {
    const [doctors, setDoctors] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./doctorsData.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    const handleAddToCart = doctor => {
        const index = cart.indexOf(doctor);
        if (index === -1) {
            const newDoctor = [...cart, doctor];
            setCart(newDoctor);
        } else {
            alert('Already Selected');
        }

    }

    return (
        <div className='main-container'>
            <div className='doctors-container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.map(doctor => <Doctor
                            key={doctor.id}
                            doctor={doctor}
                            handleAddToCart={handleAddToCart}
                        >
                        </Doctor>)
                    }
                </div>
            </div>
            <Cart cart={cart}>

            </Cart>
        </div>
    );
};

export default Main;