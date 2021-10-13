import React from 'react';
import './AppHeader.css';
import { Link } from 'react-scroll';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa';

function AppHeader() {

  window.onload = function () {
    let navBar = document.querySelector('#nav');
    let iBar = document.querySelector('.i-scroll');

    window.addEventListener('scroll', function () {
      if (window.scrollY >= 720) {
        navBar.classList.add('fixed-header');
        iBar.classList.add('fixed-scroll');
      } else {
        navBar.classList.remove('fixed-header');
        iBar.classList.remove('fixed-scroll');
      }
    });
  }


  return (
    <header className="app-header">
      <div className="app-content">
        <div className="app-text">

          <Zoom top cascade>
            <h1>Welcome anyone to cactus world</h1>
          </Zoom>
          <div className="discribtion">
            <p className="discBx">
              Cactus is a type of plant that belongs to the succulent family.
              and the adaptation of the cactus, which will adapt well to all weather conditions.
              can grow in all areas Cacti retain water in their bodies, making their stems, leaves, and roots plump.
              and will adapt to the environment very well Cactus is a plant that grows well in the desert.
              But some species grow well in tropical forests.
            </p>
          </div>
          <div className="app-button">

            <div className="btn-item">
              <Bounce left cascade>
                <Link to="nav" smooth={true} duration={1000}>
                  <p className="btn-1"><FaChevronDown /></p>
                </Link>
              </Bounce>
            </div>
            
          </div>

        </div>
      </div>
      <nav className="nav" id="nav">
        <img src="/images/cactus1.png" alt="img" />
        <h1>CACTUS!!</h1>
      </nav>

      <div className="i-scroll" id="i-scroll">
          <Link to="search" smooth={true} duration={1000}>
            <p className="btn-search"><FaChevronUp /></p>
          </Link>
        </div>

    </header>
  );
}

export default AppHeader;