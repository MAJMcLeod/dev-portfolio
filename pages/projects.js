
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
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GZTGD2Z4VG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GZTGD2Z4VG');
</script>
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
