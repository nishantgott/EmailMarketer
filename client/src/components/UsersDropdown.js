import React from 'react'

const UsersDropdown = ({ activeRecepients, setActiveRecepients }) => {
    const recepients = ["nishantgk2004@gmail.com", "nishanthg2004@gmail.com", "nikhilag10299@gmail.com", "madhavigke@gmail.com"];

    const handleRecChange = async (e, recepient) => {
        console.log(e)
        console.log(recepient);
        const { checked } = e.target;
        console.log(checked);
        console.log(activeRecepients);
        if (checked) {
            setActiveRecepients([...activeRecepients, recepient])
        }
        else {
            const newArray = activeRecepients.filter(element => element !== recepient);
            setActiveRecepients(newArray);
        }
    }

    return (
        <div>
            <h2 className='mb-5'>Select Recepients</h2>
            <div className="btn-group-vertical mb-5" role="group" aria-label="Basic checkbox toggle button group">
                {
                    recepients.map((r, index) => {
                        return (
                            <div key={index}>
                                <input type="checkbox" className="btn-check" id={r} autoComplete="off" onChange={(e) => handleRecChange(e, r)} />

                                <label className="d-flex w-100 justify-content-between btn btn-outline-primary mt-2" htmlFor={r} style={{ width: "300px", height: "100px" }}>
                                    <h5 className="mb-1">{r}</h5>
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default UsersDropdown
