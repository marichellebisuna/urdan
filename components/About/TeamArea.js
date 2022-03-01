import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const TeamArea = () => {
  return (
    <div className="team-area pt-100 pb-100">
    <div className="container">
        <div className="section-title-2 st-border-center text-center mb-75" data-aos="fade-up" data-aos-delay="200">
            <h2>Our Staff</h2>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="single-team-wrap text-center mb-30 " data-aos="fade-up" data-aos-delay="200">
                    <Image src="/assets/images/team/team-1.png" alt="" width={370} height={370}/>
                    <div className="team-info-position">
                        <div className="team-info">
                            <h3>Kari Rasmus</h3>
                            <span>Sales Man</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="single-team-wrap text-center mb-30" data-aos="fade-up" data-aos-delay="400">
                    <Image src="/assets/images/team/team-2.png" alt=""width={370} height={370}/>
                    <div className="team-info-position">
                        <div className="team-info">
                            <h3>Kari Rasmus</h3>
                            <span>Sales Man</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="single-team-wrap text-center mb-30" data-aos="fade-up" data-aos-delay="600">
                    <Image src="/assets/images/team/team-3.png" alt="" width={370} height={370}/>
                    <div className="team-info-position">
                        <div className="team-info">
                            <h3>Kari Rasmus</h3>
                            <span>Sales Man</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default TeamArea