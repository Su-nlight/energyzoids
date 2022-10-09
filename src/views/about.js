import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>about - energyzoid Event Page</title>
        <meta property="og:title" content="about - energyzoid Event Page" />
      </Helmet>
      <header data-role="Header" className="about-header">
        <div className="about-max-width">
          <img
            alt="logo"
            src="/playground_assets/img_20221008_155940_adobe_express%5B1%5D-200w.png"
            className="about-image"
          />
          <div className="about-nav">
            <nav className="about-nav1">
              <Link to="/about1" className="about-navlink navigation-Link">
                About
              </Link>
              <a
                href="https://davnoida.org/"
                target="_blank"
                rel="noreferrer noopener"
                className="about-link navigation-Link"
              >
                school
              </a>
              <Link
                to="/"
                id="going"
                className="about-navlink1 navigation-Link"
              >
                home
              </Link>
            </nav>
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="about-register button-primary button button-md"
            >
              Connect on Instagram
            </a>
          </div>
        </div>
      </header>
      <main className="about-main">
        <div className="about-hero">
          <div className="about-container1">
            <h1 className="about-text heading1">overview</h1>
            <span className="about-text01">
              <span>
                We have a limited quantity of non-renewable energy resources
                available on earth, it is very important to preserve energy from
                our current supply or to utilize renewable resources so that it
                is also available for future generations. Our School is running
                a campaign for Energy Conservation to sensitize everyone about
                it
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <h2 className="heading2 about-text05">
              <span>
                about our
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>school</span>
            </h2>
            <span className="about-text08">
              <span className="about-text09">
                One of the pioneers of Public School Education , established in
                the year 1985, Sarla Chopra DAV Centenary Public School stands
                apart in the galaxy of good public schools in NOIDA. It is
                affiliated to C.B.S.E upto +2 level and is under the direct
                control of DAV College Managing Committee, New Delhi.The motto
                of the school is to promote a well-balanced and holistic
                education based on “VEDIC CULTURE”.
              </span>
              <br></br>
              <span>
                SC DAV NOIDA has today, etched a name for itself not merely as
                an abode of learning but as an &quot; Sanctorum of wisdom&quot;
                ,for we are a school that believes that education lies beyond
                the textbook and the true learning comes from self enquiry and
                research, from discussion, from reading, and from encouraging
                the natural curiosity of young minds. We hone their talents,
                sculpt their inherent potentials, chisel their thinking prowess
                not through teaching but by facilitating. We lead them to the
                threshold of learning from where they grasp each lesson of life
                on their own and prove to be the true citizens of India.
              </span>
              <br></br>
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/71918457-10c6-4b98-8846-f21d6ba28309-1000w.jpeg"
            loading="eager"
            className="about-image1"
          />
        </div>
        <footer className="about-footer section-container">
          <div className="about-max-width1 max-content-container">
            <div className="about-bottom-container">
              <div className="about-left-side">
                <span className="about-text13">
                  <span>Let us all come together and play a part in </span>
                  <br></br>
                  <span>conservation of non renewable resources of </span>
                  <br></br>
                  <span>energy by simple means of creating general</span>
                  <br></br>
                  <span>awareness among all walks of life.</span>
                  <br></br>
                </span>
                <div className="about-social-media"></div>
                <div className="about-social-media1">
                  <span className="about-text22">Follow Energy-zoids</span>
                  <div className="about-container2">
                    <a
                      href="https://github.com/Su-nlight"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="about-link01"
                    >
                      <svg viewBox="0 0 1024 1024" className="about-icon">
                        <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/energy_zoid_._/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="about-link02"
                    >
                      <svg viewBox="0 0 1024 1024" className="about-icon02">
                        <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                        <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                        <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://davnoida.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="about-link03"
                    >
                      <svg viewBox="0 0 1024 1024" className="about-icon06">
                        <path d="M512 128l470 256v342h-86v-296l-384 210-470-256zM214 562l298 164 298-164v172l-298 162-298-162v-172z"></path>
                      </svg>
                    </a>
                    <a href="tel:+918383801326" className="about-link04">
                      <svg viewBox="0 0 1024 1024" className="about-icon08">
                        <path d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-links">
                <div className="about-container3">
                  <span className="about-text23">quick navigation</span>
                  <Link to="/" className="about-navlink2 footer-link">
                    <span>home</span>
                    <br></br>
                  </Link>
                  <a
                    href="mailto:scdav.energyzoid@gmail.com?subject= Register for new updates"
                    className="about-link05 footer-link"
                  >
                    <span>Register</span>
                    <br></br>
                  </a>
                  <a
                    href="https://goo.gl/maps/7vNHc9J5P9cDFoZF7"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-link06 footer-link"
                  >
                    Location
                  </a>
                </div>
                <div className="about-container4">
                  <span className="about-text28">Contact</span>
                  <a
                    href="mailto:scdav.energyzoids@gmail.com ?subject= "
                    className="about-link07 footer-link"
                  >
                    <span>contact us</span>
                    <br></br>
                  </a>
                  <a
                    href="https://www.buymeacoffee.com/energyzoids"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-link08 footer-link"
                  >
                    donate
                  </a>
                  <a
                    href="https://www.instagram.com/energy_zoid_._/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-link09 footer-link"
                  >
                    connect on instagram
                  </a>
                  <a
                    href="https://davnoida.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="about-link10 footer-link"
                  >
                    DAV NOIDA
                  </a>
                  <a href="#speakers" className="about-link11 footer-link">
                    <span>our speakers</span>
                    <br></br>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-copyright">
              <span className="about-text33">
                <span>.</span>
                <span>
                  © All rights reserved
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="about-text37">@</span>
                <a
                  href="https://www.instagram.com/energy_zoid_._/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="about-link12"
                >
                  energyzoids  and all it&apos;s speakers.
                </a>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default About
