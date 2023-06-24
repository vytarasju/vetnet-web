import style from '../style/landing-page-style/options-menu.module.css';
import calendarico from '../images/calendar.svg'
import dietico from '../images/meat.svg'
import analyzeico from '../images/camera.svg'
import consultationico from '../images/robot.svg'
import locationico from '../images/location.svg'
import globeico from '../images/globe.svg'
import profileico from '../images/profile.svg'
import searchico from '../images/search.svg'


export default function OptionsMenu() {
  return (
    <div className={style.container}>
      <div className={style.features}>
        <h3>Features</h3>
        <div className={style.buttons}>
          <div className={style.schedule}>
            <button><img src={calendarico}/></button>
            <p>Schedule Reminder</p>
          </div>
          <div className={style.schedule}>
            <button><img src={dietico}/></button>
            <p>Suggested Diet</p>
          </div>
          <div className={style.schedule}>
            <button><img src={analyzeico}/></button>
            <p>Ingredient Analyzer</p>
          </div>
          <div className={style.schedule}>
            <button><img src={consultationico}/></button>
            <p>Quick Consultation</p>
          </div>
        </div>
      </div>
      <div className={style.maps}>
        <h3>Veterinary near me</h3>
        <div className={style.location}>
          <img src={locationico}/>
          <p>Hualien</p>
        </div>
        <div className={style.worldmap}>
          <img src={globeico}/>
          <h4> See World Map</h4>
        </div>
      </div>
      <div className={style.chat}>
        <div className={style.title}>
          <h3>Chat with vets</h3>
          <button>
            <img src={searchico}/>
          </button>
        </div>
        <div className={style.profiles}>
          <button>
            <img src={profileico}/>
          </button>
          <button>
            <img src={profileico}/>
          </button>
          <button>
            <img src={profileico}/>
          </button>
        </div>
      </div>
    </div>
  );
}