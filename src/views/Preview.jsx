// import React from "react";
// import { Link } from "react-router-dom";
// import dark from "../assets/img/intro/dark.jpg";


// const previewDemo = [
//   {
//     img: dark,
//     title: "Dark & Light (Professional)",
//     routerPath: "/home-dark",
//     delayAnimation: "50",
//   },
 
// ];

// const Preview = () => {
//   return (
//     <div>
//       <section className="banner text-center">
//         <div className="content">
//           {/* <h1>Tunis</h1> */}
//           {/* <h2>Personal Portfolio React Template</h2> */}
//         </div>
//       </section>
//       {/* End .banner */}

//       <section className="demo dark">
//         <div className="container">
//           <div className="row">
//             {previewDemo.map((val, i) => (
//               <div
//                 className="col-xs-12 col-sm-6 col-md-6"
//                 key={i}
//                 data-aos="fade-up"
//                 data-aos-duration="1200"
//                 data-aos-delay={val.delayAnimation}
//               >
//                 <div className="content text-center">
//                   <div className="bg_container">
//                     <Link to={val.routerPath} target="_blank" rel="noreferrer">
//                       <img
//                         src={val.img}
//                         alt="demo"
//                         className="img-responsive screenshot"
//                       />
//                     </Link>
//                   </div>
//                   <h2 className="demo-title">{val.title}</h2>
//                   <div className="anchor">
//                     <h6>
//                       <Link
//                         className="btn"
//                         to={val.routerPath}
//                         target="_blank"
//                         rel="noreferrer"
//                       >
//                         view demo
//                       </Link>
//                     </h6>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* End .Demo */}

//       <footer>
//         <div className="go_purchase">
//           {/* <h6 data-aos="fade-up" data-aos-duration="1200">
//             You are at the right step now
//           </h6> */}
//           {/* <h3 data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
//             Purchase Tunis & Build Your Super Fast{" "}
//             <span className="theme-color">React JS</span> &amp;{" "}
//             <span className="theme-color">Bootstrap 5 </span> Based Portfolio
//             Template.
//           </h3> */}
//           <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
//             <a
//               className="button"
//               href="https://themeforest.net/user/ib-themes/portfolio"
//               target="_blank"
//               rel="noreferrer"
//             >
//               {/* <span className="button-text"> Purchase Now</span> */}
//               <span className="button-icon fa fa-arrow-right"></span>
//             </a>
//           </div>
//         </div>
//         {/* End go_purchase */}

//         <div className="text-center footer_copyright">
//           {/* <h6>Tunis - Personal Portfolio React Template</h6>
//           <h5>
//             &copy; {new Date().getFullYear()} Designed with{" "}
//             <span className="heart">&#10084;</span> by{" "}
//             <a
//               href="https://themeforest.net/user/ib-themes"
//               target="_blank"
//               rel="noreferrer"
//             >
//               ib-themes.
//             </a>{" "}
//           </h5> */}
//         </div>
//       </footer>
//       {/* End footer */}
//     </div>
//   );
// };

// export default Preview;


import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Hero from "../components/hero/Hero";
import Index from "../components/about/index";
import Address from "../components/Address";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Contact from "../components/Contact";
import Social from "../components/Social";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "Home" },
  { icon: "fa-user", menuName: "About" },
  { icon: "fa-briefcase", menuName: "Portfolio" },
  { icon: "fa-envelope-open", menuName: "Contact" },
  { icon: "fa-comments", menuName: "Blog" },
];

//change HomeDark to preview
const  Preview = () => {
  document.querySelector("body").classList.remove("rtl");

  return (
    <div className="yellow">
      <SwitchDark />
      {/* End Switcher */}
      <Tabs>
        <div className="header">
          <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
            {menuItem.map((item, i) => (
              <Tab className="icon-box" key={i}>
                <i className={`fa ${item.icon}`}></i>
                <h2>{item.menuName}</h2>
              </Tab>
            ))}
          </TabList>
        </div>
        {/* End Menu Content */}

        <div className="tab-panel_list">
          {/* Hero Content Starts */}
          <TabPanel className="home ">
            <div
              className="container-fluid main-container container-home p-0 "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="color-block d-none d-lg-block"></div>
              <Hero />
            </div>
          </TabPanel>
          {/* Hero Content Ends */}

          {/* About Content Starts */}
          <TabPanel className="about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-left text-sm-center">
                <h1>
                  ABOUT <span>ME</span>
                </h1>
                <span className="title-bg">Resume</span>
              </div>
              {/* End title */}
              <Index />
            </div>
          </TabPanel>
          {/* About Content Ends */}

          {/* Portfolio Content Starts */}
          <TabPanel className="portfolio professional">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>portfolio</span>
              </h1>
              <span className="title-bg">works</span>
            </div>
            {/* End title */}
            <Portfolio />
          </TabPanel>
          {/* Portfolio Content Ends */}

          {/* Contact Content Starts */}
          <TabPanel className="contact">
            <div
              className="title-section text-left text-sm-center"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                get in <span>touch</span>
              </h1>
              <span className="title-bg">contact</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="row">
                {/*  Left Side Starts */}
                <div className="col-12 col-lg-4">
                  <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    Don't be shy !
                  </h3>
                  <p className="open-sans-font mb-4">
                    Feel free to get in touch with me. I am always open to
                    discussing new projects, creative ideas or opportunities to
                    be part of your visions.
                  </p>
                  <Address />
                  {/* End Address */}

                  <Social />
                  {/* End Social */}
                </div>
                {/* Left Side Ends */}

                {/*  Contact Form Starts  */}
                <div className="col-12 col-lg-8">
                  <Contact />
                </div>
                {/*  Contact Form Ends */}
              </div>
            </div>
            {/* End .container */}
          </TabPanel>
          {/* Contact Content Ends */}

          {/* Blog Content Starts */}
          <TabPanel className="blog">
            <div
              className="title-section text-left text-sm-center "
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <h1>
                my <span>blog</span>
              </h1>
              <span className="title-bg">posts</span>
            </div>
            <div
              className="container"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              {/*  Articles Starts  */}
              <div className="row pb-50">
                <Blog />
              </div>
              {/* Articles Ends */}
            </div>
          </TabPanel>
          {/* Blog Content Ends */}
        </div>
      </Tabs>
    </div>
  );
};

export default  Preview;

