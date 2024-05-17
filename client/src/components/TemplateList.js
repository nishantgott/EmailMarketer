import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './TemplateList.css';

const TemplateList = () => {
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

    const handleDelete = async (id) => {
        try {
            console.log(id);
            const template = await axios.delete('http://localhost:8000/email/delete-template', { data: { id } });
            console.log(template);
            getAllTemplates();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllTemplates();
    }, [])

    return (
        <div className="template-list-wrapper">
            <Link to="/templates/create" className="btn btn-outline-primary my-3">Create Template</Link>
            <div className="list-group">
                {templates.map((t, index) => (
                    <NavLink to={`/templates/edit/${t._id}`} key={t._id} className="list-group-item list-group-item-action py-3" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{String.fromCharCode(65 + index)}</h5>
                            <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(t._id)}>Delete</button>
                        </div>
                        <p className="mb-1">{t.subject}</p>
                        <small>{t.body.slice(0, 100)}...</small>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default TemplateList;
