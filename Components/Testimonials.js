import React from "react";
import style from './Testimonials.module.css';
import testimonial from '../assets/testimonial.jpg';
import testimonial1 from '../assets/testimonial1.jpg';
import testimonial2 from '../assets/testimonial2.jpg';
function Testimonials(){
return(<div className={style.main}>
<div className={style.title}>
<h2>Happy Customer</h2>
</div>
<div className={style.Testimonials}>
<div className={style.Testimonial}>
<p>This is our website feel to free and ask question and make ur dream</p>
<div className={style.info}>
<img className={style.img} src={testimonial} alt=""/>
<div className={style.details}>
<h4>Jhon Doe</h4>
<span className={style.span}>CEO- Shan web 
developer</span>
</div>
</div>
</div>
<div className={style.Testimonial}>
<p>This is our website feel to free and ask question and make ur dream</p>
<div className={style.info}>
<img className={style.img} src={testimonial1} alt=""/>
<div className={style.details}>
<h4>Emma Watson</h4>
<span className={style.span}>CEO- Shan web 
developer</span>
</div>
</div>
</div>
<div className={style.Testimonial}>
<p>This is our website feel to free and ask question and make ur dream</p>
<div className={style.info}>
<img className={style.img} src={testimonial2} alt=""/>
<div className={style.details}>
<h4>Adam Phillips</h4>
<span className={style.span}>CEO- Shan web 
developer</span>
</div>
</div>
</div>
</div>
</div>)
}
export default Testimonials;