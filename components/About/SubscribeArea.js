import React from 'react'

const SubscribeArea = () => {
  return (
    <div className="subscribe-area pb-100">
    <div className="container">
        <div className="section-title-3 text-center mb-55" data-aos="fade-up" data-aos-delay="200">
            <h2>Join With Us!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit seddo eiusmod tempor incididunt ut labore </p>
        </div>
        <div className="row">
            <div className="col-lg-8 offset-lg-2">
                <div id="mc_embed_signup" className="subscribe-form" data-aos="fade-up" data-aos-delay="400">
                    <form id="mc-embedded-subscribe-form" className="validate subscribe-form-style" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="https://devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&amp;id=05d85f18ef">
                        <div id="mc_embed_signup_scroll" className="mc-form">
                            <input className="email" type="email" required="" placeholder="Email address…" name="EMAIL" value=""/>
                            <div className="mc-news" aria-hidden="true">
                                <input type="text" value="" tabIndex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef"/>
                            </div>
                            <div className="clear">
                                <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" value="Subscribe Now"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default SubscribeArea