import React from 'react'

const ContactForm = () => {
  return (
    <div className="contact-form-area pt-90 pb-100">
    <div className="container">
        <div className="section-title-4 text-center mb-55" data-aos="fade-up" data-aos-delay="200">
            <h2>Ask Us Anything Here</h2>
        </div>
        <div className="contact-form-wrap" data-aos="fade-up" data-aos-delay="200">
            <form className="contact-form-style" id="contact-form" action="assets/php/mail.php" method="post">
                <div className="row">
                    <div className="col-lg-4">
                        <input name="name" type="text" placeholder="Name*"/>
                        <input name="email" type="email" placeholder="Email*"/>
                        <input name="subject" type="text" placeholder="Subject*"/>
                        <input name="phone" type="text" placeholder="Phone*"/>
                    </div>
                    <div className="col-lg-8">
                        <textarea name="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-lg-12 col-md-12 col-12 contact-us-btn btn-hover">
                        <button className="submit" type="submit">Send Message</button>
                    </div>
                </div>
            </form>
            <p className="form-messege"></p>
        </div>
    </div>
</div>
  )
}

export default ContactForm