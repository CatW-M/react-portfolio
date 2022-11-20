import { useEffect, useState } from 'react';
import {
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
                { name: "JavaScript", textColor: "black" },
                { name: "Python", nameColor: "orange" },
                { name: "HTML", nameColor: "yellow", textColor: "black" },
                { name: "CSS", nameColor: "orange" },
                { name: "SQL", nameColor: "#4fd6cf" }
            ],
        },
        {
            title: "Spoken Languages",
            list: [
                { name: "English", textColor: "black" },
                { name: "German", nameColor: "#4fd6cf" },
                { name: "Korean (beg.)", nameColor: "orange" }
            ]
        }
    ]

    const toolsFrameworks = [
        {
            title: "Web Development",
            list: [
                { name: "React", nameColor: "#4fd6cf" },
                { name: "Django", nameColor: "green" },
                { name: "Node", nameColor: "lightgray" },
                { name: "Express", nameColor: "#52a854" },
            ],
        },
        {
            title: "Databases",
            list: [
                { name: "SQLite", nameColor: "lightgray" },
                { name: "MongoDB", nameColor: "green" },
                { name: "PostgreSQL", nameColor: "orange" }
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
                { name: "Agile", nameColor: "orange" },
                { name: "Scrum", nameColor: "lightgray" }
            ],
        },
        {
            title: "Universal Skills",
            list: [
                { name: "Problem-Solving", nameColor: "orange" },
                { name: "Time Management and Prioritization", nameColor: "green" },
                { name: "Expansion Mindset", nameColor: "#4fd6cf" },
                { name: "Communication", nameColor: "darkgrey" },
                { name: "Collaboration", nameColor: "yellow" }
            ]
        }
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
                            <div className="column">
                                <div className="colTitle">LANGUAGES</div>
                                {
                                    languages.map((lanType, idx) => (
                                        <>
                                            <p key={idx} className="colSubTitle">{lanType.title}</p>
                                            {
                                                lanType.list.map((entry, i) => (
                                                    <div className="badge">
                                                        <p key={i} style={entry.textColor ? { backgroundColor: "#7cfc10", color: entry.textColor } : { backgroundColor: entry.nameColor }} className="skillEntry">{entry.name}</p>
                                                    </div>
                                                ))
                                            }<br></br>
                                        </>
                                    ))
                                }
                            </div>
                            <div className="column">
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
                            <div className="column">
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
                )
}

                export default Skills;