import React from "react";
import './style.css';

function Slider(props) {

    let imgUrl1 = "https://i.ibb.co/6ZwxysQ/Full-Size-Render-1.jpg"
    let imgUrl2 = "https://i.ibb.co/86MxWDz/Full-Size-Render-2.jpg"
    let imgUrl3 = "https://i.ibb.co/4mvJHvX/Full-Size-Render-3.jpg"
    let imgUrl4 = "https://i.ibb.co/f8s27Tf/Full-Size-Render-4.jpg"
    let imgUrl5 = "https://i.ibb.co/q92RZnt/Full-Size-Render-5.jpg"
    let imgUrl6 = "https://i.ibb.co/4Z57nNG/Full-Size-Render.jpg"

    
    return (
        <div className="untitled" {...props}>
            <div className="untitled__slides">

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl1 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl1 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@scoutthecity" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl2 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl2 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@madbyte" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl3 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl3 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@maicoamorim" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl4 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl4 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl5 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl5 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

                <div className="untitled__slide" style={{ backgroundImage: "url(" + imgUrl6 + ")"}}>
                    <div className="untitled__slideBg" style={{ backgroundImage: "url(" + imgUrl6 + ")", imageResolution: "500dpi"}}></div>
                    <div className="untitled__slideContent">
                        {/* <a className="button" href="https://unsplash.com/@mariocalvo" target="/black">Unsplash Profile</a> */}
                    </div>
                </div>

            </div>
            <div className="untitled__shutters"></div>
            {props.children}
        </div>

        
    );
}
export default Slider;