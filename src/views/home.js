import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import EventCard from '../components/event-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>energyzoid Event Page</title>
        <meta property="og:title" content="energyzoid Event Page" />
      </Helmet>
      <header data-role="Header" className="home-header">
        <div className="home-max-width">
          <img
            alt="logo"
            src="/playground_assets/img_20221008_155940_adobe_express%5B1%5D-200w.png"
            className="home-image"
          />
          <div className="home-nav">
            <nav className="home-nav1">
              <Link to="/about1" className="home-navlink navigation-Link">
                About
              </Link>
              <a href="#speakers" className="home-link navigation-Link">
                speakers
              </a>
              <a
                href="#pastevents"
                id="going"
                className="home-link01 navigation-Link"
              >
                past events
              </a>
            </nav>
            <a
              href="https://www.instagram.com/energy_zoid_._/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-register button-primary button button-md"
            >
              Connect on Instagram
            </a>
          </div>
        </div>
      </header>
      <main className="home-main">
        <div className="home-hero section-container">
          <div className="home-max-width1 max-content-container">
            <div className="home-content-container">
              <h1 className="home-text heading1">
                <span className="heading1 home-text01">help protect the </span>
                <span className="home-text02 heading1">
                  roots
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text03">
                  of our
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text04 heading1">existence</span>
                <span className="heading1 home-text05"></span>
              </h1>
              <span className="home-text06">
                COnnect with us and let&apos;s grow this programme together.
              </span>
              <div className="home-btns-container">
                <a
                  href="https://www.buymeacoffee.com/energyzoids"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-primary button-primary button-lg button"
                >
                    contribute  
                </a>
                <a
                  href="mailto:scdav.energyzoids@gmail.com?subject= "
                  className="home-secondary button button-outline button-lg-border"
                >
                  Email  us
                </a>
              </div>
            </div>
            <div className="home-video-container">
              <video
                src="/playground_assets/vn20221002_190714.mp4"
                autoPlay
                className="home-video"
              ></video>
            </div>
          </div>
          <div className="home-blue-background"></div>
        </div>
        <div className="home-sponsors section-container">
          <div className="home-max-width2 max-content-container">
            <span className="home-text07">
              <span>best topics discussed</span>
              <span> by our speakers</span>
            </span>
            <div className="home-container01">
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.02%20am-200h.jpeg"
                loading="lazy"
                className="home-image1"
              />
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.03%20am%20%5B1%5D-300w.jpeg"
                loading="lazy"
                className="home-image2"
              />
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.03%20am-200h.jpeg"
                loading="lazy"
                className="home-image3"
              />
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.04%20am%20%5B1%5D-200h.jpeg"
                loading="lazy"
                className="home-image4"
              />
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.04%20am-200h.jpeg"
                loading="lazy"
                className="home-image5"
              />
              <img
                alt="image"
                src="/playground_assets/whatsapp%20image%202022-10-08%20at%201.49.05%20am-200h.jpeg"
                loading="lazy"
                className="home-image6"
              />
            </div>
          </div>
        </div>
        <div id="speakers" className="home-speakers section-container">
          <div id="members" className="home-max-width3 max-content-container">
            <div className="home-heading-container">
              <h1 className="home-text10 heading2">
                <span>meet our speakers</span>
                <span className="home-text12"></span>
              </h1>
            </div>
            <div className="home-speakers-container">
              <Link to="/rohan">
                <SpeakerCard
                  image_src="/playground_assets/d46da0c8-516b-4338-8dad-958f01f365e5%5B1-300h.jpeg"
                  className="home-component"
                ></SpeakerCard>
              </Link>
              <Link to="/sumit">
                <SpeakerCard
                  role="head @ Developer team"
                  lastName="Sharma"
                  firstName="Sumit"
                  image_src="/playground_assets/1657d8c4-ffc7-49c7-86bd-1eed807e3f16-300w.jpeg"
                  className="home-component01"
                ></SpeakerCard>
              </Link>
              <Link to="/utkarsh">
                <SpeakerCard
                  role="co-head @ student council"
                  lastName="singh"
                  firstName="utkarsh"
                  image_src="/playground_assets/6e9b8eab-cef0-4aec-9183-e17ea1c67c7a1-300w.jpeg"
                  className="home-component02"
                ></SpeakerCard>
              </Link>
              <Link to="/khushi">
                <SpeakerCard
                  role="co-head @ student council"
                  lastName="sharma"
                  firstName="khushi"
                  image_src="/playground_assets/9e2970ce-6d65-48bc-a267-0b82abb157db-300w.jpeg"
                  className="home-component03"
                ></SpeakerCard>
              </Link>
              <Link to="/vedika">
                <SpeakerCard
                  role="head @ creation team"
                  lastName="singh"
                  firstName="Vedika"
                  image_src="/playground_assets/300026849_5527720317271509_3996587808719397565_n-300h.jpeg"
                  className="home-component04"
                ></SpeakerCard>
              </Link>
              <Link to="/siddhant">
                <SpeakerCard
                  role="head @ conduction &amp; management team"
                  lastName="mehrotra"
                  firstName="siddhant"
                  image_src="/playground_assets/76774aac-d292-4a98-b378-63ff2fa20cca-300w.jpeg"
                  className="home-component05"
                ></SpeakerCard>
              </Link>
              <Link to="/diksha">
                <SpeakerCard
                  role="tgt"
                  lastName="gupta"
                  firstName="diksha"
                  image_src="/playground_assets/1ce3e71f-97b2-4ac5-a28e-6cbec4cd731c-300w.jpeg"
                  className="home-component06"
                ></SpeakerCard>
              </Link>
              <Link to="/pooja">
                <SpeakerCard
                  role="tgt"
                  lastName="khachi"
                  firstName="pooja"
                  image_src="/playground_assets/untitled%20design-300h.png"
                  className="home-component07"
                ></SpeakerCard>
              </Link>
            </div>
          </div>
        </div>
        <div className="home-numbers-banner section-container">
          <div className="home-container02 max-content-container">
            <div className="home-heading-container1">
              <span className="home-text13">
                Our events and campaigns held in 6 years...
              </span>
              <h1 className="home-text14 heading2">
                energyzoid SUMMIT IN NUMBERS
              </h1>
            </div>
            <div className="home-numbers-container">
              <NumbersCard text="discussions" number="22"></NumbersCard>
              <NumbersCard
                text="years"
                number="2"
                image_src="/playground_assets/interface%20time%20reset-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="total events"
                number="18"
                image_src="/playground_assets/interface%20calendar%20favorite-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="members"
                number="91"
                image_src="/playground_assets/shopping%20bag%20suit%20case-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="interschool events"
                number="4"
                image_src="/playground_assets/travel%20map%20location%20pin-200h.png"
              ></NumbersCard>
              <NumbersCard
                text="speakers"
                number="11"
                image_src="/playground_assets/computer%20voice%20mail-200h.png"
              ></NumbersCard>
            </div>
          </div>
        </div>
        <div className="home-location">
          <img
            alt="image"
            src="/playground_assets/ded45399-e2c3-4f2a-a2e0-49473e5c8baa-1000h.jpeg"
            className="home-image7"
          />
          <div className="home-content-container1 section-container">
            <div className="home-container03">
              <span className="home-text15">noida, sector - 56</span>
              <span className="home-text16">11 october 2022</span>
              <div className="home-container04">
                <span className="home-text17">
                  <span>— dav</span>
                  <br></br>
                  <span>school </span>
                </span>
                <span className="home-text21">
                  <span>    auditorium</span>
                  <br></br>
                </span>
              </div>
              <div className="home-container05">
                <span className="home-text24">
                  <span className="home-text25">open discussion</span>
                  <br className="home-text26"></br>
                  <span className="home-text27"> </span>
                  <br className="home-text28"></br>
                </span>
                <span className="home-text29">
                  Here the energyzoids offers each one of you an open platform
                  to showcase and share your views with the world and help us in
                  making a good difference for the generations ahead
                </span>
                <div className="home-btns-container1">
                  <a
                    href="mailto:scdav.energyzoids@gmail.com?subject= "
                    className="home-register1 button-secondary button button-md"
                  >
                    email us for more info
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-agenda section-container">
          <div
            id="pastevents"
            className="home-max-width4 max-content-container"
          >
            <div className="home-heading-container2">
              <h1 className="home-text30 heading2">past events held</h1>
              <span className="home-text31">
                List of events that have been organized in our school in the
                past years...
              </span>
            </div>
            <div className="home-events-container">
              <div className="home-column">
                <div className="home-column-header">
                  <div className="home-line"></div>
                </div>
                <EventCard
                  text="Tree Plantation Drives have been conducted in order to incorporate the sensitivity in students towards the nature and its benevolence."
                  title="tree plantation drives"
                  image_src="/playground_assets/whatsapp%20image%202022-10-07%20at%208.58.05%20pm%20%5B1%5D-200h.jpeg"
                ></EventCard>
                <EventCard
                  text="Multiple rallies that created awareness about environment degradation and methods to improve it."
                  title="Thoughtful rally"
                  image_src="/playground_assets/whatsapp%20image%202022-10-07%20at%208.58.05%20pm-200h.jpeg"
                ></EventCard>
                <EventCard
                  text="Students were given the opportunity to make the Best out of Waste. This helped us to create awareness among students."
                  title="zero waste zone"
                  image_src="/playground_assets/96ccbc7b-0166-4f7f-8832-5dc8efa7c4b7-200h.jpeg"
                ></EventCard>
                <EventCard
                  text="School projected workshop, like, handmade paper and pottery, to sensitize students the use of eco friendly goods."
                  title="anti pollution drives"
                  image_src="/playground_assets/630edf7f-1909-40a1-85d1-0ef4adfb8d8d-200h.jpeg"
                ></EventCard>
              </div>
              <div className="home-column1">
                <div className="home-column-header1">
                  <div className="home-line1"></div>
                </div>
                <EventCard
                  text="Donate Things and Gifts to ensure the 3R's to make the students realize that by practising the three ethics, both life and nature can get along simultaneously, without any risk. "
                  title="a small step"
                  image_src="/playground_assets/5b02b027-6c2c-48f0-9a2a-7437004edc73-200h.jpeg"
                ></EventCard>
                <EventCard
                  text='An local extension to the whole India&apos;s "Clean India" programme. '
                  title="Swachh Bharat Abhiyan"
                  image_src="/playground_assets/4a0b488e-12cb-4494-95ef-294c85c06abe-200h.jpeg"
                ></EventCard>
                <EventCard
                  text="Bio-Plastics are an effective way to enjoy the advantages of conventional plastics but mitigating their disadvantages."
                  title="Bio-Plastic"
                  image_src="/playground_assets/d00477c8-8dbd-486a-8232-ddd6ea3c8e8a-200w.jpeg"
                ></EventCard>
                <EventCard
                  text="Displays an important role in creating awareness among the people from all walks of life across the locality."
                  title="Street Plays"
                  image_src="/playground_assets/whatsapp%20image%202022-10-07%20at%208.58.05%20pm%20%5B2%5D-200h.jpeg"
                ></EventCard>
              </div>
            </div>
          </div>
        </div>
        <div className="home-workshops">
          <div className="home-content-container2">
            <div className="home-container06">
              <h1 className="home-text32">
                <span className="heading2">objective of our</span>
                <br className="heading2"></br>
                <span className="home-text35 heading2">campaign </span>
                <span className="heading2">and</span>
                <span className="home-text37">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text38 heading2">programme</span>
                <br className="heading2"></br>
              </h1>
              <span className="home-text40">
                Stimulated by means of the 1976 UNESCO Belgrade charter, the
                &quot;conservation is ordinary&quot; marketing campaign was
                introduced with the aim of environmental schooling to develop a
                world population that is aware and concerned about the
                environment and related issues, and that has the understanding,
                abilities, attitudes, motivation and determination to work
                individually and collectively to remedy current issues and
                prevent new ones. The primary purpose to be illuminated below
                the auspicious of this challenge is that individuals need to
                raise public awareness of environmental problems, discover
                possible answers, and lay the principles for fully knowledgeable
                and active participation of individuals in environmental
                protection and environmental protection. Really appropriate and
                rational use of natural resources.
              </span>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/71918457-10c6-4b98-8846-f21d6ba28309-1500w.jpeg"
            loading="eager"
            className="home-image8"
          />
        </div>
      </main>
      <footer className="home-footer section-container">
        <div className="home-max-width5 max-content-container">
          <div className="home-banner">
            <div className="home-container07">
              <h1 className="home-text41">
                <span>
                  connect with us in
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span>our campaign</span>
                <br></br>
              </h1>
            </div>
            <span className="home-text46">
              come together with us and let&apos;s together grow this programme
            </span>
            <div className="home-btns-container2">
              <a
                href="https://www.buymeacoffee.com/energyzoids"
                target="_blank"
                rel="noreferrer noopener"
                className="home-register-now button-primary button-lg button"
              >
                donate &amp; contribute
              </a>
              <a
                href="mailto:scdav.energyzoids@gmail.com?subject= "
                className="home-contact-us button button-outline button-lg-border"
              >
                CONTACT US
              </a>
            </div>
          </div>
          <div className="home-bottom-container">
            <div className="home-left-side">
              <span className="home-text47">
                <span>Let us all come together and play a part in </span>
                <br></br>
                <span>conservation of non renewable resources of </span>
                <br></br>
                <span>energy by simple means of creating general</span>
                <br></br>
                <span>awareness among all walks of life.</span>
                <br></br>
              </span>
              <div className="home-social-media">
                <div className="home-social-media1">
                  <span className="home-text56">Follow Energy-zoids</span>
                  <div className="home-container08">
                    <a
                      href="https://github.com/Su-nlight"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link02"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://www.instagram.com/energy_zoid_._/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link03"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon02">
                        <path d="M512 92.2c136.8 0 153 0.6 206.8 3 50 2.2 77 10.6 95 17.6 23.8 9.2 41 20.4 58.8 38.2 18 18 29 35 38.4 58.8 7 18 15.4 45.2 17.6 95 2.4 54 3 70.2 3 206.8s-0.6 153-3 206.8c-2.2 50-10.6 77-17.6 95-9.2 23.8-20.4 41-38.2 58.8-18 18-35 29-58.8 38.4-18 7-45.2 15.4-95 17.6-54 2.4-70.2 3-206.8 3s-153-0.6-206.8-3c-50-2.2-77-10.6-95-17.6-23.8-9.2-41-20.4-58.8-38.2-18-18-29-35-38.4-58.8-7-18-15.4-45.2-17.6-95-2.4-54-3-70.2-3-206.8s0.6-153 3-206.8c2.2-50 10.6-77 17.6-95 9.2-23.8 20.4-41 38.2-58.8 18-18 35-29 58.8-38.4 18-7 45.2-15.4 95-17.6 53.8-2.4 70-3 206.8-3zM512 0c-139 0-156.4 0.6-211 3-54.4 2.4-91.8 11.2-124.2 23.8-33.8 13.2-62.4 30.6-90.8 59.2-28.6 28.4-46 57-59.2 90.6-12.6 32.6-21.4 69.8-23.8 124.2-2.4 54.8-3 72.2-3 211.2s0.6 156.4 3 211c2.4 54.4 11.2 91.8 23.8 124.2 13.2 33.8 30.6 62.4 59.2 90.8 28.4 28.4 57 46 90.6 59 32.6 12.6 69.8 21.4 124.2 23.8 54.6 2.4 72 3 211 3s156.4-0.6 211-3c54.4-2.4 91.8-11.2 124.2-23.8 33.6-13 62.2-30.6 90.6-59s46-57 59-90.6c12.6-32.6 21.4-69.8 23.8-124.2 2.4-54.6 3-72 3-211s-0.6-156.4-3-211c-2.4-54.4-11.2-91.8-23.8-124.2-12.6-34-30-62.6-58.6-91-28.4-28.4-57-46-90.6-59-32.6-12.6-69.8-21.4-124.2-23.8-54.8-2.6-72.2-3.2-211.2-3.2v0z"></path>
                        <path d="M512 249c-145.2 0-263 117.8-263 263s117.8 263 263 263 263-117.8 263-263c0-145.2-117.8-263-263-263zM512 682.6c-94.2 0-170.6-76.4-170.6-170.6s76.4-170.6 170.6-170.6c94.2 0 170.6 76.4 170.6 170.6s-76.4 170.6-170.6 170.6z"></path>
                        <path d="M846.8 238.6c0 33.91-27.49 61.4-61.4 61.4s-61.4-27.49-61.4-61.4c0-33.91 27.49-61.4 61.4-61.4s61.4 27.49 61.4 61.4z"></path>
                      </svg>
                    </a>
                    <a
                      href="https://davnoida.org/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link04"
                    >
                      <svg viewBox="0 0 1024 1024" className="home-icon06">
                        <path d="M512 128l470 256v342h-86v-296l-384 210-470-256zM214 562l298 164 298-164v172l-298 162-298-162v-172z"></path>
                      </svg>
                    </a>
                    <a href="tel:+918383801326" className="home-link05">
                      <svg viewBox="0 0 1024 1024" className="home-icon08">
                        <path d="M633.984 255.189c40.235 7.851 74.24 29.141 98.56 58.624 17.92 21.76 30.592 47.957 36.352 76.501 4.651 23.083 27.179 38.016 50.261 33.365s38.016-27.179 33.365-50.261c-8.533-42.325-27.349-81.365-54.144-113.877-36.437-44.203-87.765-76.331-148.053-88.064-23.125-4.523-45.525 10.581-50.048 33.707s10.581 45.525 33.707 50.048zM637.44 85.077c85.333 9.472 159.701 49.579 213.547 108.544 47.701 52.224 79.275 119.211 87.979 192.811 2.773 23.381 23.979 40.149 47.36 37.376s40.149-23.979 37.376-47.36c-10.795-91.605-50.176-175.189-109.696-240.384-67.328-73.728-160.512-123.989-267.136-135.808-23.424-2.603-44.501 14.293-47.104 37.675s14.293 44.501 37.675 47.104zM981.333 721.92c0.683-30.464-10.069-59.904-28.715-82.901-19.627-24.149-48.171-41.259-82.133-46.080-34.133-4.181-72.32-13.397-110.336-27.563-18.475-6.784-38.101-9.301-57.344-7.424-28.288 2.731-55.765 14.891-77.611 36.48l-30.72 30.72c-75.52-47.659-143.36-113.792-195.541-195.797l30.976-30.976c13.739-14.080 24.021-30.976 30.165-49.323 9.045-26.965 9.131-57.003-1.664-85.803-12.331-32.128-22.101-70.144-27.477-110.72-4.437-30.507-19.413-57.472-41.088-77.013-22.997-20.693-53.589-33.195-86.485-32.853h-127.829c-3.755 0-7.765 0.171-11.648 0.512-35.157 3.2-65.792 20.395-86.741 45.483s-32.341 58.325-29.141 93.824c12.8 131.243 58.24 266.368 137.216 388.352 64.085 102.955 155.648 197.248 268.715 269.056 109.568 72.405 242.517 122.112 387.669 137.856 3.925 0.384 8.149 0.555 12.288 0.555 35.328-0.128 67.328-14.635 90.368-37.845s37.248-55.339 37.12-90.496zM896 721.92v128c0.043 11.947-4.651 22.613-12.373 30.379s-18.304 12.587-30.123 12.629l-3.755-0.171c-130.56-14.208-250.581-59.221-348.757-124.117-103.595-65.835-185.984-150.955-243.285-242.944-72.405-111.787-113.28-233.856-124.757-351.488-1.024-11.435 2.731-22.443 9.771-30.891s17.195-14.080 28.928-15.147l131.712-0.171c11.563-0.128 21.632 4.011 29.312 10.923 7.253 6.571 12.288 15.616 13.781 25.941 6.059 45.739 17.408 90.325 32.299 129.067 3.456 9.216 3.413 19.072 0.427 28.075-2.091 6.187-5.589 11.989-10.325 16.853l-53.845 53.803c-13.824 13.824-16.171 34.731-6.912 51.243 67.584 118.827 163.797 211.499 272.256 272.128 16.939 9.472 37.632 6.144 50.987-7.083l54.187-54.187c7.083-6.997 16.085-10.965 25.515-11.904 6.485-0.64 13.227 0.213 19.584 2.56 43.605 16.256 88.32 27.136 129.451 32.171 10.283 1.451 19.712 7.083 26.24 15.147 6.272 7.723 9.856 17.579 9.643 29.099z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-links">
              <div className="home-container09">
                <span className="home-text57">quick navigation</span>
                <Link to="/about1" className="home-navlink09 footer-link">
                  ABOUT
                </Link>
                <a href="#pastevents" className="home-link06 footer-link">
                  <span>past events</span>
                  <br></br>
                </a>
                <a
                  href="mailto:scdav.energyzoid@gmail.com?subject=Register for updates on upcoming events"
                  className="home-link07 footer-link"
                >
                  <span>Register</span>
                  <br></br>
                </a>
                <a href="#speakers" className="home-link08 footer-link">
                  Speakers
                </a>
                <a
                  href="https://goo.gl/maps/7vNHc9J5P9cDFoZF7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link09 footer-link"
                >
                  Location
                </a>
              </div>
              <div className="home-container10">
                <span className="home-text62">Contact</span>
                <a
                  href="mailto:scdav.energyzoids@gmail.com ?subject=connecting with the campaign"
                  className="home-link10 footer-link"
                >
                  <span>contact us</span>
                  <br></br>
                </a>
                <a
                  href="https://www.buymeacoffee.com/energyzoids"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link11 footer-link"
                >
                  donate
                </a>
                <a
                  href="https://www.instagram.com/energy_zoid_._/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link12 footer-link"
                >
                  connect on instagram
                </a>
                <a
                  href="https://davnoida.org/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13 footer-link"
                >
                  DAV NOIDA
                </a>
                <a href="#speakers" className="home-link14 footer-link">
                  <span>our speakers</span>
                  <br></br>
                </a>
              </div>
            </div>
          </div>
          <div className="home-copyright">
            <span className="home-text67">
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
              <span className="home-text71">@</span>
              <a
                href="https://www.instagram.com/energy_zoid_._/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link15"
              >
                energyzoids  and all it&apos;s speakers.
              </a>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
