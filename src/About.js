import React, { useState, useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";
// import { Link } from "react-router-dom";
import Nav from "./Nav";
import NavTop from "./NavTop";
// import Hobbies from "./Hobbies";
import ProjectFooter from "./ProjectFooter";
import Aos from "aos";
import "aos/dist/aos.css";
import { Breakpoint } from "react-socks";
function About() {
  useEffect(() => {
    Aos.init({});
  }, []);

  const [display1, setDisplay1] = useState(false);
  const [display2, setDisplay2] = useState(false);
  const handleDisplayAboutMe1 = () => {
    setDisplay1(false);
  };
  const handleHideAboutMe1 = () => {
    setDisplay1(true);
  };

  const handleDisplayAboutMe2 = () => {
    setDisplay2(false);
  };
  const handleHideAboutMe2 = () => {
    setDisplay2(true);
  };

  const items = [
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591980778/IMG_0391_k4yahl.jpg",
      altText: "Slide 1",
      caption: "Slide 1",
      header: "Slide 1 Header",
      hieght: 2,
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591980778/IMG_0389_isafrr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591980778/IMG_0389_isafrr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591980778/IMG_0389_isafrr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591980778/IMG_0389_isafrr.jpg",
      altText: "Slide 2",
      caption: "Slide 2",
      header: "Slide 2 Header",
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg",
      altText: "Slide 3",
      caption: "Slide 3",
      header: "Slide 3 Header",
      key: "3",
    },
  ];
  const items2 = [
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306946/IMG_3659_xe92gr.jpg",
      altText: "Slide 1",
      caption: "5 yrs old",
      header: "Yitzi",
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597181892/IMG_3980_to9cvl.jpg",
      altText: "Slide 1",
      caption: "our precious first born",
      header: "Yitzi",
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4407_b4wh7g.jpg",
      altText: "Slide 1",
      caption: "sweetest. kindest boy in the world",
      header: "Yitzi",
      key: "1",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306955/IMG_3245_k6y6zu.jpg",
      altText: "Slide 2",
      caption: "3 years old",
      header: "Sara",
      hieght: 2,
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597181892/IMG_3953_xfzk3e.jpg",
      altText: "Slide 2",
      caption: "Daddys girl (I hope)",
      header: "Sara",
      hieght: 2,
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4336_f6wam6.jpg",
      altText: "Slide 2",
      caption: "nurturing, strong, unbeatable",
      header: "Sara",
      hieght: 2,
      key: "2",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1591306884/IMG_3239_rh0yqi.jpg",
      altText: "Slide 3",
      caption: "1yr old",
      header: "Pinny",
      key: "3",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4216_w80h8f.jpg",
      altText: "Slide 3",
      caption: "our cuddly one",
      header: "Pinny",
      key: "3",
    },
    {
      src:
        "https://res.cloudinary.com/dkng1fqtz/image/upload/v1597181891/IMG_3835_zw1lfz.jpg",
      altText: "Slide 3",
      caption: "like eating candy without the side affects",
      header: "Pinny",
      key: "3",
    },
  ];

  return (
    <div>
      <NavTop />
      <Breakpoint medium up>
      <div className="background-grid">
        <div className="about-background">
          <div className="about-me-text">
            <div className="title">
              <p className="about-title">About Me</p>
            </div>
            <h4>
              <img
                width="75%"
                className="left"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4163_f2chnv.jpg"
                alt="8"
              ></img>
              <img
                width="75%"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4106_eovuyo.jpg"
                className="right"
                alt="11"
              ></img>
              I was born in Russia, moved to the amazing USA when I was 6,
              graduated from highschool in Columbus, OH followed by a graduation
              from Ohio State in 2011.<br></br>
              <br></br>While in school I balanced multiple jobs including
              Panera, Yoscicks chocolates, and a financial planning internship.
            </h4>
          </div>
        </div>
        <div className="animate">
          <div className="grids">
            <div className="rect" data-aos="fade-in">
              <h1 className="about-button">Me</h1>
              <p>
                I believe in Fatherhood, Motherhood, clear and honest
                communication, and to leave a part of myself in whatever I am
                involved in. I pray every day that those struggling to find a
                spouse may do so, that those burdened without kids, merit kids.
                My Wife and I hope to be a springboard to our kids, to show them
                that to get anywhere, there should be hard work, dedication, and
                communication.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              className="rect"
            >
              <button
                onClick={!display1 ? handleHideAboutMe1 : handleDisplayAboutMe1}
              >
                {" "}
                <h1 className="about-button">Hobbies</h1>{" "}
              </button>

              <p className="paragraph">
                If I could take a week and choose what I would do on my own, I
                would be in my garage, building something new, fixing something
                broken. OR, I would be in the garden, planting, enjoying the
                fresh air. OR, I would be camping, I would be found lounging in
                a cot or with a fishing rod in hand by the lake.
                {display1 ? <UncontrolledCarousel items={items} /> : null}
              </p>
            </div>
            <div data-aos="zoom-in" className="rect">
              <button
                onClick={!display2 ? handleHideAboutMe2 : handleDisplayAboutMe2}
              >
                <h1 className="about-button">Family</h1>{" "}
              </button>

              <p className="paragraph">
                I am grateful to G-d for my Wife, for our 3 amazing kids.
                <br></br>
                <br></br> I am not worthy of my Wife and her amazing strength,
                and abilities, perhaps one day she will come to that realization
                also, but until then I will continue to be that lucky.<br></br>
                <br></br> To be partnered with G-d in raising our 3 kids, is a
                dream come true, I only wish they grow up strong, with great
                values, strength to persevere, and clear minds.
              </p>
              {display2 ? <UncontrolledCarousel items={items2} /> : null}
            </div>
          </div>
        </div>
      </div>

      <div className="button"></div>
      </Breakpoint>
      <Breakpoint small down>
      <div className="background-grid-mobile">
        <div className="about-mobile-background-mobile">
          <div className="about-me-text-mobile">
            <div className="title-mobile">
              <p className="about-title-mobile">About Me</p>
            </div>
            <h4>
              <img
                width="75%"
                className="left-mobile"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4163_f2chnv.jpg"
                alt="8"
              ></img>
              <img
                width="75%"
                src="https://res.cloudinary.com/dkng1fqtz/image/upload/v1597179796/IMG_4106_eovuyo.jpg"
                className="right-mobile"
                alt="11"
              ></img>
              I was born in Russia, moved to the amazing USA when I was 6,
              graduated from highschool in Columbus, OH followed by a graduation
              from Ohio State in 2011.<br></br>
              <br></br>While in school I balanced multiple jobs including
              Panera, Yosicks chocolates, and a financial planning internship.
            </h4>
          </div>
        </div>
        <div className="animate-mobile">
          <div className="grids-mobile">
            <div className="rect-mobile" data-aos="fade-in">
              <h1 className="about-button-mobile">Me</h1>
              <p >
                I believe in Fatherhood, Motherhood, clear and honest
                communication, and to leave a part of myself in whatever I am
                involved in. I pray every day that those struggling to find a
                spouse may do so, that those burdened without kids, merit kids.
                My Wife and I hope to be a springboard to our kids, to show them
                that to get anywhere, there should be hard work, dedication, and
                communication.
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="900"
              data-aos-easing="ease-in-out"
              className="rect"
            >
              <button
                onClick={!display1 ? handleHideAboutMe1 : handleDisplayAboutMe1}
              >
                {" "}
                <h1 className="about-button">Hobbies</h1>{" "}
              </button>

              <p className="paragraph">
                If I could take a week and choose what I would do on my own, I
                would be in my garage, building something new, fixing something
                broken. OR, I would be in the garden, planting, enjoying the
                fresh air. OR, I would be camping, I would be found lounging in
                a cot or with a fishing rod in hand by the lake.
                {display1 ? <UncontrolledCarousel items={items} /> : null}
              </p>
            </div>
            <div data-aos="zoom-in" className="rect">
              <button
                onClick={!display2 ? handleHideAboutMe2 : handleDisplayAboutMe2}
              >
                <h1 className="about-button">Family</h1>{" "}
              </button>

              <p className="paragraph">
                I am grateful to G-d for my Wife, for our 3 amazing kids.
                <br></br>
                <br></br> I am not worthy of my Wife and her amazing strength,
                and abilities, perhaps one day she will come to that realization
                also, but until then I will continue to be that lucky.<br></br>
                <br></br> To be partnered with G-d in raising our 3 kids, is a
                dream come true, I only wish they grow up strong, with great
                values, strength to persevere, and clear minds.
              </p>
              {display2 ? <UncontrolledCarousel items={items2} /> : null}
            </div>
          </div>
        </div>
      </div>

      <div className="button"></div>
      </Breakpoint>

      <Nav />
      <ProjectFooter />
    </div>
  );
}

export default About;
