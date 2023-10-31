import React from "react";
import video from '../assets/video.mp4';
import style from './Image.module.css';
function Image(){
    return(<section  className={style.Image}>
        <div className={style.background}>
        <video autoPlay loop muted className={style.img}>
        <source src={video} type="video/mp4"  />
        </video>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    <h1 className={style.h}><b>Travel To Explore With Us</b></h1>
                    <p className={style.p}><b>You Enjoy Your's  Travel In Our Website Visit To Explore Your Dream Places In The World's.</b></p>
                </div>

<div className={style.search}>
    <div className={style.container}>
        <label htmlFor="" className={style.label}><b>Where You Want To Go</b></label>
<input type="text" placeholder="Search Your Location" className={style.input}/>
    </div>
    <div className={style.container}>
        <label htmlFor="" className={style.label}><b>Check-In</b></label>
<input type="date" className={style.input}/>
    </div>
    <div className={style.container}>
        <label htmlFor="" className={style.label}><b>Check-Out</b></label>
<input type="date" className={style.input}/>
    </div>
    <button className={style.MyButton}>Explore Now</button>
    </div>
    
            </div>

    </section>
    )
}

export default Image;