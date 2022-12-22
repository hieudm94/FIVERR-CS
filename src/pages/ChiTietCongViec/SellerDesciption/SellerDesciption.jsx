import React, { Fragment } from 'react'

export default function SellerDesciption(props) {
    const { item } = props
    return (
        <Fragment>
            <div className='seller-mota mt-5'>
                <h3>About This Gig</h3>
          
                <p className='mt-4'>{item.congViec.moTa}</p>
            </div>
            <div className='seller-motangan mt-4'>
                <p className='mt-4' style={{ fontWeight: 'bold',color: '#404145' }}>
                    Things I offer:
                </p>
                <p className='mt-4'>{item.congViec.moTaNgan}</p>
             
            </div>
            <hr />
            <div className='d-flex seller-performance'>

                <ul className='mr-5'>
                    <li>
                        <p>Programming Language</p>
              
                    </li>
                </ul>

                <ul>
                    <li>
                        <p>Expertlse</p>
                    </li>
                </ul>


            </div>
        </Fragment>
    )
}
