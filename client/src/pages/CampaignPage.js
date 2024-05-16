import React, { useState } from 'react'
import Layout from '../components/Layout'
import TemplateDropdown from '../components/TemplateDropdown'
import UsersDropdown from '../components/UsersDropdown';

const CampaignPage = () => {
    const [active, setActive] = useState([]);
    const [activeRecepients, setActiveRecepients] = useState([]);


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
                        <button type="button" className="btn btn-primary btn-lg">Launch Campaign</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default CampaignPage;
