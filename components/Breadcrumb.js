import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Breadcrumb = ({title}) => {
  return (
    <div className="breadcrumb-area bg-gray-4 breadcrumb-padding-1">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <h2 data-aos="fade-up" data-aos-delay="200" className="text-capitalize">{title}</h2>
                    <ul data-aos="fade-up" data-aos-delay="400">
                        <li><Link href="/"><a >Home</a></Link></li>
                        <li><i className="ti-angle-right"></i></li>
                        <li className="text-capitalize">{title}</li>
                    </ul>
                </div>
            </div>
            <div className="breadcrumb-img-1">
                <Image src="/assets/images/banner/breadcrumb-1.png" alt="" width={375} height={251}/>
            </div>
            <div className="breadcrumb-img-2">
                <Image src="/assets/images/banner/breadcrumb-2.png" alt="" width={375} height={251}/>
            </div>
        </div>
  )
}

export default Breadcrumb