import React from "react";
import bgImage from './images/UltraVoilet.png';
import { useGlobalContext } from "./useContextData";


function Hero(){
    const {isSidebarOpen, closeSubmenu} = useGlobalContext();


    return (
        <div className={isSidebarOpen ? "layout" : "main-body"} onMouseOver={closeSubmenu}>
            <article className="body-center">
                <h1>Most UseFul Life</h1>
                <p>Remember, the exact colors and transitions can be fine-tuned to match your project's needs. Feel free to experiment with different color combinations and positions until you achieve the desired effectRemember, the exact colors and transitions can be fine-tuned to match your project's needs</p>
            </article>
            <article className="paymentInput">

            </article>
        </div>
    )
}

export default Hero