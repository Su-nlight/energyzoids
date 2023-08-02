import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './siddhant.css'

const Siddhant = (props) => {
  return (
    <div className="siddhant-container">
      <Helmet>
        <title>siddhant - energyzoid Event Page</title>
        <meta property="og:title" content="siddhant - energyzoid Event Page" />
      </Helmet>
      <div className="siddhant-max-width">
        <img
          alt="logo"
          src="/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="siddhant-image"
        />
        <div className="siddhant-nav">
          <nav className="siddhant-nav1">
            <Link to="/about1" className="siddhant-navlink Navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="siddhant-link Navigation-Link"
            >
              school
            </a>
            <Link
              to="/"
              id="going"
              className="siddhant-navlink1 Navigation-Link"
            >
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="siddhant-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="siddhant-testimonial">
        <img
          alt="image"
          src="/speaker/76774aac-d292-4a98-b378-63ff2fa20cca-300w.jpeg"
          className="siddhant-image1"
        />
        <div className="siddhant-testimonial1">
          <div className="siddhant-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="siddhant-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="siddhant-text">
            <span>
              Siddhant Mehrotra is the Head of Conduction and Management Team in
              Energyzoid. He is very sincere and dedicated towards his tasks and
              projects and currently managing the event &quot;Conservation is
              the New Normal&apos;&apos;. He will be managing upcoming events
              and campaigns too. He had organized many rallies, Nukad Natak and
              social awareness campaigns earlier like for Swachh Bharat Abhiyan,
              Sustainable Development, Green School, Tree Plantation and many
              more. He even managed the short documentary on Covid-19.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <br></br>
          </span>
          <div className="siddhant-container2">
            <svg
              viewBox="0 0 950.8571428571428 1024"
              className="siddhant-icon2"
            >
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="siddhant-text05">
          <span className="siddhant-text06">siddhant mehrotra</span>
          <br></br>
          <br></br>
        </span>
        <span className="siddhant-text09">
          <span>head @ conduction and </span>
          <br></br>
          <span> management team</span>
          <br></br>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="siddhant-footer">
        <div className="siddhant-container3">
          <img
            alt="logo"
            src="/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="siddhant-image2"
          />
          <nav className="siddhant-nav2">
            <Link to="/about1" className="siddhant-navlink2">
              About
            </Link>
            <Link to="/" className="siddhant-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <a
              href="https://www.instagram.com/savvysid_/"
              target="_blank"
              rel="noreferrer noopener"
              className="siddhant-link1"
            >
              instagram
            </a>
          </nav>
        </div>
        <div className="siddhant-separator"></div>
        <div className="siddhant-container4">
          <span className="siddhant-text18">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="siddhant-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="siddhant-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="siddhant-icon4"
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

export default Siddhant
