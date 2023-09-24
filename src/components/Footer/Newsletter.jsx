import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="SignUp Form" />
      <h1 className="headtext__cormorant">Create your Account</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="Enter your full name" /><br /><br />
      <input type="number" placeholder="Enter your mobile number" /><br /><br />
      <input type="text" placeholder="Enter your full address" /><br /><br />
      <input type="email" placeholder="Enter your email address" /><br /><br /><br />
      <button type="button" className="custom__button">Submit</button>
    </div>
  </div>
);

export default Newsletter;
