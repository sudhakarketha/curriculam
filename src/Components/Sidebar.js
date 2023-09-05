import React, { useState } from 'react'

import './Sidebar.css'

const Sidebar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    return (
        <div>
            <div className=''>
                <h3>Curriculum</h3>
                <ul className='menu'>
                    <li className={`dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>  What is Courseau ?
                        <ul className={`sub-menu ${dropdownOpen ? 'show' : ''}`}>
                            <ol className=''><i className="fa-solid fa-book" />Lesson content</ol>
                            <ol><i className="fa-solid fa-lightbulb"></i> Key takeaway</ol>
                            <ol><i className="fa-solid fa-person-running"></i>Actionable Step</ol>
                            <ol><i className="fa-solid fa-question"></i>Lesson Quiz</ol>
                        </ul>
                    </li>
                    <li>Upload some content</li>
                    <li>Define the learning outcome</li>
                    <li>Generate your course with AI</li>
                    <li>Generate additional lead magnets</li>
                    <li>Share it with your audience!</li>
                </ul>
            </div>
        </div>
    )
}

{/* <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js'></script> */ }

export default Sidebar