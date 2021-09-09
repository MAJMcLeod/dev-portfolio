import utils from '../styles/utils.module.css'
// importing stylesheets

let AnimationDisplay = () => {
      // initializing a functional component
    return (
        <div className={utils.anim_container_2}>
            {/* classes used to style components */}
             <h1>Animations</h1>
        <div className={utils.anim_container}>
           
            
            <div className={utils.anim_outer}>
            <div className={utils.brd_seperate}></div>
                <div className={utils.anim_inner}>
                    <div className={utils.vid_outer}>
                        <div className={utils.vid}>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/A8RLzYixENA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={utils.vid_desc}>
                            <div className={utils.desc_1}>
                                <h2>Confinement</h2>
                                <p>2021</p>
                            </div>

                            <div>
                                <p>A short WIP trailer for an upcoming animation of mine. Made in Blender, everything modeled from scratch.</p>
                            </div>
                        </div>
                    </div>

                    <div className={utils.vid_outer}>
                        <div className={utils.vid}>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/sbugXYV5GM4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={utils.vid_desc}>
                            <div className={utils.desc_1}>
                                <h2>War</h2>
                                <p>2020</p>
                            </div>

                            <div>
                                <p>Another animation made during my early stages of learning blender, I used this as a way to learn some basic character animation and sound design.</p>
                            </div>
                        </div>
                    </div>

                    <div className={utils.vid_outer}>
                        <div className={utils.vid}>
                            <iframe width="100%" height="450" src="https://www.youtube.com/embed/QVtSoTlqR5s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        <div className={utils.vid_desc}>
                            <div className={utils.desc_1}>
                                <h2>Containment Breach</h2>
                                <p>2020</p>
                            </div>

                            <div>
                                <p>Containment breach was a project in which I took all my 4 months of knowledge in blender at the time and applied it to one focused animation. Inspired by the SCP series.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

    )
}

export default AnimationDisplay;