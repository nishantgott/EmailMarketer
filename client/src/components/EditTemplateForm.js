import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS for the snow theme
import { toast } from 'react-hot-toast';

const EditTemplateForm = ({ template }) => {
    const [subject, setSubject] = useState(template?.subject || '');
    const [body, setBody] = useState(template?.body || '');

    useEffect(() => {
        if (template) {
            setSubject(template.subject || '');
            setBody(template.body || '');
        }
    }, [template]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Subject:", subject);
            console.log("Body:", body); // This will log the HTML content

            await axios.post('http://localhost:8000/email/edit-template', { id: template._id, subject, body });
            toast.success('Template Modified!');
        } catch (error) {
            console.log(error);
            toast.error('Failed to modify template');
        }
    }

    return (
        <div className="container mt-4">
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
                        modules={{
                            toolbar: [
                                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                                [{ size: [] }],
                                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                ['link'],
                            ],
                        }}
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
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTemplateForm;
