import React from 'react'
import ContactBanner from '../Components/Elements/ContactBanner'

export const Contact = () => {
  return (
    <>
    <div className="container">
        <div className="row text-center">
            <div className="col-md-2"></div>
            <div className="col-md-8"><h1 className='fw-bolder contactHeading'>Get in touch with the Polkadot team</h1></div>
            <div className="col-md-2"></div>
        </div>
    </div>
    <ContactBanner/>

    </>
  )
}
