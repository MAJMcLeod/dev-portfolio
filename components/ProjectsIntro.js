import utils from '../styles/utils.module.css'
// importing stylesheets

let ProjectsIntro = () => {
      // initializing a functional component
    return (
        <div className={utils.outer_2}>
            {/* classes used to style components */}
            <div className={utils.intro_2}>
                <div>
                    <h1 className={utils.intro_name_2}>Projects</h1>
                </div>
                <div></div>
                <div></div>
                <p>Websites, Animations, Apps, Digital Art</p>
            </div>
        </div>
    )
}

export default ProjectsIntro;