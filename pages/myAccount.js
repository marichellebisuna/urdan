import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Link from 'next/link'
import Dashboard from '../components/MyAccount/Dashboard'
import Welcome from '../components/MyAccount/Welcome'
import Orders from '../components/MyAccount/Orders'
import Download from '../components/MyAccount/Download'
import PaymentMethod from '../components/MyAccount/PaymentMethod'
import Address from '../components/MyAccount/Address'
import AccountDetails from '../components/MyAccount/AccountDetails'

const myAccount = () => {
  return (
    <>
    <Breadcrumb title="my account"/>
    <div className="my-account-wrapper pb-100 pt-100">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">                    
                    <div className="myaccount-page-wrapper">                        
                        <div className="row">
                            <div className="col-lg-3 col-md-4">
                                <Dashboard/> 
                            </div>                            
                            <div className="col-lg-9 col-md-8">
                                <div className="tab-content" id="myaccountContent">
                                   
                                    <Welcome/>
                                    
                                    <Orders/>
                                    
                                    <Download/>
                                    
                                    <PaymentMethod/>
                                    
                                    <Address/>
                                    
                                    <AccountDetails/>
                                    
                                </div>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default myAccount