import React from 'react'

const Footer = () => {
    return (
        <div className='mx-5 mb-3'>
            <hr />
            <div className='d-flex justify-content-between'>
                <div>
                    <h1 className='fs-3'>DAILYNEWS</h1>
                    <p className='fs-5'>Its a News watching app with all type of news for reading.</p>
                </div>
                <div className='icon d-flex gap-4 mx-2 mt-3'>
                    <i className="fa-brands fa-linkedin-in border border-warning"></i>
                    <i className="fa-brands fa-facebook-f border border-danger"></i>
                    <i className="fa-brands fa-instagram border border-primary"></i>
                    <i className="fa-brands fa-x-twitter border border-success"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
