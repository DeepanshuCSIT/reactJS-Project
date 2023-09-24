import React from 'react';
import { FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer" id="login" style={{ padding: '5px 5px' }}>
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>Aligarh, UttarPradesh Pincode--202125, India</p>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>+91 8476**27**</p>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>+91 96**9**04*</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="footer_logo" />
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiLinkedin />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>Monday-Friday:</p>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>08:00 am - 12:00 am</p>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>Saturday-Sunday:</p>
        <p style={{ fontFamily: 'var(--font-alt)', color: 'var(--color-white)', fontWeight: '400', letterSpacing: '0.04em', lineHeight: '28px' }}>07:00 am - 11:00 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2022 $VK$ Aligarh-202125. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
