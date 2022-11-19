import { useEffect, useState } from 'react';
import {
    faNodeJs,
    faPython,
    faCss3,
    faHtml5,
    faJsSquare,
    faReact,
    faMastodon,
    faCanadianMapleLeaf,
    faResearchgate
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';

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
                { name: "JavaScript", badge: {faJsSquare}, nameColor: "#d9c548" },
                { name: "Python", badge: {faPython} },
                { name: "HTML", badge: {faHtml5}, nameColor: "orange" },
                { name: "CSS", badge: {faCss3} },
                { name: "SQL", badge: {faMastodon}, badgeColor: "lightgray" }
            ],
        },
        {
            title: "Spoken Languages",
            list: [
                { name: "English", textColor: "black" },
                { name: "German", textColor: "black" },
                { name: "Korean (beg.)", textColor: "black" }
            ]
        }
    ]

    const toolsFrameworks = [
        {
            title: "Web Development",
            list: [
                { name: "React", badge: {faReact}, nameColor: "#4fd6cf" },
                { name: "Django", badge: {faCanadianMapleLeaf}, nameColor: "green" },
                { name: "Node", badge: {faNodeJs}, badgeColor: "lightgray" },
                { name: "Express", badge: {faNodeJs}, badgeColor: "beige", nameColor: "#52a854" },
            ],
        },
        {
            title: "Database",
            list: [
                { name: "SQLite", badge: {faMastodon}, badgeColor: "lightgray" },
                { name: "MongoDB", badge: {faCanadianMapleLeaf}, nameColor: "#52a854" },
                { name: "PostgreSQL", badge: {faMastodon} }
            ]
        },
        {
            title: "UI/UX Design",
            list: [
                { name: "Lucidchart", badge: {faResearchgate}, badgeColor: "lightgray", nameColor: "orange" }
            ]
        }
    ]

    const others = [
        {
            title: "Project Management Methods",
            list: [
                { name: "Agile", textColor: "black" },
                { name: "Scrum", textColor: "black" },
                { name: "Kanban", textColor: "black" }
            ],
        },
        {
            title: "Universal Skills",
            list: [
                { name: "Problem-Solving", textColor: "black" },
                { name: "Time Management and Prioritization", textColor: "black" },
                { name: "Expansion Mindset", textColor: "black" },
                { name: "Communication", textColor: "black" },
                { name: "Collaboration", textColor: "black" }
            ]
        }
    ]

    return (
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['S', 'k', 'i', 'l', 'l', 's']}
                        idx={15}
                    />
                </h1>
                <div className="headerContainer">
                    <div className="header">
                        <img className="headerIcon" src={faJsSquare} alt="" />
                        <p className="headerTitle" >Skill</p>
                    </div>
                    <div className="divider"></div>
                    <div className="contentContainer">
                        <div className="contentSkill">
                            <div className="content__left">
                                <div className="colTitle">LANGUAGES</div>
                                {
                                    languages.map((lanType, idx) => (
                                        <>
                                            <p key={idx} className="colSubTitle">{lanType.title}</p>
                                            {
                                                lanType.list.map((entry, i) => (
                                                    <div className="badge">
                                                        {
                                                            entry.badge && <img className="skillbadge" style={entry.badgeColor && { backgroundColor: entry.badgeColor }} src={entry.badge && entry.badge} alt="" />
                                                        }
                                                        <p key={i} style={entry.textColor ? { backgroundColor: "transparent", color: entry.textColor } : { backgroundColor: entry.nameColor }} className="skillEntry">{entry.name}</p>
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
                                                            entry.badge && <img className="skillbadge" style={entry.badgeColor && { backgroundColor: entry.badgeColor }} src={entry.badge && entry.badge} alt="" />
                                                        }
                                                        <p key={i} style={entry.textColor ? { backgroundColor: "transparent", color: entry.textColor } : { backgroundColor: entry.nameColor }} className="skillEntry">{entry.name}</p>
                                                    </div>
                                                ))
                                            }<br></br>
                                        </>
                                    ))
                                }
                            </div>
                            <div className="content__right">
                                <div className="colTitle">OTHERS</div>
                                {
                                    others.map((subType, idx) => (
                                        <>
                                            <p key={idx} className="colSubTitle">{subType.title}</p>
                                            {
                                                subType.list.map((entry, i) => (
                                                    <div className="badge">
                                                        {
                                                            entry.badge && <img className="skillbadge" style={entry.badgeColor && { backgroundColor: entry.badgeColor }} src={entry.badge && entry.badge} alt="" />
                                                        }
                                                        <p key={i} style={entry.textColor ? { backgroundColor: "transparent", color: entry.textColor } : { backgroundColor: entry.nameColor }} className="skillEntry">{entry.name}</p>
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
                </div>
                )
}

                export default Skills;