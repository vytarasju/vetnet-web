import style from '../style/landing-page-style/landing-page.module.css';
import Header from '../header'
import IntroBanner from './intro-banner.js'
import Articles from './articles.js'



function LandingPage() {
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <IntroBanner/>
        <Articles/>
      </div>
    </>
  );
}

export default LandingPage;
