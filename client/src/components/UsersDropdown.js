import React from 'react';

const UsersDropdown = ({ activeRecepients, setActiveRecepients }) => {
    const recepients = ["nishantgk2004@gmail.com", "nishanthg2004@gmail.com", "nikhilag10299@gmail.com", "madhavigke@gmail.com"];

    const handleRecChange = async (e, recepient) => {
        const { checked } = e.target;
        if (checked) {
            setActiveRecepients([...activeRecepients, recepient]);
        } else {
            const newArray = activeRecepients.filter(element => element !== recepient);
            setActiveRecepients(newArray);
        }
    };

    return (
        <div className="users-dropdown">
            <div className="btn-group-vertical mb-5" role="group" aria-label="Basic checkbox toggle button group">
                {recepients.map((r, index) => (
                    <div key={index} className="user-box">
                        <input type="checkbox" className="btn-check" id={r} autoComplete="off" onChange={(e) => handleRecChange(e, r)} />
                        <label className="btn btn-outline-primary" htmlFor={r}>
                            <h5 className="mb-1">{r}</h5>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UsersDropdown;
