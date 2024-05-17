import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom';
import TemplateList from '../components/TemplateList';
import EditTemplateForm from '../components/EditTemplateForm';
import axios from 'axios';


const EditTemplatePage = () => {
    const { id } = useParams();
    const [template, setTemplate] = useState();

    const getTemplate = async () => {
        try {
            const res = await axios.post('http://localhost:8000/email/get-template', { id });
            console.log("hello", res);
            setTemplate(res.data.template);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTemplate();
    }, [id])

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pt-5'>
                        <TemplateList />
                    </div>
                    <div className='col-md-7 pt-5 mx-5 px-5'>
                        <EditTemplateForm template={template} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EditTemplatePage
