import React from 'react';
import './SelectedDoctor.css';

const SelectedDoctor = (props) => {
    return (
        <div className="card mb-3">
            <div className="row g-0 selectedDoctor">
                <div className="col-md-4">
                    <img src={props.doctorImg} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8 close-btn">
                    <div className="card-body">
                        <h6 className="card-title"> {props.doctorName}</h6>
                    </div>
                    <button><i className="fas fa-times"></i></button>
                </div>
            </div>
        </div>
    );
};

export default SelectedDoctor;