import React from 'react';
import style from './Footer.module.css';


function Footer() {
  return (
    <div className={style.footercontainer}>
      <section className={style.footersubscription}>
        <p className={style.footersubscriptionheading}>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className={style.footersubscriptiontext}>
          Enter your email to unlock 10% OFF.
        </p>
        <div className={style.inputareas}>
          <form>
            <input
              className={style.footerinput}
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <button className={style.btns}>Subscribe</button>
          </form>
        </div>
      </section>
      <div className={style.footerlinks}>
        <div className={style.footerlinkwrapper}>
          <div className={style.footerlinkitems}>
            <h2>About Us</h2>
            <a href='#'>How it works</a>
            <a href='#'>Testimonials</a>
            <a href='#'>Careers</a>
            <a href='#'>Investors</a>
            <a href='#'>Terms of Service</a>
          </div>
          <div className={style.footerlinkitems}>
            <h2>Contact Us</h2>
            <a href='#'>Contact</a>
            <a href='#'>Support</a>
            <a href='#'>Destinations</a>
            <a href='#'>Sponsorships</a>
          </div>
        </div>
        <div className={style.footerlinkwrapper}>
          <div className={style.footerlinkitems}>
            <h2>Videos</h2>
            <a href='#'>Submit Video</a>
            <a href='#'>Ambassadors</a>
            <a href='#'>Agency</a>
            <a href='#'>Influencer</a>
          </div>
          <div className={style.footersocial}>
            <h2>Follow us</h2>
            <a href='#'><i class="fab fa-twitter"></i></a>
            <a href='#'><i class="fab fa-facebook-f"></i></a>
            <a href='#'><i class="fab fa-instagram"></i></a>
            <a href='#'><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      </div>
  );
}

export default Footer;