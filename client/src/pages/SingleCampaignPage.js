import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CampaignsList from '../components/CampaignsList';
import axios from 'axios';


const SingleCampaignPage = () => {
    const { name } = useParams();

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pt-5'>
                        <CampaignsList />
                    </div>
                    <div className='col-md-6 mx-4 pt-5'>
                        <h1>{name}</h1>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SingleCampaignPage
