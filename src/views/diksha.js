import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './diksha.css'

const Diksha = (props) => {
  return (
    <div className="diksha-container">
      <Helmet>
        <title>diksha - energyzoid Event Page</title>
        <meta property="og:title" content="diksha - energyzoid Event Page" />
      </Helmet>
      <div className="diksha-max-width">
        <img
          alt="logo"
          src="/playground_assets/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="diksha-image"
        />
        <div className="diksha-nav">
          <nav className="diksha-nav1">
            <Link to="/about1" className="diksha-navlink navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="diksha-link navigation-Link"
            >
              school
            </a>
            <Link to="/" id="going" className="diksha-navlink1 navigation-Link">
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="diksha-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="diksha-testimonial">
        <img
          alt="image"
          src="/playground_assets/1ce3e71f-97b2-4ac5-a28e-6cbec4cd731c-300w.jpeg"
          className="diksha-image1"
        />
        <div className="diksha-testimonial1">
          <div className="diksha-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="diksha-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="diksha-text">
            <span>
              Ms. Diksha Gupta is the teacher in-charge of the campaign
              “Conservation is the New Normal”  organized by the school. She is
              a hardworking teacher as she manages both curriculum and
              encourages students to go beyond the curriculum and learn
              something different and start contributing to the society.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              She has pursued Master’s Degree in Science (M.Sc.) in
              Biotechnology and Bachelors of Education (B.Ed.) and researched on
              fungus strains in Institute of Microbial Technology (CSIR-IMTech)
              Chandigarh.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <br></br>
            <span>
              She is currently teaching in DAV Noida since 2014 as TGT Science
              teacher and doing her work extraordinarily.
            </span>
            <br></br>
            <br></br>
          </span>
          <div className="diksha-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="diksha-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="diksha-text10">
          <span>diksha gupta</span>
          <br></br>
          <br></br>
        </span>
        <span className="diksha-text14">
          <span>tgt</span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="diksha-footer">
        <div className="diksha-container3">
          <img
            alt="logo"
            src="/playground_assets/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="diksha-image2"
          />
          <nav className="diksha-nav2">
            <Link to="/about1" className="diksha-navlink2">
              About
            </Link>
            <Link to="/" className="diksha-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <span className="diksha-text20">
              <span>email</span>
              <br></br>
            </span>
          </nav>
        </div>
        <div className="diksha-separator"></div>
        <div className="diksha-container4">
          <span className="diksha-text23">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="diksha-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="diksha-link1"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="diksha-icon4"
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

export default Diksha
