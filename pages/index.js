
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
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GZTGD2Z4VG"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-GZTGD2Z4VG');
</script>

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

