import utils from '../styles/utils.module.css'
import {AiOutlineHtml5} from 'react-icons/ai'
import {FaReact, FaSpotify} from 'react-icons/fa'
import {IoLogoJavascript} from 'react-icons/io'
import {DiMongodb} from 'react-icons/di'
// importing stylesheets

let ProjectsDisplay = () => {
    // initializing a functional component
    return (
        <div className={utils.projects_outer}>
            {/* classes used to style components */}
            <div className={utils.projects_inner}>
                <h2 className={utils.projects_inner_desc}>Websites</h2>
                <div className={utils.brd_seperate}></div>

                <div className={utils.projects_container}>
                    <div className={utils.project_1}>
                        <a href="https://github.com/MAJMcLeod/ArtPortfolio" target="_blank" rel="noreferrer">
                            <div className={utils.languages}>
                                <div className={utils.icons}>
                                    <AiOutlineHtml5 className={utils.languages_icon} />
                                    <IoLogoJavascript className={utils.languages_icon} />
                                </div>

                            </div>
                            <div className={utils.project_inner}>
                                <div className={utils.project_inner_container}>
                                    <h2>Art Portfolio</h2>
                                    <div className={utils.project_seperator}></div>
                                    <div className={utils.project_card_info}>
                                        <p>Art portfolio website made using html, css and javascript.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={utils.project_1}>
                        <a href="https://github.com/MAJMcLeod/Music-app" target="_blank" rel="noreferrer">
                        <div className={utils.languages}>
                                <div className={utils.icons}>
                                    <FaReact className={utils.languages_icon} />
                                    <FaSpotify className={utils.languages_icon} />
                                </div>

                            </div>
                            <div className={utils.project_inner}>
                                <div className={utils.project_inner_container}>
                                    <h2>Spotify App</h2>
                                    <div className={utils.project_seperator}></div>
                                    <div className={utils.project_card_info}>
                                        <p>App that uses React and Spotify API to create a basic music website.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className={utils.project_1}>
                        <a href="https://github.com/MAJMcLeod/mine-sweeper" target="_blank" rel="noreferrer">
                        <div className={utils.languages}>
                                <div className={utils.icons}>
                                    <FaReact className={utils.languages_icon} />
                                </div>

                            </div>
                            <div className={utils.project_inner}>
                                <div className={utils.project_inner_container}>
                                    <h2>Mine-sweeper</h2>
                                    <div className={utils.project_seperator}></div>
                                    <div className={utils.project_card_info}>
                                        <p>Mine-sweeper made using React.</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className={utils.project_1}>
                        <a href="https://github.com/MAJMcLeod/Mongo-App" target="_blank" rel="noreferrer">
                        <div className={utils.languages}>
                                <div className={utils.icons}>
                                    <FaReact className={utils.languages_icon} />
                                    <DiMongodb className={utils.languages_icon} />
                                </div>

                            </div>
                            <div className={utils.project_inner}>
                                <div className={utils.project_inner_container}>
                                    <h2>MongoDB App</h2>
                                    <div className={utils.project_seperator}></div>
                                    <div className={utils.project_card_info}>
                                        <p>First App made using React and MongoDB.</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsDisplay;