import React from "react"
import preloaderImage from "../../assets/images/preloader.svg"
import s from "./Preloader.module.css"
const Preloader = () => {
    return (
        <div className={s.preloader}>
            <img src={preloaderImage}/>
        </div>
    )
}
export default Preloader;