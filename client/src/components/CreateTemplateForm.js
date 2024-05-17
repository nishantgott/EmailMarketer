import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const CreateTemplateForm = () => {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        try {
            console.log(subject);
            console.log(body);
            const template = await axios.post('http://localhost:8000/email/add-template', { subject, body });
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label" >Subject</label>
                    <div className="col-md-8">
                        <input type="text" className="form-control" id="inputEmail3" onChange={(e) => setSubject(e.target.value)} value={subject} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Body</label>
                    <div className="col-md-8">
                        <textarea className="form-control" id="inputPassword3" rows="14" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                    </div>
                </div>

                <div className="row mb-3 justify-content-center">
                    <button type="submit" className="col-md-2 btn btn-primary" onClick={(e) => handleSubmit(e)}>Create</button>
                </div>
            </form >
        </div >
    );
};

export default CreateTemplateForm;
