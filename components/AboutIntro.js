import utils from '../styles/utils.module.css'

let AboutIntro = () => {
    return (
        <div className={utils.outer}>
            <div className={utils.intro}>
                <div>
                    <h1>Hi, I&apos;m</h1>
                    <h1 className={utils.intro_name}>Max McLeod</h1>
                </div>

                <div></div>
                <div></div>
                <p>Junior Fullstack Web Dev, 3D-Animator and Digital Artist based in South Africa</p>

            </div>
        </div>
    )
}

export default AboutIntro;