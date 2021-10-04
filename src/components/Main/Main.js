import React, { useEffect, useState } from 'react';
import './Main.css';
import Cart from '../Cart/Cart';
import Doctor from '../Doctor/Doctor';
// import DoctorsData from '../../../public/doctorsData.JSON';

const Main = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctorsData.JSON')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className='main-container'>
            <div className='doctors-container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)
                    }
                </div>
            </div>
            <Cart></Cart>
        </div>
    );
};

export default Main;