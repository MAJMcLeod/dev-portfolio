
import Nav from '../components/Nav'
import ProjectsDisplay from '../components/ProjectsDisplay'
import Seperator from '../components/Seperator'
import ProjectsIntro from '../components/ProjectsIntro'
import AppDisplay from '../components/AppDisplay'
import AnimationDisplay from '../components/AnimationDisplay'
// importing stylesheets and components

let Projects = () =>{
    return(
        <div>
            <Nav/>
            <ProjectsIntro/>
            <Seperator/>
            <ProjectsDisplay/>
            <Seperator/>
            <AppDisplay/>
            <Seperator/>
            <AnimationDisplay/>
        </div>
    )
}

export default Projects;