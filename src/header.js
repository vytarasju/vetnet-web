import style from './style/header.module.css';
import logo from './images/vetnet-logo.png'

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.leftContainer}>
        <img src={logo} />
      </div>
      <div className={style.rightContainer}>
        <div>About</div>
        <div>Home</div>
        <div>Contacts</div>
        <button>Log in</button>
      </div>
    </header>
  );
}