import React, { useState }  from "react";
import '../componentcss/ImagePopupClient.css'


function ImagePopupClient({ Img }) {

    const [imgPopupLaunch, setImgPopupLaunch] = useState(false);

    const handleClick = () => {
        // Toggle ImgPopUp
        setImgPopupLaunch(!imgPopupLaunch)
    }


    return (  
        <div className ='pic-div'>
            <img className ='client-pic' src={Img} onClick={handleClick} alt=""/>
            { imgPopupLaunch ? 
                    (
                    <div className="dialog-backdrop">
                        {/* one style for mobile/one for desktop */}
                        <dialog className="dialog center" open style={{ maxWidth: '75vw' }} onClick={handleClick} >
                            <img className='img-fluid' src={Img} style={{ minHeight: '100%' }} onClick={handleClick} alt="" />
                        </dialog>
                    </div>
                ) 
                : 
                ''
            }
        </div>
    );
}

export default ImagePopupClient;
