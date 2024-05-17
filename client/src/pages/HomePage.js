import React from 'react'
import Layout from '../components/Layout'
import TemplateList from '../components/TemplateList'
import CreateTemplateForm from '../components/CreateTemplateForm'

const HomePage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 pt-5'>
            <TemplateList />
          </div>
          <div className='col-md-7 pt-5 mx-5 px-5'>
            <CreateTemplateForm />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
