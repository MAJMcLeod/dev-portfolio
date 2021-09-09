
import utils from '../styles/utils.module.css'
import Nav from '../components/Nav'
import AboutIntro from '../components/AboutIntro'
import Experience from '../components/Experience'
import AboutMe from '../components/AboutMe'
import Footer from '../components/Footer'
import Seperator from '../components/Seperator'
// importing stylesheets and components

const Home = () => {
  return (
    <div className={utils.container}>
      <Nav/>
      <AboutIntro/>
      <Seperator/>
      <AboutMe/>
      <Seperator/>
      <Experience/>
      <Seperator/>
      <Footer/>

    </div>
  )
}

export default Home;

