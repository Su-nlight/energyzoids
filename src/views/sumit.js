import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Nav1 from '../components/nav1'
import './sumit.css'

const Sumit = (props) => {
  return (
    <div className="sumit-container">
      <Helmet>
        <title>sumit - energyzoid Event Page</title>
        <meta property="og:title" content="sumit - energyzoid Event Page" />
      </Helmet>
      <div className="sumit-max-width">
        <img
          alt="logo"
          src="/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="sumit-image"
        />
        <div className="sumit-nav">
          <nav className="sumit-nav1">
            <Link to="/about1" className="sumit-navlink Navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="sumit-link Navigation-Link"
            >
              school
            </a>
            <Link to="/" id="going" className="sumit-navlink1 Navigation-Link">
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="sumit-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="sumit-testimonial">
        <img
          alt="image"
          src="/speaker/1657d8c4-ffc7-49c7-86bd-1eed807e3f16-300w.jpeg"
          className="sumit-image1"
        />
        <div className="sumit-testimonial1">
          <div className="sumit-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="sumit-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="sumit-text">
            <span>
              Sumit Sharma is vice head and very active member of our event. His
              development team with his help did enacted the best plan to
              develop the whole site in just a matter of few days that too with
              the help of freshly prepared and original content provided by
              social media handling and media creation team.
            </span>
            <br></br>
            <br></br>
            <span>
              he did participated in many programmes and making various
              projects, like, eco friendly oven with electronic conponents for
              safety and failure lock features. he also developed many projects
              in the field of web and backend development.
            </span>
            <br></br>
            <br></br>
            <span>
              he is an active participant in techy project and events and has
              been in association with google&apos;s student programme, and few
              of local NGOs helping fight the environmental changes and nature
              conservations, one of them being dhauladhar cleaners situated in
              dharamshala, H.P. 
            </span>
            <br></br>
            <span> </span>
            <br></br>
            <br></br>
          </span>
          <div className="sumit-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="sumit-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="sumit-text12">
          <span>sumit sharma</span>
          <br></br>
          <br></br>
        </span>
        <span className="sumit-text16">
          <span>head @ development team</span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="sumit-footer">
        <div className="sumit-container3">
          <img
            alt="logo"
            src="/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="sumit-image2"
          />
          <div data-role="MobileMenu" className="sumit-mobile-menu">
            <div className="sumit-nav2">
              <div className="sumit-container4">
                <div
                  data-role="CloseMobileMenu"
                  className="sumit-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="sumit-icon4">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <Nav1 home="Home" about="About" school="School"></Nav1>
              <a
                href="mailto:scdav.energyzoids@gmail.com?subject= "
                className="sumit-register1 button-primary button button-md"
              >
                register
              </a>
            </div>
          </div>
          <nav className="sumit-nav3">
            <Link to="/about1" className="sumit-navlink2">
              About
            </Link>
            <Link to="/" className="sumit-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <a
              href="mailto:sumitsharmakaen@gmail.com?subject="
              className="sumit-link1"
            >
              <span>email</span>
              <br></br>
            </a>
          </nav>
        </div>
        <div className="sumit-separator"></div>
        <div className="sumit-container5">
          <span className="sumit-text24">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="sumit-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="sumit-link2"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="sumit-icon6">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Sumit
