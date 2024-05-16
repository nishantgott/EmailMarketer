import React from 'react'
import Layout from '../components/Layout'
import CampaignsList from '../components/CampaignsList'

const AnalyticsPage = () => {
    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pt-5'>
                        <CampaignsList />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AnalyticsPage
