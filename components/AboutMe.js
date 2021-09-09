import utils from '../styles/utils.module.css'
// importing stylesheets

let AboutMe = () => {
        // initializing a functional component
    return (
        <div className={utils.experience_outer}>
            {/* classes used to style components */}
            <div className={utils.about_inner}>
                <h1>About Me</h1>
                <div className={utils.about_1}>
                    <p>I&apos;m an ambitious web-developer with a passion for both back and frontend solutions. I love refining my programs/websites, whether it be refactoring backend logic or redesigning a frontend entirely, I strive to make a product that leaves a lasting impression.</p>
                </div>
                <div className={utils.about_2}>
                    <h3>Skills</h3>
                    <div className={utils.skills_container}>
                        <p>Frontend Development, Backend Development, 3D Animation, Digital Art</p>
                        <p>Java, JavaScript, CSS, HTML, React</p>
                        <p>Photoshop, Blender, Premiere Pro, Houdini</p>
                        <p>Efficient Workflow, UI/UX Testing</p>
                        <p>Storytelling, World Building</p>
                    </div>
                </div>
                <div className={utils.about_2}>
                    <h3>Tools/years</h3>
                    <div className={utils.tools_container}>
                        <ul>
                            <li><p>HTML/+4</p></li>
                            <li><p>Java/+3</p></li>
                            <li><p>SQL/+3</p></li>
                            <li><p>OOP/+3</p></li>

                        </ul>
                        <ul>
                            <li><p>JavaScript/+1</p></li>
                            <li><p>CSS/+1</p></li>
                            <li><p>NodeJS/+1</p></li>
                            <li><p>Express/+1</p></li>
                        </ul>
                        <ul>
                            <li><p>React/+1</p></li>
                            <li><p>NextJS/+1</p></li>
                            <li><p>Mongo/+1</p></li>
                            <li><p>Mongoose/+1</p></li>
                        </ul>
                        <ul>
                            <li><p>Photoshop/+3</p></li>
                            <li><p>Premiere/+2</p></li>
                            <li><p>Blender/+2</p></li>
                            <li><p>Houdini/+1</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;