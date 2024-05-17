import React from 'react';
import Layout from '../components/Layout';
import TemplateList from '../components/TemplateList';
import CreateTemplateForm from '../components/CreateTemplateForm';
import './HomePage.css';

const HomePage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 pt-5'>
            <TemplateList />
          </div>
          <div className='col-md-8 pt-5'>
            <CreateTemplateForm />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
