import dynamic from "next/dynamic";
// import AboutSection from "@components/sections/About";
import Link from "next/link";

import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";
import ContactForm2Section from "@components/sections/ContactForm2";

const TeamSlider = dynamic( () => import("@components/sliders/Team"), { ssr: false } );

const Leadership = () => {
  const Content = {
    "team": [
        {
          "image": "/img/director.png",
          "name": "Kingsley Ocquaye",
          "role": "Director, SM Engineering",
          "tel": "(+223) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
      },
      {
          "image": "/img/siya.jpg",
          "name": "Jonathan Dartey",
          "role": "Director Technical Services",
          "tel": "(+233) 50 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
      },
      {
          "image": "/img/zoe.jpg",
          "name": "Akua Boahemaa",
          "role": "Managing Director",
          "tel": "(+233) 57 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
      },
      {
          "image": "/img/cassie.jpg",
          "name": "Rachel Amarh",
          "role": "Finance & Accounts Manager",
          "tel": "(+233) 54 318 47 07",
          "social": [
              {
                  "link": "https://facebook.com/",
                  "icon": "fa-brands fa-facebook-f",
                  "title": "Facebook"
              },
              {
                  "link": "https://twitter.com/",
                  "icon": "fa-brands fa-twitter",
                  "title": "Twitter"
              }
          ],
      },
      {
        "image": "/img/cassie.jpg",
        "name": "Ivan Adjetey",
        "role": "Procurement Manager",
        "tel": "(+233) 54 318 47 07",
        "social": [
            {
                "link": "https://facebook.com/",
                "icon": "fa-brands fa-facebook-f",
                "title": "Facebook"
            },
            {
                "link": "https://twitter.com/",
                "icon": "fa-brands fa-twitter",
                "title": "Twitter"
            }
        ],
    }
    ]
  }

  return (
    <Layouts>
      <PageBanner pageTitle={"Leadership"} pageDesc={"our values and vaulted us to the top of our industry."} />
      
      {/* Team Style Two (Revolution) Start */}
      <section className="gap team-style-two revolution">
        {/* <AboutSection /> */}
        <div className="container">
          <div className="row space">
            <div className="col-lg-7">
              <div className="head">
                <span>Our Leadership</span>
                <h2>The Champions Of An Engineering Revolution</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="head">
                <p>Our unwavering commitment to delivering integrated engineering solutions with technical excellence and innovation ensures that we meet our clients' needs with precision and professionalism.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {Content.team.map((item, key) => (
            <div key={`team-item-${key}`} className="col-lg-6 col-md-6" >
              <div className="team-data">
                <h3>{item.name}</h3>
                <p>{item.role}</p>
                <div className="contact">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40" height="62" viewBox="0 0 40 62">
                            <defs>
                                <clipPath id="sdfsdfsas">
                                    <rect width="40" height="62"/>
                                </clipPath>
                            </defs>
                            <g id="Mobsdsdffsdw3ile" clipPath="url(#sdfsdfsas)">
                                <path id="Path_1fghddddgsfdffs" data-name="Path 1" d="M10,6a4,4,0,0,0-4,4V50a4,4,0,0,0,4,4H28a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4H10m0-6H28A10,10,0,0,1,38,10V50A10,10,0,0,1,28,60H10A10,10,0,0,1,0,50V10A10,10,0,0,1,10,0Z" transform="translate(1 1)"/>
                                <path id="Path_24fsdfsd32r" data-name="Path 2" d="M2.5,0h7a2.5,2.5,0,0,1,0,5h-7a2.5,2.5,0,0,1,0-5Z" transform="translate(14 48)"/>
                            </g>
                        </svg>
                    </span>
                    <p>{item.tel}</p>
                </div>
                {/* <div className="team-social-medias">
                    <Link href={item.link}>
                        <i className="fa-solid fa-arrow-up-long"></i>
                    </Link>
                    <div className="team-social-media">
                        {item.social.map((link, link_key) => (
                        <a key={`teamsocial-item-${link_key}`} className="icon" href={link.link} target="_blank" title={link.title}>
                            <i className={link.icon} />
                        </a>
                        ))}
                    </div>
                </div> */}
                <figure className="team-image">
                    <img src={item.image} alt={item.name} />
                </figure>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>
      {/* Team Style Two (Revolution) End */}
      
      {/* <ContactForm2Section /> */}

      {/* <TeamSlider /> */}
      
    </Layouts>
  );
};
export default Leadership;