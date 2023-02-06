import { useEffect, useState } from 'react';
import agilebadge from '../../assets/images/agile.png';
import AnimatedLetters from '../AnimatedLetters';
import css from '../../assets/images/css.png';
import german from '../../assets/images/deutch.png';
import english from '../../assets/images/english.png';
import django from '../../assets/images/django.png';
import express from '../../assets/images/express.svg';
import github from '../../assets/images/github.png';
import htmlbadge from '../../assets/images/html.png';
import javascript from '../../assets/images/javascript.png';
import korean from '../../assets/images/korean.png';
import lucidchart from '../../assets/images/lucidchart.png';
import mongo from '../../assets/images/mongodb.png';
import node from '../../assets/images/node.png';
import postgres from '../../assets/images/postgresql.png';
import postman from '../../assets/images/postman.png';
import python from '../../assets/images/python.png';
import reactbadge from '../../assets/images/react.png';
import scrum from '../../assets/images/scrum.png';
import slack from '../../assets/images/slack.png'
import sql from '../../assets/images/icons8-sql-64.png';
import './index.scss'

const Skills = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const languages = [
        {
            title: "Programming Languages",
            list: [
                { name: "JavaScript", badge: javascript, nameColor: "#d9c548" },
                { name: "Python", badge: python },
                { name: "HTML", badge: htmlbadge, nameColor: "orange" },
                { name: "CSS", badge: css },
                { name: "SQL", badge: sql, badgeColor: "lightgray" }
            ],
        },
        {
            title: "Databases",
            list: [
                { name: "MongoDB", badge: mongo, nameColor: "green" },
                { name: "PostgreSQL", badge: postgres }
            ]
        },
        {
            title: "Spoken Languages",
            list: [
                { name: "English", badge: english },
                { name: "German", badge: german },
                { name: "Korean", badge: korean }
            ]
        }
        
    ]

    const toolsFrameworks = [
        {
            title: "Web Development",
            list: [
                { name: "React", badge: reactbadge, nameColor: "#4fd6cf" },
                { name: "Django", badge: django, nameColor: "green" },
                { name: "Node", badge: node },
                { name: "Express", badge: express, nameColor: "#52a854" },
                { name: "Postman", badge: postman }
            ],
        },
       
        {
            title: "UI/UX Design",
            list: [
                { name: "Lucidchart", badge: lucidchart, badgeColor: "lightgray", nameColor: "orange" }
            ]
        }
    ]

    const others = [
        {
            title: "Project Management Methods",
            list: [
                { name: "Agile", badge: agilebadge },
                { name: "Github", badge: github },
                { name: "Scrum", badge: scrum, nameColor: "green" },
                { name: "Slack", badge: slack }
            ],
        },
        {
            title: "Universal Skills",
            list: [
                { name: "Problem-Solving", nameColor: "orange" },
                { name: "Time Management", nameColor: "green" },
                { name: "Expansion Mindset", nameColor: "#4fd6cf" },
                { name: "Communication", nameColor: "darkgrey" },
                { name: "Collaboration", nameColor: "#d9c548" }
            ]
            },
    ]

    return (
        <div className="container-skills">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}
                    />
                </h1>
                <div className="contentContainer">
                     <div className="contentSkill">
                         <div className="content__left">
                            <div className="colTitle">LANGUAGES/DATABASES</div>
                            {
                                languages.map((lanType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{lanType.title}</p>
                                        {
                                            lanType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                         <div className="content__mid">
                            <div className="colTitle">TOOLS/FRAMEWORKS</div>
                            {
                                toolsFrameworks.map((subType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{subType.title}</p>
                                        {
                                            subType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                         <div className="content__right">
                            <div className="colTitle">COLLABORATION</div>
                            {
                                others.map((subType, idx) => (
                                    <>
                                        <p key={idx} className="colSubTitle">{subType.title}</p>
                                        {
                                            subType.list.map((entry, i) => (
                                                <div className="badge">
                                                    {
                                                        entry.badge && <img className="skillbadge" style={entry.badgeColor && {backgroundColor: entry.badgeColor}} src={entry.badge && entry.badge} alt="" />
                                                    }
                                                    <p key={i} style={entry.textColor ? {backgroundColor: "transparent", color: entry.textColor} : {backgroundColor: entry.nameColor}} className="skillEntry">{entry.name}</p>
                                                </div>
                                            ))
                                        }<br></br>
                                    </>
                                ))
                            }
                         </div>
                     </div>
                </div>
            </div>
        </div>
    )
}

                export default Skills;