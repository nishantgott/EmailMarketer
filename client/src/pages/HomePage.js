import React from 'react'
import Layout from '../components/Layout'
import TemplateList from '../components/TemplateList'

const HomePage = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 pt-5'>
            <TemplateList />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage
