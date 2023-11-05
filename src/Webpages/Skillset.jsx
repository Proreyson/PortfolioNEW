import React from "react";



import Html from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import Bootstrap from '../assets/bootstrap.webp';
import Nodejs from '../assets/nodejs.png';
import ReactJs from '../assets/reactjs.jpg';
import Vercel from '../assets/vercel.jpg';
import Git from '../assets/git.png';
import MySql from '../assets/mysql.png';
import Postman from '../assets/postman.png';
import Php from '../assets/php.png';
import Laravel from '../assets/laravel.webp';

const skills = [
  {
    skill: Html,
    skillname: 'Html',
  },
  {
    skill: CSS,
    skillname: 'CSS',
  },
  {
    skill: Javascript,
    skillname: 'Javascript',
  },
  {
    skill: Bootstrap,
    skillname: 'Bootstrap',
  },
  {
    skill: Nodejs,
    skillname: 'Nodejs',
  },
  {
    skill: ReactJs,
    skillname: 'ReactJs',
  },
  {
    skill: Vercel,
    skillname: 'Vercel',
  },
  {
    skill: Git,
    skillname: 'Git',
  },
  {
    skill: MySql,
    skillname: 'MySql',
  },
  {
    skill: Postman,
    skillname: 'Postman',
  },
  {
    skill: Php,
    skillname: 'Php',
  },
  {
    skill: Laravel,
    skillname: 'Laravel',
  },
];

const Skillset = () => {
  return (
    <>
      {skills.map(({ skill, skillname }, index) => {
        return (
          <div className="stack" key={index}>
            <img src={skill} alt={skillname} />
          </div>
        );
      })}
    </>
  );
};

export default Skillset
