import style from '../style/landing-page-style/intro-banner.module.css';
import banner from '../images/introbanner.png'
import OptionsMenu from './options-menu'


export default function IntroBanner() {
  return (
    <>
      
      <div className={style.container}>
        <div className={style.gradient}></div>
        <img src={banner} alt='banner'></img>
        <div className={style.text}>
          <p className={style.title}>Excellent pets deserve excellent care.</p>
          <p className={style.subtitle}>No matter where you're going from, we are always there.</p>
          <p className={style.subtitle}>We are professional care for your pets.</p>
        </div>
      </div>
      <div className={style.optionsmenu} >
          <OptionsMenu/>
      </div>
    </>
  );
}