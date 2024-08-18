import React, { useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import toast, { Toaster } from 'react-hot-toast';
import './CreateTemplateForm.css'; // Assuming you add the above CSS here

const CreateTemplateForm = () => {
    const [subject, setSubject] = useState("");
    const [body, setBody] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Subject:", subject);
        console.log("Body:", body);

        if (!body) {
            toast.error("Body is required");
            return;
        }

        try {
            await axios.post('http://localhost:8000/email/add-template', { subject, body });
            toast.success("Template created successfully!");
        } catch (error) {
            console.log(error);
            toast.error("Failed to create template");
        }
    };

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['link']
        ],
    };

    return (
        <div className="container mt-4">
            <Toaster position="top-center" />
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        style={{
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                            padding: "12px 20px",
                            fontSize: "18px"
                        }}
                    />
                </div>

                <div className="mb-4" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "0" }}>
                    <ReactQuill
                        value={body}
                        onChange={setBody}
                        placeholder="Compose your email..."
                        modules={modules}
                        style={{
                            borderRadius: "10px",
                            border: "1px solid #ccc",
                            padding: "10px",
                            minHeight: "200px",
                            fontSize: "16px"
                        }}
                    />
                </div>

                <div className="d-flex justify-content-end">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg"
                        style={{
                            borderRadius: "25px",
                            padding: "10px 30px",
                            fontSize: "18px"
                        }}
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTemplateForm;
