import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img style={{ marginRight: '10px' }} src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">Food may be essential as fuel for the body, but good food is fuel for the soul.</p>
        </div>
        <br /><br />
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" style={{ width: '47px', height: '40px', margin: '1px 1rem 3rem 0' }} />
          <p className="p__opensans"> Good food is an amazing blessing. Whenever you can sit down at a table, eat food that is extremely delicious, and are surrounded by people you love it’s: Wow, life is good. </p>
          <div />
        </div>
      </div>
      <div className="app__chef-sign">
        <p>Deepanshu Saxena</p>
        <p className="p__opensans"> Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
