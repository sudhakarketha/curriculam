import React from 'react'

import './Body.css'

const Body = () => {
    return (
        <div>
            <div className='quiz'><span>?</span> Lesson Quiz</div>
            <div className='body'>
                <h3 className='question'>Who is Courseau for ?</h3>
                <div className='options'>
                    <p>Content creators who want to spin their work into a valuable course</p>
                    <p>Podcasters looking to add value to each episode</p>
                    <p>Someone hopping  to expedite the course-building process</p>
                    <p>Students looking to break down complexity and learn better</p>
                    <p>All of the above</p>
                </div>

              

            </div>
            <div className='img'>
             <img src="https://www.phys.ufl.edu/wp/wp-content/uploads/2018/06/physics-labs6.jpg" alt="" />
            </div>
           
        </div>
    )
}

export default Body