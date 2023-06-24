import style from '../style/landing-page-style/article-box.module.css';

export default function Articles({image, title, isNew}) {
  return (
    <div className={style.container}>
      <img src={image}/>
      <div className={style.titlebox}>
        <p className={isNew ? style.visible : style.nonvisible}>NEW!</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
}
