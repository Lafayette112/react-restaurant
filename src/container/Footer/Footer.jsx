import React from 'react';
import './Footer.css';

import { FooterOverlay, Newsletter } from '../../components';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';

const Footer = () => (
  <div className='app__footer section__padding'>

    <FooterOverlay />
    <Newsletter />

    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtext'>Contact Us</h1>
        <p className='p__opensans'>Brusselse Steenweg, 112, Waterloo 1410</p>
        <p className='p__opensans'>0486-000000</p>
        <p className='p__opensans'>0472-000000</p>
      </div>

      <div className='app__footer-links_logo'>
        <img src={images.gourmet} alt="footer_logo" />
        <p className='p__opensans'>"The best way to find yourself is to lose yourself in the service of others."</p>
        <img src={images.spoon} alt="spoon" className='spoon__img' style={{ marginTop: '15px' }} />
        <div className='app__footer-links_icons'>
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className='app__footer-links_work'>
        <h1 className='app__footer-headtext'>Working Hours</h1>
          <p className='p__opensans'>Monday - Friday:</p>
          <p className='p__opensans'>08:00 am - 12:00 am</p>
          <p className='p__opensans'>Saturday - Sunday:</p>
          <p className='p__opensans'>07:00 am - 11:00 pm</p>
      </div>

    </div>

    <div className='footer__copyright'>
      <p className='p__opensans'>2023 Gourmet - Design: Renan Kouadio</p>
    </div>

  </div>
);

export default Footer;
