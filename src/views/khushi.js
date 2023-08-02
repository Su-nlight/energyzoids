import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './khushi.css'

const Khushi = (props) => {
  return (
    <div className="khushi-container">
      <Helmet>
        <title>khushi - energyzoid Event Page</title>
        <meta property="og:title" content="khushi - energyzoid Event Page" />
      </Helmet>
      <div className="khushi-max-width">
        <img
          alt="logo"
          src="/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="khushi-image"
        />
        <div className="khushi-nav">
          <nav className="khushi-nav1">
            <Link to="/about1" className="khushi-navlink Navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="khushi-link Navigation-Link"
            >
              school
            </a>
            <Link to="/" id="going" className="khushi-navlink1 Navigation-Link">
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="khushi-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="khushi-testimonial">
        <img
          alt="image"
          src="/speaker/9e2970ce-6d65-48bc-a267-0b82abb157db-300w.jpeg"
          className="khushi-image1"
        />
        <div className="khushi-testimonial1">
          <div className="khushi-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="khushi-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="khushi-text">
            <span>
              Khushi sharma, the co head of the event is a significant part of
              the same. She actively worked with the team for the success of
              this campaign. She along with her team managed to affectively
              direct the attention of people towards the heated topic of nature
              degradation and spread awareness regarding the same.Her passion
              towards the betterment of environment helped the team striding
              forward and encouraged the masses to be a part of the campaign.
              She with the social media team worked hard and played a vital role
              in making this campaign a success.
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="khushi-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="khushi-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="khushi-text04">
          <span>khushi sharma</span>
          <br></br>
          <br></br>
        </span>
        <span className="khushi-text08">
          <span>co-head @ student council</span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="khushi-footer">
        <div className="khushi-container3">
          <img
            alt="logo"
            src="/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="khushi-image2"
          />
          <nav className="khushi-nav2">
            <Link to="/about1" className="khushi-navlink2">
              About
            </Link>
            <Link to="/" className="khushi-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <a
              href="https://www.instagram.com/khushishingh._/"
              target="_blank"
              rel="noreferrer noopener"
              className="khushi-link1"
            >
              instagram
            </a>
          </nav>
        </div>
        <div className="khushi-separator"></div>
        <div className="khushi-container4">
          <span className="khushi-text14">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="khushi-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="khushi-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="khushi-icon4"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Khushi
