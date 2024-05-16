import React, { useState } from 'react';
import Layout from '../components/Layout';
import TemplateDropdown from '../components/TemplateDropdown';
import UsersDropdown from '../components/UsersDropdown';
import axios from 'axios';

const CampaignPage = () => {
    const [active, setActive] = useState([]);
    const [activeRecepients, setActiveRecepients] = useState([]);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [campaignName, setCampaignName] = useState('');

    const launchCampaign = async () => {
        setCampaignName('');
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleNameChange = (event) => {
        setCampaignName(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            await axios.post('http://localhost:8000/campaign/add-campaign', { campaign_name: campaignName });
            console.log(campaignName);
            for (const a of active) {
                for (const r of activeRecepients) {
                    console.log('Sending email to:', r);
                    const send = await axios.post('http://localhost:8000/email/send-this-mail', { recepient: r, subject: a.subject, body: a.body, campaignName, template: a });
                    console.log('Email sent:', send);
                }
            }
            closePopup(); // Close popup after sending emails
        } catch (error) {
            console.log('Error sending emails:', error);
        }
    };

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
                        <button type="button" className="btn btn-primary btn-lg" onClick={launchCampaign}>Launch Campaign</button>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>Enter Campaign Name</h2>
                        <input type="text" value={campaignName} onChange={handleNameChange} />
                        <button onClick={handleSubmit}>Submit</button>
                        <button onClick={closePopup}>Cancel</button>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default CampaignPage;
