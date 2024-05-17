import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TemplateDropdown = ({ active, setActive }) => {
    const [templates, setTemplates] = useState([]);

    const getAllTemplates = async () => {
        try {
            const { data } = await axios.get('http://localhost:8000/email/get-all-templates');
            const { templates } = data;
            setTemplates(templates);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllTemplates();
    }, []);

    const handleCheckboxChange = async (e, template) => {
        const { checked } = e.target;
        if (checked) {
            setActive([...active, template]);
        } else {
            const newArray = active.filter(element => element._id !== template._id);
            setActive(newArray);
        }
    };

    return (
        <div className="template-dropdown">
            <div className="btn-group-vertical mb-5" role="group" aria-label="Basic checkbox toggle button group">
                {templates.map((t, index) => (
                    <div key={t._id} className="template-box">
                        <input type="checkbox" className="btn-check" id={t._id} autoComplete="off" onChange={(e) => handleCheckboxChange(e, t)} />
                        <label className="btn btn-outline-primary" htmlFor={t._id}>
                            <h5 className="mb-1">{String.fromCharCode(65 + index)}</h5>
                            <div>
                                <p className="mb-1">{t.subject.slice(0, 40)}</p>
                                <small>{t.body.slice(0, 60)}...</small>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TemplateDropdown;
