import React, { Component } from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";
import HackerLogo from "../assets/hacker.svg";
import Contact from "../components/Contact";
import About from '../components/About';
// import { Element } from 'react-scroll'
// import './Background.scss'

class Homepage extends Component {
  componentDidMount() {
    document.title = "Ajay Yadukrishnan";
  }
  constructor(props) {
    super(props);
    this.contactRef = React.createRef();
  }
  render() {
    return (
      <div className="homePageContainer" id="home">
        <Navbar />
        <div className="homePageDiv">
          <div className="profileDiv">
            <span className="profileName">AJAY YADUKRISHNAN</span>
            <br />
            <br />
            <img
              className="profileImage"
              src={HackerLogo}
              alt="React Logo"
              width="100"
              height="100"
            />
            <br />
            <div className="profileWelcome">
              <p>Welcome to my website.</p>
            </div>
            <br />
            <br />
            <div className="profileIntro">
              <p>
                I am an <a className="customLink" href="https://www.infor.com/solutions/erp/m3">Infor M3</a> consultant at <a className="customLink" href="https://doppiogroup.com">Doppio Group</a>
              </p>
              <a className="getInTouchLink" href="mailto:ajayyadukrishnan@gmail.com">
                <button className="getInTouch">Get In Touch</button></a>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div id="about">
          <About />
        </div>
        <div className="divider"></div>
        <div id="contact">
          <Contact />
        </div>
      </div >
    );
  }

  executeScroll = () => this.myRef.current.scrollIntoView();
}

export default Homepage;
