import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const CampaignsList = () => {
    const [currentCampaigns, setCurrentCampaigns] = useState([]);
    const navigate = useNavigate();

    const getCampaigns = async () => {
        try {
            const res = await axios.get('http://localhost:8000/campaign/get-campaigns');
            const { campaigns } = res.data;
            const campaignNames = campaigns.map(c => c.name);
            setCurrentCampaigns(campaignNames);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCampaigns();
    }, [])

    const handleDelete = async (name) => {
        try {
            await axios.delete(`http://localhost:8000/campaign/delete-campaign`, {
                data: { name }
            });
            getCampaigns();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2 className='mb-5'>Campaigns</h2>
            <div className="btn-group-vertical mb-5" role="group" aria-label="Basic checkbox toggle button group">
                <ul className="list-group">
                    {currentCampaigns.map((c, index) => (
                        <li className="list-group-item" key={index}>
                            <input className="form-check-input me-1" type="radio" name="listGroupRadio" defaultValue id={c} defaultChecked />
                            <label className="d-flex justify-content-between align-items-center btn btn-outline-primary mt-2" htmlFor={c} style={{ width: "300px", height: "100px" }} onClick={() => navigate(`/analytics/${c}`)}>
                                <h5 className="mb-1">{c}</h5>
                                <button type="button" className="btn btn-sm btn-danger" onClick={() => handleDelete(c)}>Delete</button>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CampaignsList
