import React from "react";

import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import style from './Services.module.css';
function Service(){ 
const data=[{
icon:service1,
title:"Get Best Price",
subTitle:"Pay through our application and save thousands and get amazing rewards.",
},
{
icon:service2,
title:"Covid Safe",
subTitle:"We have all the curated hotels that have all the precaution for a covid safe environment.",
},
{
icon:service3,
title:"Best Payment Method",
subTitle:"Enjoy the flexible payment through our app and get rewards on every payment.",
},
{
icon:service4,
title:"Find The Best Near You",
subTitle:"Find the best hotels and places to visit near you in a single click.",
},
];
<div className={style.title}>
<h2>Our Service</h2>
</div>
return(<section className={style.section}>

{
data.map((service)=>{
return( 
<div className={style.service}>
<div className={style.icon}>
<img className={style.img} src={service.icon} alt=" "/>
</div>
<h3 className={style.service}><b>{service.title}</b></h3>
<p className={style.service}>{service.subTitle}</p>
</div>)
})
}
</section>
);
};
export default Service;
