import utils from '../styles/utils.module.css'
// importing stylesheets

let Seperator = () =>{
      // initializing a functional component
    return (
        <div className={utils.seperator_outer}>
            {/* classes used to style components */}
            <div className={utils.seperator}></div>
        </div>
        
    )
}

export default Seperator 