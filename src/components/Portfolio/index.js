import React, { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Voluntiers from '../../assets/images/Voluntiers.png';
import Bookbean from '../../assets/images/BookBean.png';
import Gumbo from '../../assets/images/GumbosGame.png';
import Simpli from '../../assets/images/simplihive.png';
import Blog from '../../assets/images/blog.png';
import Loader from 'react-loaders';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
            idx={15}
          />
        </h1>
        <div>
          <div className="images-container">
            <div className="image-box-left">
              <img
                src={Voluntiers}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">Voluntiers - MERN Stack</p>
                <h4 className="description">
                  Served as tech-lead and backend developer for this intuitive
                  app that lets users view and volunteer for service
                  opportunities in their community. Volunteers track their own
                  time and see leaderboards for service hours.
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://voluntiers.herokuapp.com/')
                  }
                >
                  View
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://github.com/AidenValley/VolunTiers')
                  }
                >
                  Github
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://github.com/CatW-M/voluntiers-api')
                  }
                >
                  API Git
                </button>
              </div>
            </div>
            <div className="image-box-mid">
              <img src={Simpli} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">Simplihive</p>
                <h4 className="description">
                  Django-Python App using PostgreSQL and AWS for data storage.
                  custom middleware. Kind of like Tinder for your stuff - users
                  upload items they are trying to decide on and other users vote
                  on what to do with the item.
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://simplihive.herokuapp.com/')
                  }
                >
                  View
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://github.com/CatW-M/simplihive')
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="image-box-mid">
              <img src={Bookbean} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">BookBean</p>
                <h4 className="description">
                  Node.js/PostgreSQL book search and coffee recommendation
                  application with Express authentication template using
                  Passport + Flash messages + custom middleware. Integration
                  with Google Books Volumes API.
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://bookbean2.herokuapp.com/')
                  }
                >
                  View
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://github.com/CatW-M/bookbean2')
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="image-box-right">
              <img src={Gumbo} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">Gumbo's Game</p>
                <h4 className="description">
                  Retro-style maze game created with Vanilla Javascript (ES6),
                  HTML5, and CSS.
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open(
                      'https://catw-m.github.io/gumbosgame_SEIRFX621_project1/'
                    )
                  }
                >
                  View
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open(
                      'https://github.com/CatW-M/gumbosgame_SEIRFX621_project1'
                    )
                  }
                >
                  Github
                </button>
              </div>
            </div>
            <div className="image-box-left">
              <img src={Blog} className="portfolio-image" alt="portfolio" />
              <div className="content">
                <p className="title">
                  Canoakia Blog - NextJS13, Typescript, Sanity CMS
                </p>
                <h4 className="description">
                  Personal blog site built with NextJS 13 utilizing TailwindCSS
                  for styling and embedded Sanity CMS.
                </h4>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://my-blog-nextjs13-catw-m.vercel.app/')
                  }
                >
                  View
                </button>
                <button
                  className="btn"
                  onClick={() =>
                    window.open('https://github.com/CatW-M/myblog-nextjs-13')
                  }
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;
