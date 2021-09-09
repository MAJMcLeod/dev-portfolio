import utils from '../styles/utils.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
// importing stylesheets

let Nav = () => {
    // initializing a functional component
    return (

        <div className={utils.nav_outer}>
            {/* classes used to style components */}
            <div className={utils.nav_inner}>
                <div className={utils.nav_socials}>
                    <div></div>
                    <div className={utils.nav_socials_inner}>
                        <p>maxajmcleod@gmail.com</p>
                        <ul>
                            <li><a href="https://github.com/MAJMcLeod" target="_blank" rel="noreferrer"><AiFillGithub className={utils.nav_icons} /></a></li>
                            {/* use of links to take the user to a new tab */}
                            <li><a href="https://www.linkedin.com/in/max-mcleod-62bb43212/" target="_blank" rel="noreferrer"><AiFillLinkedin className={utils.nav_icons} /></a></li>
                        </ul>
                    </div>
                </div>
                <div className={utils.nav}>
                    <div>
                        <p>.mC</p>
                    </div>
                    <div>
                        <ul>
                            <li><Link href="/">.Home()</Link></li>
                            <li><Link href="/projects">.Projets[]</Link></li>
                             {/* use of links to take the user to a new page */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;