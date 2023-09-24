import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">$VK$ Tiffin Service helps you by providing an online platform for reaching out to your customers. We help you to simplify operations, generate leads & handle customer relations easily. We enable you to make the use of latest technologies to plan, execute & grow your business to new heights. We understand the day to day problems of your kitchens and exist to solve them.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p style={{ fontFamily: 'var(--font-alt)', letterSpacing: '0.04em', color: 'var(--color-grey)', textAlign: 'justify', lineHeight: '28px' }}>$VK$ founder Deepanshu Saxena looks forward to Mondays, because of her favourite food in the tiffin box — a vegetarian cheese wrap along with tiifin.Her mother, a busy software professional in Pune, has tied up with Mumma’s Box, a tiffin service company that serves delicious meals for the child’s lunch box.The food is prepared from the freshest of ingredients </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
