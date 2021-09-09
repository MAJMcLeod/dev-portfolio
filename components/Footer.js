import utils from '../styles/utils.module.css'
import Link from 'next/link'
// importing stylesheets

let Footer = () => {
      // initializing a functional component
    return (
        <div className={utils.footer_outer}>
            {/* classes used to style components */}
                <div className={utils.footer_inner}>
                    <h1>YO!</h1>
                    <p>Thanks for checking out my site!</p>
                    <p className={utils.footer_comment}>This site was made from scratch using NextJS and React</p>
                    <div>
                        <h2>Check out my</h2>
                        <Link href="/projects"><h2><a>Projects[]</a></h2></Link>
                        <h2>to see some of my websites and artworks.</h2>
                    </div>
                </div>
        </div >
    )
}

export default Footer;