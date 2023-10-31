import React, { useState } from "react";
import style from './Recommend.module.css';
import Destination1 from '../assets/Destination1.jpg';
import Destination2 from '../assets/Destination2.jpg';
import Destination3 from '../assets/Destination3.jpg';
import Destination4 from '../assets/Destination4.webp';
import Destination5 from '../assets/Destination5.png';
import Destination6 from '../assets/Destination6.jpg';
import info1 from '../assets/info1.png';
import info2 from '../assets/info2.png'; 
import info3 from '../assets/info3.png';
import Model from "./Model";
function Recommend(){
    const [showmodel,setShowmodel]=useState(false);
const data = [{
image: Destination1,
title: "Singapore",
subTitle: "Singapore,  thr Republic of Singapore, is a",
cost: "38,800",
duration: "Approx 2 night trip",
},
{
image: Destination2,
title: "Thailand",
subTitle: "Thailand is a Southeast Asia country. It's known for",
cost: "54,200",
duration: "Approx 2 night trip",
},
{
image: Destination3,
title: "Paris",
subTitle: "Paris, France's capital, is a major European city and a",
cost: "45,500",
duration: "Approx 2 night trip",
}, 
{
image: Destination4,
title: "New Zealand",
subTitle: "New Zealand is an island country in the",
cost: "24,100",
duration: "Approx 1 night trip",
},
{
image: Destination5,
title: "Bora Bora",
subTitle: "Bora Bora is a small South Pacific island northwest of",
cost: "95,400",
duration: "Approx 2 night 2 day trip",
},
{
image: Destination6,
title: "London",
subTitle: "London, the capital of England and the United",
cost: "38,800",
duration: "Approx 3 night 2 day trip",
},
];
const packages = [
"The Weekend Break",
"The Package Holiday",
"The Group Tour",
"Long Term Slow Travel",
];
const [active, setActive] = useState(1);
return (<div className={style.recommend}>
<div className={style.title}>
<h2>Recommended Destinations</h2>
</div>
<div className={style.packages}>
<ul className={style.uld}>
{packages.map((pkg, index) => {
return (
<li id={style.li}
className={active === index + 1 ? "active" : ""}
onClick={() => setActive(index + 1)}
>
{pkg}
</li>
);
})}
</ul>
</div>
<div className={style.destinations}>
{data.map((destination) => {
return (
<div className={style.destination}>
<img className={style.img1} src={destination.image} alt="" />
<h3>{destination.title}</h3>
<p>{destination.subTitle}</p>
<div className={style.info}>
<div className={style.services}>
<img className={style.info1} id={style.img2} src={info1} alt="" />
<img className={style.info1} id={style.img2} src={info2} alt="" />
<img className={style.info1} id={style.img2} src={info3} alt="" />
<button className={style.Booking} onClick={()=>setShowmodel(true)}>Book Now</button>
        {showmodel &&(
            <Model title={<p>Hello</p>}
            content={<p>hello</p>}
            close={setShowmodel}
            />
                
            
        )}
</div>
<h4>{destination.cost}</h4>
</div>
<div className={style.distance}>
<span>1000 Kms</span>
<span>{destination.duration}</span>
</div>
</div>
);
})}
</div>
</div>
);
}
export default Recommend;