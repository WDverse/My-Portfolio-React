import '../styles/Resume.css';
function Resume(props) {
    return (
        <div className="text" style={{ backgroundColor:  "white" }}>

            <div className="resume">
                <h2 className='resume-title' >Resume</h2>
                <p>Download my <a className="text resume-link" href="Appiagyei_resume.pdf" download><span className='download'>&#10515;</span>resume.</a></p>
                <h3>Frontend Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Bootstrap</li>
                    <li>jQuery</li>
                    <li>React</li>
                    <li>Responsive Design</li>
                </ul>
                <h3>Backend Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>

        </div>
    )
}


export default Resume;