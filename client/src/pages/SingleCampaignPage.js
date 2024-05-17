import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import CampaignsList from '../components/CampaignsList';
import axios from 'axios';
import BarChart from '../components/BarChart';


const SingleCampaignPage = () => {
    const { name } = useParams();
    const [total, setTotal] = useState();
    const [open, setOpen] = useState();
    const [click, setClick] = useState();
    const [templates, setTemplates] = useState([]);
    const [openData, setOpenData] = useState([]);
    const [clickData, setClickData] = useState([]);
    const [labels, setLabels] = useState([]);

    const getTotal = async () => {
        try {
            const res = await axios.post('http://localhost:8000/analytics/get-total', { name });
            setTotal(res.data.count);
        } catch (error) {
            console.log(error);
        }
    }

    const getOpen = async () => {
        try {
            const res = await axios.post('http://localhost:8000/analytics/get-open', { name });
            setOpen(res.data.count);
        } catch (error) {
            console.log(error);
        }
    }

    const getClick = async () => {
        try {
            const res = await axios.post('http://localhost:8000/analytics/get-click', { name });
            setClick(res.data.count);
        } catch (error) {
            console.log(error);
        }
    }

    const getTemplates = async () => {
        try {
            const res = await axios.post('http://localhost:8000/analytics/get-campaign-templates', { name });
            // console.log(res.data.campaignTemplates);
            setTemplates(res.data.campaignTemplates);
        } catch (error) {
            console.log(error);
        }
    }

    const getFun = async () => {
        const res = await axios.post('http://localhost:8000/analytics/get-campaign-templates', { name });
        const temps = res.data.campaignTemplates;
        // console.log(temps);
        const res2 = await axios.post('http://localhost:8000/analytics/get-using-campaign-template', { campaign_name: name, templates: temps });
        const { data1, data2, labelss } = res2.data;
        setLabels(labelss);
        setClickData(data2);
        setOpenData(data1);
    }

    useEffect(() => {
        getTotal();
        getOpen();
        getClick();
        getTemplates();
        getFun();
    }, [name])

    return (
        <Layout>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3 pt-5 me-5 ms-0'>
                        <CampaignsList />
                    </div>
                    <div className='col-md-8 pt-5 mt-2'>
                        <h1>{name}</h1>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Total Mails</h5>
                                    <p className="card-text">{total}</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Open Rate</h5>
                                    <p className="card-text">{(total !== 0) ? 100.0 * open / total : 0}%</p>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Click Rate</h5>
                                    <p className="card-text">{(total !== 0) ? 100.0 * click / total : 0}%</p>
                                </div>
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-3 mt-5'>
                                <ul class="list-group list-group-flush">
                                    {
                                        templates.map((t, index) => {
                                            return (
                                                <li className="list-group-item">
                                                    <div className="d-flex w-100 justify-content-between ">
                                                        <h5 className="mb-1">{String.fromCharCode(65 + index)}</h5>
                                                    </div>
                                                    <p className="mb-1">{t.subject.slice(0, 20)}...</p>
                                                    <small>{t.body.slice(0, 100)}...</small>
                                                </li>
                                            )
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className='col-md-8 '>
                            <BarChart dataa1={openData} dataa2={clickData} labelss={labels} />
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    )
}

export default SingleCampaignPage
