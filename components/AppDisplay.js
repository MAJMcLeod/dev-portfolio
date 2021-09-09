import utils from '../styles/utils.module.css'
import{FaJava} from 'react-icons/fa'
// importing stylesheets

let AppDisplay = () => {
      // initializing a functional component
    return (
        <div className={utils.projects_outer_2}>
            {/* classes used to style components */}

            <div className={utils.projects_inner}>
                <h2 className={utils.projects_inner_desc}>Apps</h2>
                <div className={utils.brd_seperate}></div>

                <div className={utils.projects_container_2}>
                    <div className={utils.project_1}>
                        <a href="https://github.com/MAJMcLeod/Cross-Country-Tracker" target="_blank" rel="noreferrer">
                            <div className={utils.languages}>
                                <div className={utils.icons}>
                                <FaJava className={utils.languages_icon}/>
                                </div>
                               
                            </div>
                            <div className={utils.project_inner}>
                                <div className={utils.project_inner_container}>
                                    <h2>Cross Country Tracker</h2>
                                    <div className={utils.project_seperator}></div>
                                    <div className={utils.project_card_info}>
                                        <p>Program made using Java and SQL.</p>
                                    </div>
                                </div>
                            </div>
                        </a>

                    </div>

                    <div className={utils.project_1}>
                    </div>

                    <div className={utils.project_1}>
                    </div>

                    <div className={utils.project_1}>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AppDisplay;