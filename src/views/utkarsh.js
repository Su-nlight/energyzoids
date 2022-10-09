import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './utkarsh.css'

const Utkarsh = (props) => {
  return (
    <div className="utkarsh-container">
      <Helmet>
        <title>utkarsh - energyzoid Event Page</title>
        <meta property="og:title" content="utkarsh - energyzoid Event Page" />
      </Helmet>
      <div className="utkarsh-max-width">
        <img
          alt="logo"
          src="/playground_assets/img_20221008_155940_adobe_express%5B1%5D-200w.png"
          className="utkarsh-image"
        />
        <div className="utkarsh-nav">
          <nav className="utkarsh-nav1">
            <Link to="/about1" className="utkarsh-navlink navigation-Link">
              About
            </Link>
            <a
              href="https://davnoida.org/"
              target="_blank"
              rel="noreferrer noopener"
              className="utkarsh-link navigation-Link"
            >
              school
            </a>
            <Link
              to="/"
              id="going"
              className="utkarsh-navlink1 navigation-Link"
            >
              home
            </Link>
          </nav>
          <a
            href="https://www.instagram.com/energy_zoid_._/"
            target="_blank"
            rel="noreferrer noopener"
            className="utkarsh-register button-primary button button-md"
          >
            Connect on Instagram
          </a>
        </div>
      </div>
      <div className="utkarsh-testimonial">
        <img
          alt="image"
          src="/playground_assets/6e9b8eab-cef0-4aec-9183-e17ea1c67c7a1-300w.jpeg"
          className="utkarsh-image1"
        />
        <div className="utkarsh-testimonial1">
          <div className="utkarsh-container1">
            <svg viewBox="0 0 950.8571428571428 1024" className="utkarsh-icon">
              <path d="M438.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714zM950.857 548.571v219.429c0 60.571-49.143 109.714-109.714 109.714h-219.429c-60.571 0-109.714-49.143-109.714-109.714v-402.286c0-161.143 131.429-292.571 292.571-292.571h36.571c20 0 36.571 16.571 36.571 36.571v73.143c0 20-16.571 36.571-36.571 36.571h-36.571c-80.571 0-146.286 65.714-146.286 146.286v18.286c0 30.286 24.571 54.857 54.857 54.857h128c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
          <span className="utkarsh-text">
            <span>
              I am the head boy of our school. I am well disciplined . I am
              hardworking and very honest with my work. My mind is open to new
              ideas and creativity. I am fond of coding and love to explore it
              everyday
            </span>
            <br></br>
            <br></br>
            <br></br>
          </span>
          <div className="utkarsh-container2">
            <svg viewBox="0 0 950.8571428571428 1024" className="utkarsh-icon2">
              <path d="M438.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714zM950.857 182.857v402.286c0 161.143-131.429 292.571-292.571 292.571h-36.571c-20 0-36.571-16.571-36.571-36.571v-73.143c0-20 16.571-36.571 36.571-36.571h36.571c80.571 0 146.286-65.714 146.286-146.286v-18.286c0-30.286-24.571-54.857-54.857-54.857h-128c-60.571 0-109.714-49.143-109.714-109.714v-219.429c0-60.571 49.143-109.714 109.714-109.714h219.429c60.571 0 109.714 49.143 109.714 109.714z"></path>
            </svg>
          </div>
        </div>
        <span className="utkarsh-text05">
          <span>utkarsh singh</span>
          <br></br>
          <br></br>
        </span>
        <span className="utkarsh-text09">
          <span>co-head @ student council</span>
          <br></br>
          <br></br>
        </span>
      </div>
      <footer className="utkarsh-footer">
        <div className="utkarsh-container3">
          <img
            alt="logo"
            src="/playground_assets/copy%20of%20black%20and%20white%20typographic%20restaurant%20logo-200h.png"
            className="utkarsh-image2"
          />
          <nav className="utkarsh-nav2">
            <Link to="/about1" className="utkarsh-navlink2">
              About
            </Link>
            <Link to="/" className="utkarsh-navlink3">
              <span>home</span>
              <br></br>
            </Link>
            <a
              href="https://www.instagram.com/realutkarshh/"
              target="_blank"
              rel="noreferrer noopener"
              className="utkarsh-link1"
            >
              instagram
            </a>
          </nav>
        </div>
        <div className="utkarsh-separator"></div>
        <div className="utkarsh-container4">
          <span className="utkarsh-text15">
            © 2022 energyzoid, All Rights Reserved.
          </span>
          <div className="utkarsh-icon-group">
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="utkarsh-link2"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="utkarsh-icon4"
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

export default Utkarsh
