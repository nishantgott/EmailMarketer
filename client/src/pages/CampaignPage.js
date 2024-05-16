import React, { useState } from 'react'
import Layout from '../components/Layout'
import TemplateDropdown from '../components/TemplateDropdown'
import UsersDropdown from '../components/UsersDropdown';
import axios from 'axios';

const CampaignPage = () => {
    const [active, setActive] = useState([]);
    const [activeRecepients, setActiveRecepients] = useState([]);

    const launchCampaign = async () => {
        console.log('button clicked');
        // await axios.post('http://localhost:8000/email/send-this-mail', { recepient: "nishantgk2004@gmail.com", subject: "dasfgagafdg", body: "gadfdaf" });
        try {
            for (const a of active) {
                for (const r of activeRecepients) {
                    console.log('here');
                    const send = await axios.post('http://localhost:8000/email/send-this-mail', { recepient: r, subject: a.subject, body: a.body });
                    console.log(send);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pt-5'>
                        <TemplateDropdown active={active} setActive={setActive} />
                    </div>
                    <div className='col-md-3 mx-5 pt-5'>
                        <UsersDropdown activeRecepients={activeRecepients} setActiveRecepients={setActiveRecepients} />
                    </div>
                    <div className='col-md-3 mx-5 d-flex align-items-center justify-content-center'>
                        <button type="button" className="btn btn-primary btn-lg" onClick={launchCampaign} >Launch Campaign</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CampaignPage;
