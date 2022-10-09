import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Nav1 from '../components/nav1'
import './rohan.css'

const Rohan = (props) => {
  return (
    <div className="rohan-container">
      <Helmet>
        <title>rohan - energyzoid Event Page</title>
        <meta property="og:title" content="rohan - energyzoid Event Page" />
      </Helmet>
      <div className="rohan-max-width">
        <img
          alt="logo"
          src="/playground_assets/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="rohan-image"
        />
        <div className="rohan-nav">
          <nav className="rohan-nav1">
            <Link to="/about1" className="rohan-navlink navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="rohan-link navigation-Link"
            >
              school
            </a>
            <Link to="/" id="going" className="rohan-navlink1 navigation-Link">
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="rohan-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="rohan-testimonial">
        <img
          alt="image"
          src="/playground_assets/d46da0c8-516b-4338-8dad-958f01f365e5%5B1-300h.jpeg"
          className="rohan-image1"
        />
        <div className="rohan-testimonial1">
          <div className="rohan-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="rohan-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="rohan-text">
            <span>
              Rohan Kumar Sahu is the event head and a very active member of
              this event. His team got together to run a campaign against
              various environmental issues by putting their small efforts to
              overturn the downfall of Mother Nature and spread awareness among
              the masses so that they come along and take a pledge to create a
              better future for Mother Earth. He dedicatedly put his efforts to
              make this campaign successful by reaching the masses. His
              development and social media team did an astonishing job by
              joining their hands to make this campaign fruitful.
            </span>
            <br className="rohan-text02"></br>
            <br></br>
            <span>
              Rohan is in association with few other organisations like Climate
              Science, Britannica, WWF India, NWF, CSE (Centre for Science and
              Environment) India, The Nature Conservancy etc.
            </span>
            <br className="rohan-text05"></br>
            <br></br>
            <span>
              He also has been a part of some social awareness campaigns on
              Sustainable Development, Green School, COVID – 19, Waste to
              Wealth, Minimise Fossil Fuels, Global Warming, Kerala Floods etc.
            </span>
            <br></br>
          </span>
          <div className="rohan-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="rohan-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="rohan-text09">
          <span className="rohan-text10">rohan kumar sahu</span>
          <br></br>
          <span> </span>
          <br></br>
        </span>
        <span className="rohan-text14">
          <span>event head</span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="rohan-footer">
        <div className="rohan-container3">
          <img
            alt="logo"
            src="/playground_assets/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="rohan-image2"
          />
          <div data-type="MobileMenu" className="rohan-mobile-menu">
            <div className="rohan-nav2">
              <div className="rohan-container4">
                <div
                  data-type="CloseMobileMenu"
                  className="rohan-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="rohan-icon4">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <Nav1 home="Home" about="About" school="School"></Nav1>
              <a
                href="mailto:scdav.energyzoids@gmail.com?subject= "
                className="rohan-register1 button-primary button button-md"
              >
                register
              </a>
            </div>
          </div>
          <nav className="rohan-nav3">
            <Link to="/about1" className="rohan-navlink2">
              About
            </Link>
            <Link to="/" className="rohan-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <a
              href="https://www.instagram.com/_._.the_anonymous_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="rohan-link1"
            >
              instagram
            </a>
          </nav>
        </div>
        <div className="rohan-separator"></div>
        <div className="rohan-container5">
          <span className="rohan-text20">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="rohan-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="rohan-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="rohan-icon6">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Rohan
