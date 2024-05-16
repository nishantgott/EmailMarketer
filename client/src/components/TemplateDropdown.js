import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const TemplateDropdown = ({ active, setActive }) => {
    const [templates, setTemplates] = useState([]);

    const getAllTemplates = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/email/get-all-templates');
            const { templates } = data;
            console.log(templates);
            setTemplates(templates);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllTemplates();
    }, [])

    const handleCheckboxChange = async (e, template) => {
        console.log(template);
        const { checked } = e.target;
        console.log(checked);
        console.log(active);
        if (checked) {
            setActive([...active, template])
        }
        else {
            const newArray = active.filter(element => element._id !== template._id);
            setActive(newArray);
        }
    }

    return (
        <div>
            <h2 className='mb-5'>Select templates</h2>
            <div className="btn-group-vertical mb-5" role="group" aria-label="Basic checkbox toggle button group">
                {
                    templates.map((t, index) => {
                        return (
                            <div key={t._id}>
                                <input type="checkbox" className="btn-check" id={t._id} autoComplete="off" onChange={(e) => handleCheckboxChange(e, t)} />

                                <label className="d-flex w-100 justify-content-between btn btn-outline-primary mt-2" htmlFor={t._id} style={{ width: "300px", height: "100px" }}>
                                    <h5 className="mb-1">{String.fromCharCode(65 + index)}</h5>
                                    <div>
                                        <p className="mb-1">{t.subject}</p>
                                        <small>{t.body.slice(0, 100)}...</small>
                                    </div>
                                </label>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}

export default TemplateDropdown;
